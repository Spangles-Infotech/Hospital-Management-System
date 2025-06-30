const { default: mongoose } = require("mongoose")
const Doctor = require("../models/doctorfee.model")
const User = require("../models/doctorUser.model")
const { sendMessage, skipPage } = require("../utils/function")
const DoctorFee = require("../models/doctorfee.model")

const doctor = async(req, res, next)=>{
    try {
        const {userId, doctorId} = req.params
        console.log(req.params)
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
              userId: user._id, // Add this line to save the userId
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
        if (req.method === "GET" && req.url === "/get-next-doctor-id") {
            const lastDoctor = await Doctor.findOne({}, {}, { sort: { doctorId: -1 } });
            let nextId = "GDR001";
            if (lastDoctor && lastDoctor.doctorId) {
                const currentNumber = parseInt(lastDoctor.doctorId.slice(3));
                const formattedNumber = (currentNumber + 1).toString().padStart(3, "0");
                nextId = `GDR${formattedNumber}`;
            }
            return sendMessage(res, 200, "Next Doctor ID Fetched Successfully", { doctorId: nextId });
        }

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

        const getDoctorFee = async(req, res) => {
          try {
            const { name } = req.params; // 'name' is actually doctorId from the route
            const doctorFeeData = await Doctor.findOne({ doctorId: name });
        
            if (!doctorFeeData) {
              return sendMessage(res, 404, "Doctor Fee Not Found");
            }
        
            return sendMessage(res, 200, "Doctor Fee Fetched Successfully", doctorFeeData);
          } catch (error) {
            return sendMessage(res, 500, "Error fetching doctor fee", error.message);
          }
        };

        
          
          
        
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
                const { userId } = req.params; // This is the _id of the User document
                const { doctorFee } = req.body;

                if (!userId) {
                    return sendMessage(res, 400, "User ID is required");
                }

                // 1. Find the User document by its _id
                const user = await User.findById(userId);
                if (!user) {
                    return sendMessage(res, 404, "User (Doctor) not found");
                }

                // 2. Get the doctorId from the User document
                const doctorIdFromUser = user.doctorId;
                if (!doctorIdFromUser) {
                    return sendMessage(res, 404, "Doctor ID not found for this user");
                }

                // 3. Use this doctorId to find and update the Doctor document
                const doctor = await Doctor.findOneAndUpdate(
                    { doctorId: doctorIdFromUser }, // Use doctorId from User document
                    { fee: doctorFee },
                    { new: true }
                );

                if (!doctor) {
                    return sendMessage(res, 404, "Doctor fee record not found");
                }

                return sendMessage(res, 200, "Doctor fee updated successfully", doctor);
            } catch (error) {
                console.error("Error updating doctor fee:", error);
                return sendMessage(res, 500, "Error updating doctor fee", error.message);
            }
        }
    } catch (error) {
        next(error)
    }
}


const getDoctorFee = async (req, res, next) => {
    try {
        const { name } = req.params;
        const user = await User.findOne({ name }).select("doctorId");
        if (!user) return sendMessage(res, 404, "Doctor not found");
        const fees = await DoctorFee.findOne({ doctorId: user.doctorId }).distinct("fee");
        return sendMessage(res, 200, "Doctor Fee Fetched Successfully", fees);
    } catch (error) {
        next(error);
    }
};


module.exports = {
    doctor,
    getDoctorFee
}