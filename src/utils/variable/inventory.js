export const inventoryTableHeading = [
    {
        name:"SI.no.",
        path:"si.no."
    },
    {
        name:"Item Name",
        path:"itemName"
    },
    {
        name:"Catgory",
        path:"category"
    },
    {
        name:"Purchased Date",
        path:"purchasedDate",
        date:true

    },
    {
        name:"Quantity",
        path:"quantity"
    },
    {
        name:"Detials",
        path:"description"
    },
    {
        name:"Action",
        path:"normal",
    }
]

export const inventoryTableValue = [
    {
        id:"12",
        purchasedDate:"24/07/2002",
        category:"Food",
        itemName:"Breakfast",
        quantity:100,
        details:100,
    },
    {
        id:"13",
        purchasedDate:"24/07/2002",
        category:"Food",
        itemName:"Breakfast",
        quantity:100,
        details:100,
    },
    {
        id:"14",
        purchasedDate:"24/07/2002",
        category:"Food",
        itemName:"Breakfast",
        quantity:100,
        details:100,
    },
    {
        id:"15",
        purchasedDate:"24/07/2002",
        category:"Food",
        itemName:"Breakfast",
        quantity:100,
        details:100,
    },
]

export const inventoryFormField = [
    {
        label:"Add Category",
        name:"category",
        type:"text"
    },
    {
        label:"Add Strength",
        name:"strength",
        type:"text"
    },
    {
        label:"Add unit",
        name:"unit",
        type:"text"
    },
    [
        {
            label:"Item Name",
            name:"itemName",
            type:"text"
        },
        {
            label:"Category",
            name:"category",
            type:"select",
            options:["Equipments", "Porul"]
        },
    ],
    [
        {
            label:"Purchased Date",
            name:"purchasedDate",
            type:"date"
        },
        {
            label:"Quantity",
            name:"quantity",
            type:"number"
        }
    ],
    {
        label:"Description",
        name:"description",
        type:"textarea"
    }
]



export const expensePreviewField = [
    {
        isSingle:true,
        fields:[
            {
                label:"ItemName",
                name:"itemName",
            },
            {
                label:"Category",
                name:"category",
            },
            {
                label:"PurchasedDate",
                name:"purchasedDate",
            },
            {
                label:"TotalPrice",
                name:"totalPrice",
            },
            {
                label:"Quantity",
                name:"quantity",
            },
            {
                label:"Description",
                name:"description",
            },
            {
                label:"Status",
                name:"status",
            }
        ]
    }
]