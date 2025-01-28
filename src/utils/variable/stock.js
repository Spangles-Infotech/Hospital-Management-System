export const stockTableHeading = [
    {
        name: "Product Code",
        path:"productCode"
    },

    {
        name:"Batch No.",
        path:"batchNo"
    },

    {
        name:"Product Name",
        path:"productName"
    },

    {
        name:"Category",
        path:"category"
    },

    {
        name: "HSN Code",
        path: "HSNCode"
    },

    {
        name:"Stocked Date",
        path:"stockedDate"
    },

    {
        name:"Expiry Date",
        path:"expiryDate"
    },

    {
        name:"In Stock",
        path:"inStock"
    },

    {
        name:"SalePrice",
        path:"salePrice"
    },

    {
        name:"Action",
        path:"normal"
    }
]

export const stockTableValue = [
    {
        id:"321",
        productCode:"SBIL2024001",
        batchNo:"036521036",
        productName:"Acetaminophen",
        category:"Tablet",
        HSNCode:"56437852",
        stockedDate:"12-02-2025",
        expiryDate:"12-02-2026",
        inStock:"100",
        salePrice:"Rs. 6.30"

    },

    {
        id:"322",
        productCode:"SBIL2024001",
        batchNo:"036521036",
        productName:"Cymbalta",
        category:"Syrup",
        HSNCode:"56437852",
        stockedDate:"11-02-2025",
        expiryDate:"11-02-2026",
        inStock:"200",
        salePrice:"Rs. 20.00"

    },
]


export const stockFormField =[

    [
        {
            label:"Product Code",
            name:"productId",
            type:"text"
        }
    ],

    [

        {
            label:"Product Name",
            name:"productName",
            type:"text"
        }
    ],

    [
        {
            label:"Generic Name",
            name:"genericName",
            type:"text"
        }
    ],

    [
        {
            label:"Category",
            type:"inputdropdown",
            dropdownName:"Tablet",
            options:["Syrup","injection"],
            inputName:"category"
        }
    ],

    [
        {
            label:"HSN Code",
            name:"HSNCode",
            type:"number" 
        }
    ],

    [
        {
            label:"Batch Number",
            name:"batchNumber",
            type:"number"
        }
    ],

    [
        {
            label:"Expiry Date",
            name:"expiryDate",
            type:"Date"
        }
    ],

    [
        {
            label:"Sale Price",
            type:"number",
            name:"salePrice"
        },

        {
            label:"Purchase Price",
            type:"number",
            name:"purchasePrice"
        }
    ],

    // [
    //     {
    //         label:"Unit",
    //         type:"inputdropdown",
    //         dropdownName:"Box",
    //         option:["box"]
    //     }
    // ],

    [
        {
            label:"Pieces",
            type:"text",
            name:"pieces"
        }
    ],

    [
        {
            label:"Opening Stock",
            name:"openingStock",
            type:"number"
        },

        {
            label:"Low Stock",
            name:"lowStock",
            type:"number"
        }
    ],

    [
        {
            label:"Expire Alert",
            options:[1,2,3,4,5,6,7,8,9,10,11,12],
            inputName:"expireAlert",
            dropdownName:"months",
            type:"inputdropdown"
        },

        {
            label:"Gst%",
            name:"gst",
            type:"number"
        }
    ],
    [
        {
            label:"Supplier",
            name:"supplier",
            type:"text"
        }
    ]


]