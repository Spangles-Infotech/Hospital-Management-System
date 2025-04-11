const mongoose = require("mongoose")

const billingPipeline = [
    {
        '$match': {
          'patientType': 'IP'
        }
    },
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
        'includeArrayIndex': 'string', 
        'preserveNullAndEmptyArrays': true
      }
    }, {
      '$lookup': {
        'from': 'roominfos', 
        'localField': 'roomInfo', 
        'foreignField': '_id', 
        'as': 'roomDetails'
      }
    }, {
      '$unwind': {
        'path': '$roomDetails', 
        'includeArrayIndex': 'string', 
        'preserveNullAndEmptyArrays': true
      }
    }, {
      '$project': {
        '_id': 1, 
        'patientId': '$patientDetails.patientId', 
        'patientName': '$patientDetails.patientName.name', 
        'age': '$patientDetails.age', 
        'gender': '$patientDetails.gender', 
        'bloodGroup': '$patientDetails.bloodGroup', 
        'phoneNumber': '$patientDetails.mobileNumber.number', 
        'roomNumber': '$roomDetails.roomNo', 
        'status': '$roomDetails.status'
      }
    }
  ]

const getInpatientById = (appointmentId)=>{
  return (
    [
      {
        '$match' :{"_id": new mongoose.Types.ObjectId(appointmentId)}
      },
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
          'includeArrayIndex': 'string', 
          'preserveNullAndEmptyArrays': true
        }
      }, {
        '$lookup': {
          'from': 'roominfos', 
          'localField': 'roomInfo', 
          'foreignField': '_id', 
          'as': 'roomDetails'
        }
      }, {
        '$unwind': {
          'path': '$roomDetails', 
          'includeArrayIndex': 'string', 
          'preserveNullAndEmptyArrays': true
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
          gender: "$patientDetails.gender",
          bloodGroup: "$patientDetails.bloodGroup",
          temperature: "$vital.temperature.value",
          pulse: "$vital.pulseRate",
          height: "$vital.height.value",
          weight: "$vital.weight.value",
          bloodPressure: "$vital.bloodPressure",
          symptoms: "$vital.symptoms",
          blockNo:"$roomDetails.blockNo",
          roomNo:"$roomDetails.roomNo",
          roomInfoId:"$roomDetails._id",
          'status': '$roomDetails.status'
        }
      }
    ]
  )
}

const ipBillingPipeline = [
  {
    '$match': {
      'patientType': 'IP'
    }
  },{
    '$lookup': {
      'from': 'roominfos', 
      'localField': 'roomInfo', 
      'foreignField': '_id', 
      'as': 'roomDetails'
    }
  }, {
    '$unwind': {
      'path': '$roomDetails', 
      'includeArrayIndex': 'string', 
      'preserveNullAndEmptyArrays': true
    }
  }, {
    '$match': {
      'roomDetails.status': 'Discharged'
    }
  },
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
      'includeArrayIndex': 'string', 
      'preserveNullAndEmptyArrays': true
    }
  },
  {
    '$lookup': {
      'from': "rooms",
      'localField': "roomDetails.roomNo",
      'foreignField': "roomNo",
      'as': "roomRentDetails"
    }
  },
  {
    $addFields: {
      roomRentDetails: {
        $filter: {
          input: "$roomRentDetails",
          as: "rentDetail",
          cond: {
            $eq: ["$$rentDetail.roomNo", "$roomDetails.roomNo"]
          }
        }
      }
    }
  },
  {
    $unwind: {
      path: "$roomRentDetails",
      preserveNullAndEmptyArrays: false
    }
  },
  {
    $addFields: {
      totalRent: {
        $multiply: [
          { $toDouble: "$roomRentDetails.rent" },
          { $toDouble: "$roomDetails.totalDays" }
        ]
      }
    }
  },
  {
    '$project': {
      '_id': 1,
      'patientId': '$patientDetails.patientId', 
      'patientName': '$patientDetails.patientName.name', 
      'age': '$patientDetails.age', 
      'gender': '$patientDetails.gender', 
      'phoneNumber': '$patientDetails.mobileNumber.number', 
      'roomNumber': '$roomDetails.roomNo', 
      'section': '$roomDetails.blockNo', 
      'status': '$roomDetails.status',
      'noOfDays': "$roomDetails.totalDays",
      'from':"$roomDetails.admittedDate",
      'to':"$roomDetails.dischargeDate",
      'status':"$roomDetails.paymentStatus",
      "amount":"$totalRent",
      "rent":"$roomRentDetails.rent",
    }
  }
]

const getIpBillingById = (appointmentId)=>{
  return (
    [
      {
        '$match' :{"_id": new mongoose.Types.ObjectId(appointmentId)}
      },
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
          'includeArrayIndex': 'string', 
          'preserveNullAndEmptyArrays': true
        }
      }, {
        '$lookup': {
          'from': 'roominfos', 
          'localField': 'roomInfo', 
          'foreignField': '_id', 
          'as': 'roomDetails'
        }
      }, {
        '$unwind': {
          'path': '$roomDetails', 
          'includeArrayIndex': 'string', 
          'preserveNullAndEmptyArrays': true
        }
      },
      {
        '$lookup':{
          from: "billings",
          localField: "BillingInfo",
          foreignField: "_id",
          as: "billingDetails"
        }
      },
      {
        '$unwind':{
          path: "$billingDetails",
          includeArrayIndex: 'string',
          preserveNullAndEmptyArrays: true
        }
      },
      {
        "$lookup":{
          from: "paymentInfo",
          localField: "paymentInfo",
          foreignField: "_id",
          as: "paymentDetails"
        }
      },
      {
        "$unwind":{
          path: "$paymentDetails",
          includeArrayIndex: 'string',
          preserveNullAndEmptyArrays: true
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
          gender: "$patientDetails.gender",
          bloodGroup: "$patientDetails.bloodGroup",
          section:"$roomDetails.blockNo",
          roomNumber:"$roomDetails.roomNo",
          roomInfoId:"$roomDetails._id",
          'status': '$roomDetails.status',
          'from':"$roomDetails.admittedDate",
          'to':"$roomDetails.dischargeDate",
          'noOfDays': "$roomDetails.totalDays",
          "bills":"$billingDetails.fees",
          'totalBillAmount':"$billingDetails.totalBillAmount",
          'totalBillQuantity':"$billingDetails.totalBillQuantity",
          'discount':"$paymentDetails.discount",
          'paymentType':"$paymentDetails.paymentType",
          'paymentType':"$paymentDetails.paymentType",
          'isRoundOff':"$paymentDetails.isRoundOff",
          'totalGstAmount':"$paymentDetails.totalGstAmount",
          'netAmount':"$paymentDetails.netAmount",
          'amountPaid':"$paymentDetails.amountPaid",
          'roundOff':"$paymentDetails.roundOff",
          'grossAmount':"$paymentDetails.grossAmount",

        }
      }
    ]
  )

}

module.exports = { billingPipeline, getInpatientById, ipBillingPipeline, getIpBillingById}