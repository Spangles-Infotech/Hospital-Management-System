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
module.exports = {getPurchaseHistoryPipeline}
