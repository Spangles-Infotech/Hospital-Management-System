
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

export const doctorFeeFormField = [
    {
        label:"Enter Fee",
        name:"enterFee",
        type:"text"
    }
]