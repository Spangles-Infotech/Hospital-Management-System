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
    '$match':{
      "roomRentDetails._id" : "$roomDetails.roomNo"
    }
  },
  {
    '$unwind': {
      'path': "$roomRentDetails",
      'preserveNullAndEmptyArrays': true
    }
  },
  {
    '$addFields': {
      'totalRent': {
        '$multiply': [
          { '$toDouble': "$roomRentDetails.rent" },
          "$roomDetails.totalDays"
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
      'from':"$roomDetials.admittedDate",
      'to':"$roomDetails.dischargeDate",
      'status':"$roomDetails.paymentStatus",
      "amount":"totalRent"
    }
  }
]

module.exports = { billingPipeline, getInpatientById}