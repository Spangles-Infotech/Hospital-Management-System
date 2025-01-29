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
        path:"purchasedDate"
    },
    {
        name:"Quantity",
        path:"quantity"
    },
    {
        name:"Detials",
        path:"details"
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