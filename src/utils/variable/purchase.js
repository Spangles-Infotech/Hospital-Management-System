export const purchaseTableHeading = [
    {
        name:"Order No.",
        path:"orderNo"
    },

    {
        name:"Invoice No.",
        path:"invoiceNo"
    },

    {
        name:"Purchase Date",
        path:"purchaseDate"
    },

    {
        name:"Supplier Name",
        path:"supplierName"
    },

    {
        name:"Items",
        path:"items"
    },

    {
        name:"Bill Amount",
        path:"billAmount"
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
            type:"number"
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
            type:"text",
        },

        {
            label:"Delivery Date",
            name:"deliveryDate",
            type:"date"
        }
    ]
]