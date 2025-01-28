export const tableHeading = [
    {
      name:"Patient ID",
      path:"patientId"
    },
    {
      name:"Patient Name",
      path:"patientName"
    },
    {
      name:"Phone No.",
      path:"phoneNumber"
    },
    {
      name:"Blood Group",
      path:"bloodGroup"
    },
    {
      name:"Gender",
      path:"gender"
    },
    {
      name:"Patient Type",
      path:"patientType"
    },
    {
      name:"Action",
      path:"normal"
    }
  ]


export const patientFields = [
    [
        {
            label:"Patient ID",
            name:"patientId",
            type:"text"
        },
        {
            label:"Patient Name / Baby of",
            options:["Patient Name", "Baby of"],
            inputName:"name",
            dropdownName:"nameType",
            type:"inputdropdown"
        }
    ],
    [
        {
            label:"Father's Name",
            name:"fatherName",
            type:"text"
        },
        {
            label:"Mother's Name",
            name:"motherName",
            type:"text"
        }
    ],
    [
        {
            label:"Mobile Number",
            options:["+91", "+92", "+93"],
            inputName:"mobileNumber",
            dropdownName:"countryCode",
            type:"inputdropdown"
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
            label:"Pincode",
            name:"pincode",
            type:"text"
        }
    ],
    [
        {
            label:"State",
            name:"state",
            options:["Maharashtra", "Gujarat", "Rajasthan"],
            type:"select"
        },
        {
            label:"District",
            name:"district",
            options:["Maharashtra", "Gujarat", "Rajasthan"],
            type:"select"
        }
    ],
    [
        {
            label:"City",
            name:"city",
            type:"text"
        },
        {
            type:""
        }
    ],
    {
        label:"Address",
        name:"address",
        type:"textarea"
    }

]

export const tableValue = [
    {
      id:"21414",
      patientId: "323252",
      patientName: "John Doe",
      phoneNumber: "dasgasgasga",
      bloodGroup: "A+",
      gender: "Male",
      patientType: "Emergency",
    },
    {
    id:"21415",
    patientId: "323252",
    patientName: "John Doe",
    phoneNumber: "dasgasgasga",
    bloodGroup: "A+",
    gender: "Male",
    patientType: "Emergency",
  },
  {
    id:"21416",
    patientId: "323252",
    patientName: "John Doe",
    phoneNumber: "dasgasgasga",
    bloodGroup: "A+",
    gender: "Male",
    patientType: "Emergency",
  },
]

export const patientPreviewField = [
    {
        icon:"PatientDetailIcon",
        head:[
            {
                title:"Patient ID",
                name:"patientId",
            }
        ],
        fields:[
            {
                label:"Patient Name",
                name:"doctorName"
            },
            {
                label:"Address",
                name:"address"
            },
            {
                label:"Age",
                name:"age"
            },
            {
                label:"Phone Number",
                name:"phoneNumber"
            },
            {
                label:"Gender",
                name:"gender"
            },
            {
                label:"Blood Group",
                name:"bloodGroup"
            },
            {
                label:"Baby of",
                name:"babyOf"
            }
        ],
        image:{
            name:"Barcode"
        },
        additionalInfo:[
            {
                label:"Birth Place",
                name:"birthPlace"
            },
            {
                label:"Birth Time",
                name:"birthTime"
            },
            {
                label:"Weight(when born)",
                name:"weight"
            }
        ]
    }
]

export const patientPreviewData = {
    patientId:"P001",
    patientName:"john",
    address:"New York",
    age:25,
    phoneNumber:"1234567890",
    gender:"Male",
    bloodGroup:"A+",
    babyOf:"Narmada",
    additionalInfo:{
        birthPlace :"Padma Hospital, Thiruvattar",
        birthTime: "11:30 AM",
        weight:"10kg"
    }

}

