
export const doctorTableHeading = [
    {
      name:"Doctor's ID",
      path1:"userId",
      path2:"doctorId",
      isNested:true


    },
    {
      name:"Doctor's Name",
      path1:"userId",
      path2:"name",
      isNested:true

      
    },
   
    {
        name:"Gender",
        path1:"userId",
        path2:"gender",
        isNested:true

    },
   
    {
      name:"Designation",
      path1:"userId",
      path2:"designation",
      isNested:true

    },

    {
      name:"Fee",
      path:"fee",
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
        name:"doctorFee",
        type:"number"
    }
]