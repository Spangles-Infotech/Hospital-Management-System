export const stockTableHeading = [
    {
        name: "Product Code",
        path:"productCode"
    },

    {
        name:"Batch No.",
        path:"batchNumber"
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
        path: "hsnCode"
    },

    {
        name:"Stocked Date",
        path:"stockedDate"
    },

    {
        name:"Expiry Date",
        path:"expiryDate",
        date:"true"
    },

    {
        name:"In Stock",
        path:"totalQuantity"
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
            name:"category",
            type:"select",
            options:["Tablet","Syrup","injection"],
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
            label:"Purchase Price Per Tablet",
            type:"number",
            name:"purchasePrice"
        }
    ],

    [
        {
            label:"Unit",
            name:"unit",
            type:"select",
            options:["box","stripe","bottle"]
        },

        {
            label:"Total Boxes",
            name:"totalBoxes",
            type:"number"
        }
    ],

    [
        {
            label:"Strips Per Box",
            type:"number",
            name:"stipePerBox"
        },
        {
            label:"Tablet Per Strip",
            type:"number",
            name:"TabletPerStrip"
        }
    ],

    [
        {
            label:"Total Tablets",
            name:"totalTablets",
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
            options:["months", "weeks", "days"],
            inputName:"duration",
            dropdownName:"type",
            type:"inputdropdown"
        },

        {
            label:"Gst %",
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