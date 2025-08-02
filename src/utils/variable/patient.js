import { stateDistrictMap } from "./staff"


export const tableHeading = [
    {
      name:"Patient ID",
      path:"patientId"
    },
    {
      name:"Patient Name",
      path1:"patientName",
      path2:"name",
      isNested:true
    },
    {
      name:"Phone No.",
      path1:"mobileNumber",
      path2:"number",
      isNested:true
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
        // {
        {
            label:"Patient ID",
            name:"patientId",
            type:"text",
            readOnly:true,
            isPatientId:true
        },
        {
            label:"Patient Name / Baby of",
            name:"patientName",
            options:["Patient Name", "Baby of"],
            inputName:"name",
            dropdownName:"title",
            type:"inputdropdown"
        }
    ],
    [
        {
            label:"Father's Name",
            name:"fathersName",
            type:"text"
        },
        {
            label:"Mother's Name",
            name:"mothersName",
            type:"text"
        }
    ],
    [
        {
            label:"Mobile Number",
            options:["+91", "+92", "+93"],
            name:"mobileNumber",
            inputName:"number",
            dropdownName:"code",
            type:"inputdropdown"
        },
        {
            label:"Alternate Mobile Number",
            options:["+91", "+92", "+93"],
            name:"alternateMobileNumber",
            dropdownName:"code",
            type:"inputdropdown",
            inputName:"number",

        },
    ],
    [
        [ 
            {
                label:"Date of Birth",
                name:"dob",
                type:"date",
                onChange: "calculateAge",
                onKeyDown: (e) => {
                  e.preventDefault();
                },
            },
            {
                label:"Age",
                name:"age",
                type:"text",
                isAgeField: true
            }
        ],

    ],
    [
        {
            label:"Gender",
            name:"gender",
            options:["Male", "Female", "Other"],
            type:"select"
        },
        {
            label:"Blood Group",
            name:"bloodGroup",
            options:["A+", "A-", "B+", "B-", "AB+", "AB-"],
            type:"select"
        },

    ],
    [
        {
            label:"State",
            name:"state",
            options: [
              "Andhra Pradesh",
              "Arunachal Pradesh",
              "Assam",
              "Bihar",
              "Chhattisgarh",
              "Goa",
              "Gujarat",
              "Haryana",
              "Himachal Pradesh",
              "Jharkhand",
              "Karnataka",
              "Kerala",
              "Madhya Pradesh",
              "Maharashtra",
              "Manipur",
              "Meghalaya",
              "Mizoram",
              "Nagaland",
              "Odisha",
              "Punjab",
              "Rajasthan",
              "Sikkim",
              "Tamil Nadu",
              "Telangana",
              "Tripura",
              "Uttar Pradesh",
              "Uttarakhand",
              "West Bengal"
            ],
            type:"select",
          },
          {
            label:"District",
            name:"district",
            options:[], // This will be dynamically populated
            type:"select",
            dependsOn: "state",
            // getOptions: (formData) => (formData && formData.state && stateDistrictMap[formData.state]) ? stateDistrictMap[formData.state] : []
            getOptions: (formData) => (formData && formData.state && stateDistrictMap[formData.state]) ? stateDistrictMap[formData.state] : []

          },
    ],
    [
        {
            label:"City",
            name:"city",
            type:"text"
        },
        {
            label:"Pincode",
            name:"pincode",
            type:"text"
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
        // head:[
        //     {
        //         title:"Patient ID",
        //         name:"patientId",
        //     }
        // ],
        fields:[
            {
                label:"Patient ID",
                name:"patientId",
            },
            {
                label:"Patient Name",
                name:"patientName",
                name2:"title",
                isNested:true
            },
            {
                label:"Gaurdian / Person Name",
                name1:"patientName",
                name2:"title",
                isNested:true
            },
            {
                label:"Date of Birth",
                name:"address"
            },
            
            {
                label:"Age",
                name:"age"
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
                label:"Marital Status",
                name:""
            },
            {
                label:"Phone Number",
                name1:"mobileNumber",
                name2:"number",
                isNested:true
            },
            {
                label:"Address",
                name:"address"
            },
            // {
            //     label:"Patient Type",
            //     name:"patientType"
            // }
        ],
        image:{
            name:"Barcode"
        },
        // additionalInfo:[
        //     // {
        //     //     label:"Birth Place",
        //     //     name:"birthPlace"
        //     // }, 
        //     {
        //         label:"Birth Time",
        //         name:"birthTime"
        //     },
        //     {
        //         label:"Weight(when born)",
        //         name:"weight"
        //     }
        // ]
    }
]

export const editFormField = [
    [
        {
            label:"Patient ID",
            name:"patientId",
            type:"text"
        },
        {
            label:"Patient Name / Baby of",
            name:"patientName",
            options:["Patient Name", "Baby of"],
            inputName:"name",
            dropdownName:"title",
            type:"inputdropdown"
        }
    ],
    [
        {
            label:"Father's Name",
            name:"fathersName",
            type:"text"
        },
        {
            label:"Mother's Name",
            name:"mothersName",
            type:"text"
        }
    ],
    [
        {
            label:"Mobile Number",
            options:["+91", "+92", "+93"],
            name:"mobileNumber",
            inputName:"number",
            dropdownName:"code",
            type:"inputdropdown"
        },
        {
            label:"Alternate Mobile Number",
            options:["+91", "+92", "+93"],
            name:"alternateMobileNumber",
            dropdownName:"code",
            type:"inputdropdown",
            inputName:"number",

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
            type:"select"
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
            options: [
              "Andhra Pradesh",
              "Arunachal Pradesh",
              "Assam",
              "Bihar",
              "Chhattisgarh",
              "Goa",
              "Gujarat",
              "Haryana",
              "Himachal Pradesh",
              "Jharkhand",
              "Karnataka",
              "Kerala",
              "Madhya Pradesh",
              "Maharashtra",
              "Manipur",
              "Meghalaya",
              "Mizoram",
              "Nagaland",
              "Odisha",
              "Punjab",
              "Rajasthan",
              "Sikkim",
              "Tamil Nadu",
              "Telangana",
              "Tripura",
              "Uttar Pradesh",
              "Uttarakhand",
              "West Bengal"
            ],
            type:"select",
          },
          {
            label:"District",
            name:"district",
            options:[], // This will be dynamically populated
            type:"select",
            dependsOn: "state",
            getOptions: (formData) => (formData && formData.state && stateDistrictMap[formData.state]) ? stateDistrictMap[formData.state] : []
          },
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
