const Doctor = require("../models/doctorfee.model")
const User = require("../models/doctorUser.model")
const { sendMessage, skipPage } = require("../utils/function")

const doctor = async(req, res, next)=>{
    try {
        const {userId, doctorId} = req.params
        const {page, limit=15, isName} = req.query
        const { timing, doctorFee} = req.body
        let query = {}
        // if(req.method === "POST"){

        //     if ('id' in req.body) {
        //         delete req.body.id;
        //     }
        //     const user = await User.create(req.body);

        //     // Generate next doctorId
        //     const lastDoctor = await Doctor.findOne({}, {}, { sort: { doctorId: -1 } });
    
        //     let nextId = 'GDR001';
        //     if (lastDoctor && lastDoctor.doctorId) {
        //         const currentNumber = parseInt(lastDoctor.doctorId.slice(3));
        //         const formattedNumber = (currentNumber + 1).toString().padStart(3, '0');
        //         nextId = `GDR${formattedNumber}`;
        //     }
    
        //     // Create doctor with reference to userId
        //     await Doctor.create({ userId: user._id, timing: timing, doctorId: nextId });
    
        //     return sendMessage(res, 201, "Doctor Created Successfully");
        // }
        if (req.method === "POST") {
            if ("id" in req.body) {
              delete req.body.id;
            }
          
            // Generate next doctorId
            const lastDoctor = await Doctor.findOne({}, {}, { sort: { doctorId: -1 } });
          
            let nextId = "GDR001";
            if (lastDoctor && lastDoctor.doctorId) {
              const currentNumber = parseInt(lastDoctor.doctorId.slice(3));
              const formattedNumber = (currentNumber + 1).toString().padStart(3, "0");
              nextId = `GDR${formattedNumber}`;
            }
          
            // Add doctorId to user and create the user
            const user = await User.create({ ...req.body, doctorId: nextId });
          
            // Create doctor using same doctorId
            await Doctor.create({
              doctorId: nextId,
              timing: req.body.timing || [],
            });
          
            return sendMessage(res, 201, "Doctor Created Successfully");
          }
          
        // if(req.method === "GET"){
        //     if(userId){
        //         const doctor = await User.findOne({userId:userId}).populate("userId")
        //         if(doctor === null){
        //             return sendMessage(res, 404, "No Doctor Found")
        //         }
        //         return sendMessage(res, 200, "Doctor Fetched Successfully 0", doctor)
        //     }
        //     if(isName){
        //         const distinctUserIds = await Doctor.distinct("userId"); 
        //         const doctors = await User.find({ _id: { $in: distinctUserIds } }).distinct("name"); 
        //         return sendMessage(res, 200, "Doctors Fetched Successfully 1", doctors);
        //     }
        //     const doctors = await Doctor.find(query).populate("userId").sort({_id:-1}).limit(limit).skip(skipPage(page, limit))
        //     return sendMessage(res, 200, "Doctors Fetched Successfully 2", doctors)
        // }
        // if (req.method === "GET") {
        //     if (doctorId) {
        //       const user = await User.findOne({ doctorId });
        //       const doctor = await Doctor.findOne({ doctorId });
          
        //       if (!doctor || !user) {
        //         return sendMessage(res, 404, "No Doctor Found");
        //       }
          
        //       const combined = {
        //         ...doctor.toObject(),
        //         userInfo: user,
        //       };
          
        //       return sendMessage(res, 200, "Doctor Fetched Successfully", combined);
        //     }
          
        //     if (isName) {
        //       const distinctDoctorIds = await Doctor.distinct("doctorId");
        //       const doctors = await User.find({ doctorId: { $in: distinctDoctorIds } }).distinct("name");
          
        //       return sendMessage(res, 200, "Doctors Fetched Successfully", doctors);
        //     }
          
        //     // Fetch all doctors based on query with pagination
        //     const doctors = await Doctor.find(query)
        //       .sort({ _id: -1 })
        //       .limit(limit)
        //       .skip(skipPage(page, limit));
          
        //     // Handle case where no doctors exist
        //     if (!doctors || doctors.length === 0) {
        //       return sendMessage(res, 200, "No doctors found", []);
        //     }
          
        //     // Populate userInfo for each doctor
        //     const populatedDoctors = await Promise.all(
        //       doctors.map(async (doc) => {
        //         const user = await User.findOne({ doctorId: doc.doctorId });
        //         return {
        //           ...doc.toObject(),
        //           userInfo: user || {},
        //         };
        //       })
        //     );
          
        //     return sendMessage(res, 200, "Doctors Fetched Successfully", populatedDoctors);
        //   }
        if (req.method === "GET") {
          try {
            // 1. Fetch single doctor by doctorId
            if (doctorId) {
              const [doctor, user] = await Promise.all([
                Doctor.findOne({ doctorId }),
                User.findOne({ doctorId }),
              ]);
          
              if (!doctor || !user) {
                return sendMessage(res, 404, "No Doctor Found");
              }
          
              const combined = {
                ...doctor.toObject(),
                userId: user.toObject(),
              };
          
              return sendMessage(res, 200, "Doctor Fetched Successfully", combined);
            }
          
            // 2. Fetch distinct doctor names
            if (isName) {
              const distinctDoctorIds = await Doctor.distinct("doctorId");
              const doctorNames = await User.find({
                doctorId: { $in: distinctDoctorIds },
              }).distinct("name");
          
              return sendMessage(res, 200, "Doctors Fetched Successfully", doctorNames);
            }
          
            // 3. Fetch paginated doctors with user info
            const doctors = await Doctor.find(query)
              .sort({ _id: -1 })
              .limit(limit)
              .skip(skipPage(page, limit));
          
            if (!doctors || doctors.length === 0) {
              return sendMessage(res, 200, "No doctors found", []);
            }
          
            // Merge doctor and user info for each entry
            const combinedDoctors = await Promise.all(
              doctors.map(async (doc) => {
                const user = await User.findOne({ doctorId: doc.doctorId });
                return {
                  ...doc.toObject(),
                  userId: user?.toObject() || {},
                };
              })
            );
          
            return sendMessage(res, 200, "Doctors Fetched Successfully", combinedDoctors);
          } catch (error) {
            return sendMessage(res, 500, "Error fetching doctor data", error.message);
          }
        }

      

        
          
          
        
        if(req.method === "PUT"){
            try {
                if (!userId) {
                    return sendMessage(res, 400, "User ID is required");
                }

                const [updatedUser, updatedDoctor] = await Promise.all([
                    User.findByIdAndUpdate(userId, req.body, {new: true}),
                    Doctor.findOneAndUpdate(
                        {userId: userId},
                        {$set: {timing: timing || []}},
                        {new: true}
                    )
                ]);

                if (!updatedUser || !updatedDoctor) {
                    return sendMessage(res, 404, "Doctor not found");
                }

                return sendMessage(res, 200, "Doctor updated Successfully");
            } catch (error) {
                return sendMessage(res, 500, "Error updating doctor", error.message);
            }
        }

        if(req.method === "PATCH"){
            try {
                if (!userId) {
                    return sendMessage(res, 400, "User ID is required");
                }

                if (doctorFee) {
                    const doctor = await Doctor.findOne({userId: userId});
                    if (!doctor) {
                        return sendMessage(res, 404, "Doctor not found");
                    }

                    const updatedDoctor = await Doctor.findOneAndUpdate(
                        {userId: userId},
                        {$set: {fee: doctorFee}},
                        {new: true}
                    );

                    return sendMessage(res, 200, "Doctor Fee Updated Successfully");
                }

                const inactivatedDoctor = await Doctor.findOneAndUpdate(
                    {userId: userId},
                    {$set: {status: "Inactivate"}},
                    {new: true}
                );

                if (!inactivatedDoctor) {
                    return sendMessage(res, 404, "Doctor not found");
                }

                return sendMessage(res, 200, "Doctor Inactivated Successfully");
            } catch (error) {
                return sendMessage(res, 500, "Error updating doctor status", error.message);
            }
        }
        if(req.method === "DELETE") {
            return sendMessage(res, 405, "Method not allowed");
        }
    } catch (error) {
        next(error)
    }
}


const getDoctorFee = async (req, res, next) => {
    try {
        const { name } = req.params;
        const user = await User.findOne({ name }).select("_id");
        if (!user) return sendMessage(res, 404, "Doctor not found");
        const fees = await Doctor.findOne({ userId: user._id }).distinct("fee");
        return sendMessage(res, 200, "Doctor Fee Fetched Successfully", fees);
    } catch (error) {
        next(error);
    }
};


module.exports = {doctor, getDoctorFee}