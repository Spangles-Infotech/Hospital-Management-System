export const purchaseTableHeading = [
    {
        name:"Order No.",
        path:"orderNumber"
    },

    {
        name:"Invoice No.",
        path:"invoiceNumber"
    },

    {
        name:"Invoice Date",
        path:"purchaseDate",
        date:true
    },

    {
        name:"Supplier Name",
        path:"supplierName"
    },

    {
        name:"Items",
        path1:"medicineInfo",
        path2:"totalQuantity",
        isNested:true
    },
    
    {
        name:"Bill Amount",
        path1:"paymentInfo",
        path2:"netAmount",
        isNested:true
    },
    {
        name:"Payment",
        path:"paymentStatus"
    },

    {
        name:"Paid Status",
        path:"paidStatusCheckbox"
    },
    {
        name:"Action",
        path:"normal"
    }


]


export const purchaseTableValue =[

    {
        id:"111",
        orderNo : "OBIL2024001",
        invoiceNo : "IN20204001",
        purchaseDate :"18/01/2025",
        supplierName:"Swasthya Dukaan",
        items:"15",
        billAmount:"Rs. 22,000"    
    },

    {
        id:"222",
        orderNo : "OBIL2024001",
        invoiceNo : "IN20204001",
        purchaseDate :"22/01/2025",
        supplierName:"Rojgar Medical Store",
        items:"10",
        billAmount:"Rs. 1,000"    
    },

    {
        id:"333",
        orderNo : "OBIL2024001",
        invoiceNo : "IN20204001",
        purchaseDate :"08/01/2025",
        supplierName:"Jivan Jyothi Medicines",
        items:"18",
        billAmount:"Rs. 2,000"    
    }
]

export const NewPurchaseField = [

    [
        {
            label:"Supplier ID",
            name:"supplierId",
            type:"text"
        },

        {
            label:"Supplier Name",
            name:"supplierName",
            type:"text"
        },

        {
            label:"Supplier Phone Number",
            name:"supplierPhoneNumber",
            type:"text"
        },

    ],
    [
        {
            label:"Invoice Number",
            name:"invoiceNumber",
            type:"text"
        },

        {
            label:"Purchase Date",
            name:"purchaseDate",
            type:"date",
        },

        {
            label:"Delivery Date",
            name:"deliveryDate",
            type:"date"
        }
    ],
    [
                        {
            label:"Payment",
            name:"Payment",
            options:["paid","not paid"],
            type:"select"
        },
            

    ]
]

export const historyTableHeading = [
    {
        name:"Medicine Name",
        path:"medicineName"
    },
    {
        name:"Supplier Name",
        path:"supplierName"
    },
    {
        name:"Date of purchase",
        path:"purchaseDate"
    },
        {
        name:"Order Number",
        path:"orderNumber"
        
    },
    {
        name:"Purchase Quantity",
        path:"unit"
    },
    {
        name:"Free Quantity",
        path:"free"
    },
    {
        name:"Total Quantity",
        path:"availableQuantity"
    },


    // 

    // {
    //     name:"order number",
    //     path:"availableQuantity"
    // },
    {
        name:"Purchase Rate",
        path:"purchaseRate"
    },
    {
        name:"MRP",
        path:"mrp"
    },
    {
        name:"Discount",
        path:"discount"
    }
]

export const historyValue = [
    {
        medicineName:"Paracetamol",
        supplierName:"Supplier1",
        totalQuantity:100,
        purchaseRate:10,
        mrp:20,
        discount:5
    },
    {
        medicineName:"Paracetamol",
        supplierName:"Supplier1",
        totalQuantity:100,
        purchaseRate:10,
        mrp:20,
        discount:5
    }
]