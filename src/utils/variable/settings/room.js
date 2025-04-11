export const roomTableHeading = [
    {
        name:"Room No.",
        path:"roomNo"
    },
    {
        name:"Room Rent",
        path:"rent"
    },
    {
        name:"Status",
        path:"status",
        type:"tag"
    },
    {
        name:"Action",
        path:"action"
    }
]

export const roomFormField = [
    [
        {
            label:"Room no.",
            name:"roomNumber",
            type:"number"
        },
        {
            label: "Room Rent",
            name:"roomRent",
            options:["per Day", "per week", "per month"],
            inputName:"amount",
            dropdownName:"roomDuration",
            type:"inputdropdown",
            align:"right"
        }
    ]
]

export const roomTableValue = [
    {
        id:"2",
        roomNumber:1,
        roomRent:5000,
        status:"Active",
    },
    {
        id:"3",
        roomNumber:1,
        roomRent:5000,
        status:"Active",
    },
    {
        id:"4",
        roomNumber:1,
        roomRent:5000,
        status:"Inactive",
    },
]