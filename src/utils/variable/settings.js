
export const doctorTableHeading = [
    {
      name:"Doctor's ID",
      path:"doctorId"
    },
    {
      name:"Doctor's Name",
      path:"doctorName"
    },
   
    {
        name:"Gender",
        path:"gender"
    },
   
    {
      name:"Designation",
      path:"designation"
    },

    {
        name:"Fee",
        path:"fee"
      },

    {
        name:"Status",
        path:"status",
        type:"tag"
    },
    {
      name:"Action",
      path:"normal"
    }
  ]


export const doctorTableValue = [
    {
        id:"214141",
        doctorId: "323252",
        doctorName: "John Doe",
        fee:"200",
        gender: "Male",
        status: "Active",
        designation: "Emergency",
    },
    {
        id:"2141452",
        doctorId: "323252",
        doctorName: "John Doe",
        fee:"120",
        gender: "Male",
        status: "Active",
        designation: "Emergency",
    },
    {
        id:"2141463",
        doctorId: "323252",
        doctorName: "John Doe",
        fee:"200",
        gender: "Male",
        status: "Inactive",
        designation: "Emergency",
    },
   
]

export const roomlistTableHeading=[
    {
        name:"Section",
        path:"section"
    },

    {
        name:"No.of Rooms",
        path:"rooms"
    },

    {
        name:"Status",
        path:"status",
        type:"tag"
    },

    {
        name:"Action",
        path:"normal"
    }
]
export const roomlistTableValue=[
{
    id:"001",
    section:"Floor no. 01",
    rooms:"06",
    status:"Active"
},
{
    id:"002",
    section:"Floor no. 02",
    rooms:"03",
    status:"Active"
},
{
    id:"003",
    section:"Floor no. 03",
    rooms:"10",
    status:"Active"
}
]


