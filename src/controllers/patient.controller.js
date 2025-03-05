const Patient = require("../models/patient.model")
const { sendMessage, skipPage } = require("../utils/function")

const patient = async(req, res, next)=>{
    const additionalInfo = {
        birthTime: req.body.birthTime,
        birthPlace: req.body.birthPlace,
        birthWeight: req.body.birthWeight,
    }
    const {patientId} = req.params
    const {page, limit=15} = req.query
    const {id, mobileNumber} =  req.query
    let query = {}
    try {
        if(req.method === "POST"){
            await Patient.create({...req.body, additionalInfo:additionalInfo})
            return sendMessage(res, 201, "Patient Created Successfully")
        }
        if(req.method === "GET"){
            if(patientId){
                const patient = await Patient.findById(patientId)
                if(!patient){
                    return sendMessage(res, 404, "Patient Not Found")
                }
                return sendMessage(res, 200, "Patient fetched Successfully", patient)
            }
            if( id || mobileNumber){
                const patient = await Patient.find({$or:[{patientId:id},{"mobileNumber.number":mobileNumber}]})
                if(!patient){
                    return sendMessage(res, 404, "Patient Not Found")
                }
                return sendMessage(res, 200, "Patient fetched Successfully", patient)
            }
            const patients = await Patient.find(query).sort({_id:-1}).limit(limit).skip(skipPage(page, limit))
            return sendMessage(res, 200, "Patients fetched Successfully", patients)
        }
        if(req.method === "PUT"){
            await Patient.findByIdAndUpdate( patientId, {...req.body, updatedAt:Date.now() }, {new:true})
            return sendMessage(res, 200, "Patient Updated Successfully")
        }
    } catch (error) {
        next(error)
    }
}

module.exports = patient