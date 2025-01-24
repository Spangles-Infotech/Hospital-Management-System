export const staffTableHeading = [
    {
      name:"Staff ID",
      path:"staffId"
    },
    {
      name:"Staff Name",
      path:"staffName"
    },
    {
      name:"Phone No.",
      path:"phoneNumber"
    },
    {
        name:"Gender",
        path:"gender"
    },
    {
      name:"Blood Group",
      path:"bloodGroup"
    },
    {
      name:"Designation",
      path:"designation"
    },
    {
      name:"Action",
      path:"normal"
    }
  ]

  export const staffFields = [
    [
        {
            label:"Staff ID",
            name:"staffId",
            type:"text"
        },
        {
            label:"Staff Name",
            name:"staffName",
            type:"text"
        }
    ],
    [
        {
            label:"Father's Name",
            name:"fatherName",
            type:"text"
        },
        {
            label:"Mobile Number",
            options:["+91", "+92", "+93"],
            inputName:"mobileNumber",
            dropdownName:"countryCode",
            type:"inputdropdown"
        },
        
    ],
    [
        [
            {
                label:"Date of Birth",
                name:"dob",
                type:"date"
            },
            {
                label:"Age",
                name:"age",
                type:"text"
            }
        ],
        {
            label:"Gender",
            name:"gender",
            options:["Male", "Female", "Other"],
            type:"radio"
        }
    ],
    [
        {
            label:"Blood Group",
            name:"bloodGroup",
            options:["A+", "A-", "B+", "B-", "AB+", "AB-"],
            type:"select"
        },
        {
            label:"Alternate Mobile Number",
            options:["+91", "+92", "+93"],
            inputName:"alternateMobileNumber",
            dropdownName:"countryCode",
            type:"inputdropdown"
        },
    ],
    [
        {
            label:"Pincode",
            name:"pincode",
            type:"text"
        },
        {
            label:"State",
            name:"state",
            options:["Maharashtra", "Gujarat", "Rajasthan"],
            type:"select"
        },
    ],
    [
        {
            label:"District",
            name:"district",
            options:["Maharashtra", "Gujarat", "Rajasthan"],
            type:"select"
        },
        {
            label:"City",
            name:"city",
            type:"text"
        },
    ],
    {
        label:"Address",
        name:"address",
        type:"textarea"
    },
    [
        {
            label:"Designation",
            name:"designation",
            type:"select",
            options:["Doctor", "Nurse"]
        },
        {
            label:"Upload Photo",
            name:"photo",
            type:"file",
            title:"Upload Image"
        }
    ],
    [
        {
            label:"Joining Date",
            name:"joiningDate",
            type:"date"
        },
        {
            label:"Reliving Date",
            name:"relivingDate",
            type:"date"
        }
    ]

]

  export const staffTableValue = [
    {
      id:"21414",
      staffId: "323252",
      staffName: "John Doe",
      phoneNumber: "dasgasgasga",
      bloodGroup: "A+",
      gender: "Male",
      designation: "Emergency",
    },
    {
      id:"214145",
      staffId: "323252",
      staffName: "John Doe",
      phoneNumber: "dasgasgasga",
      bloodGroup: "A+",
      gender: "Male",
      designation: "Emergency",
    },
    {
      id:"214146",
      staffId: "323252",
      staffName: "John Doe",
      phoneNumber: "dasgasgasga",
      bloodGroup: "A+",
      gender: "Male",
      designation: "Emergency",
    },
   
]