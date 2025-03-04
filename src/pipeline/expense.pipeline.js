const expensePipeline = ()=>{
  return [
      {
        '$group': {
          '_id': null, 
          'totalAmount': {
            '$sum': {
              '$toDouble': '$totalAmount'
            }
          }, 
          'totalBalance': {
            '$sum': {
              '$toDouble': '$balanceAmount'
            }
          }
        }
      }, {
        '$project': {
          '_id': 0,
          'totalAmount': 1, 
          'totalBalance': 1, 
          'totalPaidAmount': {
            '$subtract': [
              {
                '$sum': {
                  '$toDouble': '$totalAmount'
                }
              }, {
                '$sum': {
                  '$toDouble': '$balanceAmount'
                }
              }
            ]
          }
        }
      }
    ]
}

module.exports = expensePipeline