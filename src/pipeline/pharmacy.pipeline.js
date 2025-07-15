const mongoose = require("mongoose");

const Appointment = require("../models/appointment.modal")

const getPurchaseHistoryPipeline = (medicineName)=>{
    return ([
        {
            $lookup: {
                from: "medicineinfos", 
                localField: "medicineInfo",
                foreignField: "_id",
                as: "medicineDetails"
            }
        },
        { $unwind: "$medicineDetails" },
        { $unwind: "$medicineDetails.medicines" },
        {
            $match: {
                "medicineDetails.medicines.medicineName": { 
                    $regex: "^" + medicineName + "$", 
                    $options: "i" 
                }
            }
        },
        {
            $project: {
                _id: 0,
                medicineName: "$medicineDetails.medicines.medicineName",
                supplierName: 1,
                availableQuantity: "$medicineDetails.medicines.availableQuantity",
                purchaseRate: "$medicineDetails.medicines.purchaseRate",
                mrp: "$medicineDetails.medicines.mrp",
                discount: "$medicineDetails.medicines.discount",
                batch: "$medicineDetails.medicines.batchNo",
                free: "$medicineDetails.medicines.free",


                purchaseDate: 1 // Include purchaseDate for sorting
            }
        },
        { $sort: { purchaseDate: -1 } }, // Sort by purchaseDate in descending order (latest first)
        { $limit: 5 } // Get the last 5 purchase records
    ])
}

const getAllPrescriptionPipeline = [
    {
      '$lookup': {
        'from': 'patients', 
        'localField': 'patientId', 
        'foreignField': '_id', 
        'as': 'patientDetails'
      }
    }, {
      '$unwind': {
        'path': '$patientDetails', 
        'preserveNullAndEmptyArrays': true
      }
    }, {
      '$lookup': {
        'from': 'appointments', 
        'localField': 'appointmentId', 
        'foreignField': '_id', 
        'as': 'appointmentDetails'
      }
    }, {
      '$unwind': {
        'path': '$appointmentDetails', 
        'preserveNullAndEmptyArrays': true
      }
    }, {
      '$addFields': {
        'patientName': '$patientDetails.patientName.name', 
        'patientId': '$patientDetails.patientId', 
        'doctorName': '$appointmentDetails.doctorName', 
        'phoneNumber': '$patientDetails.mobileNumber.number', 
        'noOfMedicine': {
          '$size': '$prescriptions'
        }
      }
    }, {
      '$project': {
        '_id': '$appointmentDetails._id', 
        'date': 1, 
        'patientId': 1, 
        'patientName': 1, 
        'doctorName': 1, 
        'phoneNumber': 1, 
        'noOfMedicine': 1
      }
    }
]

const getPrescriptionById = (appointmentId)=>{
  return (
    [
      {
        '$match' :{"_id": new mongoose.Types.ObjectId(appointmentId)}
      },
      {
        '$lookup':{
          from:"patients",
          localField:"patientId",
          foreignField:"_id",
          as:"patientDetails"
        }
      },
      {
        '$lookup':{
          from:"medicineinfos",
          localField:"medicineInfo",
          foreignField:"_id",
          as:"medicineDetails"
        }
      },
      { '$unwind': { path: "$patientDetails", preserveNullAndEmptyArrays: true } },
      {
        '$lookup':{
          from:"paymentinfos",
          localField:"paymentInfo",
          foreignField:"_id",
          as:"paymentDetails"
        }
      },
      {
        '$lookup':{
          from:"billings",
          localField:"billingInfo",
          foreignField:"_id",
          as:"billingDetails"
        }
      },
      {
        '$lookup':{
          from:"prescriptioninfos",
          let:{appointmentId:"$_id"},
          pipeline:[
              {"$match": {"$expr": {"$eq": ["$appointmentId", "$$appointmentId"]}}},
              {"$project": {_id:0, prescriptions:1} }
          ],
          as:"prescriptionDetails"
        }
      },
      {
        "$unwind":{
          path:"$prescriptionDetails",
          preserveNullAndEmptyArrays:true
        }
      },
      {
        '$lookup':{
          from:"vitals",
          let:{appointmentId:"$_id"},
          pipeline:[
            {'$match':{'$expr':{'$eq':["$appointmentId", "$$appointmentId"]}}}
          ],
          as:"vital"
        }
      },
      {
        '$unwind':{
            path:"$vital",
            preserveNullAndEmptyArrays:true
        }
      },
      {
        '$project':{
          _id: 1,
          patientId: "$patientDetails.patientId",
          patientName: "$patientDetails.patientName.name",
          address: "$patientDetails.address",
          age: "$patientDetails.age",
          phoneNumber: "$patientDetails.mobileNumber.number",
          prescriptions:"$prescriptionDetails.prescriptions",
          gender: "$patientDetails.gender",
          bloodGroup: "$patientDetails.bloodGroup",
          temperature: "$vital.temperature.value",
          pulse: "$vital.pulseRate",
          height: "$vital.height.value",
          weight: "$vital.weight.value",
          bloodPressure: "$vital.bloodPressure",
          symptoms: "$vital.symptoms",
          medicineDetails: 1,
          paymentDetails: 1,
          billingDetails: 1,
          status: 1,
          doctorName: 1,
          doctorFee: 1,
          appointmentDate: 1,
          paymentMethod: 1,
          patientType: 1
        }
      }
    ]
  )
}


module.exports = {getPurchaseHistoryPipeline, getAllPrescriptionPipeline, getPrescriptionById}
