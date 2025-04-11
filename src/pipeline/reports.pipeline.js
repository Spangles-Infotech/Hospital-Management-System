const getDoctoWithPatientDetail = [
    {
      '$lookup': {
        'from': 'users', 
        'localField': 'doctorName', 
        'foreignField': 'name', 
        'as': 'userDetails'
      }
    }, {
      '$unwind': {
        'path': '$userDetails', 
        'preserveNullAndEmptyArrays': true
      }
    }, {
      '$lookup': {
        'from': 'doctor', 
        'let': {
          'userId': '$userDetails._id'
        }, 
        'pipeline': [
          {
            '$match': {
              '$expr': {
                '$eq': [
                  '$userId', '$$userId'
                ]
              }
            }
          }
        ], 
        'as': 'doctorDetails'
      }
    }, {
      '$unwind': {
        'path': '$doctorDetails', 
        'preserveNullAndEmptyArrays': true
      }
    }, {
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
      '$project': {
        'date': '$appointmentDate', 
        'doctorName': '$doctorName', 
        'doctorFee': '$doctorFee', 
        'patientId': '$patientDetails.patientId', 
        'patientName': '$patientDetails.patientName.name'
      }
    }
  ]

  module.exports = {getDoctoWithPatientDetail}