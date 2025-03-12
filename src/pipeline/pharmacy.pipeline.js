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
        '_id': 1, 
        'date': 1, 
        'patientId': 1, 
        'patientName': 1, 
        'doctorName': 1, 
        'phoneNumber': 1, 
        'noOfMedicine': 1
      }
    }
  ]
module.exports = {getPurchaseHistoryPipeline, getAllPrescriptionPipeline}
