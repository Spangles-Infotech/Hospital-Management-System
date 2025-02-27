const medicalReportPipeline = (appointmentId)=>{
    return[ 
        { $match: { appointment: appointmentId } },
        {
            $lookup:{
                from:"patients",
                localField:"patient",
                foreignField:"_id",
                as:"patient"
            },
        },
        {
            $lookup:{
                from:"vitals",
                localField:"vital",
                foreignField:"_id",
                as:"vital"
            }
        },
        {$unwind:"$patient"},
        {$unwind:"$vital"},
        {
            $project:{
                _id:1,
                patient:1,
                vital:1,
            }
        }

        ]

}

module.exports = {medicalReportPipeline}