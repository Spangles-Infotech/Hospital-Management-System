const Patient = require("../models/patient.model")
const { sendMessage, skipPage, setQuery } = require("../utils/function")

// const patient = async(req, res, next)=>{
//     const additionalInfo = {
//         birthTime: req.body.birthTime,
//         birthPlace: req.body.birthPlace,
//         birthWeight: req.body.birthWeight,
//     }
//     const {patientId} = req.params
//     const {page, limit=15} = req.query
//     const {id, mobileNumber} =  req.query
//     let query = {}
//     try {
//         if(req.method === "POST"){
//             await Patient.create({...req.body, additionalInfo:additionalInfo})
//             return sendMessage(res, 201, "Patient Created Successfully")
//         }
//         if(req.method === "GET"){
//             if(patientId){
//                 const patient = await Patient.findById(patientId)
//                 if(!patient){
//                     return sendMessage(res, 404, "Patient Not Found")
//                 }
//                 return sendMessage(res, 200, "Patient fetched Successfully", patient)
//             }
//             if( id || mobileNumber){
//                 const patient = await Patient.find({$or:[{patientId:id},{"mobileNumber.number":mobileNumber}]})
//                 if(!patient){
//                     return sendMessage(res, 404, "Patient Not Found")
//                 }
//                 return sendMessage(res, 200, "Patient fetched Successfully", patient)
//             }
//             const patients = await Patient.find(query).sort({_id:-1}).limit(limit).skip(skipPage(page, limit))
//             return sendMessage(res, 200, "Patients fetched Successfully", patients)
//         }
//         if(req.method === "PUT"){
//             await Patient.findByIdAndUpdate( patientId, {...req.body, updatedAt:Date.now() }, {new:true})
//             return sendMessage(res, 200, "Patient Updated Successfully")
//         }
//     } catch (error) {
//         next(error)
//     }
// }
const patient = async (req, res, next) => {
    const additionalInfo = {
      birthTime: req.body.birthTime,
      birthPlace: req.body.birthPlace,
      birthWeight: req.body.birthWeight,
    };
  
    const { patientId } = req.params;
    const { page, limit = 15, id, mobileNumber, search } = req.query;
  
    let query = {};
  
    try {
      if (req.method === "POST") {
        await Patient.create({ ...req.body, additionalInfo });
        return sendMessage(res, 201, "Patient Created Successfully");
      }
  
      if (req.method === "GET") {
        // 🔍 Fetch by ID in params
        if (patientId) {
          const patient = await Patient.findById(patientId);
          if (!patient) {
            return sendMessage(res, 404, "Patient Not Found");
          }
          return sendMessage(res, 200, "Patient fetched Successfully", patient);
        }
  
        // 🔍 Fetch by query: id or mobile number
        if (id || mobileNumber) {
          const patient = await Patient.find({
            $or: [
              { patientId: id },
              { "mobileNumber.number": mobileNumber },
            ],
          });
  
          if (!patient || patient.length === 0) {
            return sendMessage(res, 404, "Patient Not Found");
          }
          return sendMessage(res, 200, "Patient fetched Successfully", patient);
        }
  
        // 🔍 Search by patientId or patientName
        // if (search) {
        //   query = {
        //     $or: [
        //       { mobileNumber: { $regex: search, $options: "i" } },
        //       { patientName: { $regex: search, $options: "i" } },
        //     ],
        //   };
        // }
        if (search) {
            // To handle if search is numeric or string for mobileNumber
            const searchNumber = Number(search);
            const isNumber = !isNaN(searchNumber);
          
            query = {
              $or: [
                // Search patientName.name case-insensitive
                { "patientName.name": { $regex: search, $options: "i" } },
                
                // Search mobileNumber.number as string regex
                { "mobileNumber.number": { $regex: search, $options: "i" } },
          
                // Optional: if search is number, match exactly
                ...(isNumber ? [{ "mobileNumber.number": searchNumber }] : []),
              ],
            };
          }
          
  
        const patients = await Patient.find(query)
          .sort({ _id: -1 })
          .limit(Number(limit))
          .skip(skipPage(page, limit));
  
        return sendMessage(res, 200, "Patients fetched Successfully", patients);
      }
  
      if (req.method === "PUT") {
        await Patient.findByIdAndUpdate(
          patientId,
          { ...req.body, updatedAt: Date.now() },
          { new: true }
        );
        return sendMessage(res, 200, "Patient Updated Successfully");
      }
    } catch (error) {
      next(error);
    }
  };
  
  

const getPatientInfo = async(req, res, next)=>{
    try {
        const {search} = req.query
        const searchItems = ["mobileNumber.number", "patientId"]
        let query = {}
        if(search){
            setQuery([], search, searchItems, query)
            const patient = await Patient.find(query).select(["_id", "patientId",  "mobileNumber", "patientName"]).limit(4)
            return sendMessage(res, 200, "Data fetched successfully", patient)
        }
    } catch (error) {
        next(error)
    }
}

const getNextPatientId = async (req, res, next) => {
    try {
      const lastPatient = await Patient.findOne().sort({ _id: -1 });
      let nextPatientIdNum = 1;
      if (lastPatient && lastPatient.patientId) {
        const lastIdNum = parseInt(lastPatient.patientId.replace('PAT-', ''));
        if (!isNaN(lastIdNum)) {
          nextPatientIdNum = lastIdNum + 1;
        }
      }
      const newPatientId = `PAT-${String(nextPatientIdNum).padStart(3, '0')}`;
      return sendMessage(res, 200, "Next Patient ID fetched Successfully", { patientId: newPatientId });
    } catch (error) {
      next(error);
    }
  };

module.exports = {patient, getPatientInfo, getNextPatientId}