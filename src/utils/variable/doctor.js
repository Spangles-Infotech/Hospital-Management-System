import { editFormField } from "./expense"

export const doctorFields = [
    [
        {
            label:"Doctor ID",
            name:"id",
            type:"text"
        },
        {
            label:"Doctor Name",
            name:"name",
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
            name:"mobileNumber",
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
            name:"alternateMobileNumber",
            dropdownName:"countryCode",
            type:"inputdropdown",
            inputName:"number",

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
            options:["Dermatalogiet", "Cardiologist"]
        },
        {
            label:"Upload Photo",
            name:"photo",
            type:"file",
            title:"Upload Image",
        }
    ],
    {
        label: "Timing",
        name:"timing",
        type: "dynamic",
        field: [
            {
                label: "Day",
                name: "day",
                type: "text",
            },
            {
                label: "Status",
                name: "status",
                type: "select",
                options: ["Working", "Off"]
            },
            {
                label: "From",
                name: "startTime",
                type: "time"
            },
            {
                label: "To",
                name: "endTime",
                type: "time"
            }
        ]
    }
]

export const doctorTableHeading = [
    {
        name:"Doctor's ID",
        path1:"userId",
        path2:"id",
        isNested:true
    },
    {
        name:"Doctor's Name",
        path1:"userId",
        path2:"name",
        isNested:true
    },
    {
        name:"Phone No.",
        isDoubleNested:true,
        path1:"userId",
        path2:"mobileNumber",
        path3:"number"
    },
    {
        name:"Gender",
        path2:"gender",
        path1:"userId",
        isNested:true
    },
    {
        name:"Blood Group",
        path2:"bloodGroup",
        path1:"userId",
        isNested:true
    },
    {
        name:"Designation",
        path2:"designation",
        path1:"userId",
        isNested:true
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
        id:"21414",
        doctorId: "323252",
        doctorName: "John Doe",
        phoneNumber: "dasgasgasga",
        bloodGroup: "A+",
        gender: "Male",
        status: "Active",
        designation: "Emergency",
    },
    {
        id:"214145",
        doctorId: "323252",
        doctorName: "John Doe",
        phoneNumber: "dasgasgasga",
        bloodGroup: "A+",
        gender: "Male",
        status: "Active",
        designation: "Emergency",
    },
    {
        id:"214146",
        doctorId: "323252",
        doctorName: "John Doe",
        phoneNumber: "dasgasgasga",
        bloodGroup: "A+",
        gender: "Male",
        status: "Inactive",
        designation: "Emergency",
    },
   
]

export const doctorPreviewField = [
    {
        icon:"doctorIcon",
        head:[
            {
                title:"Doctor Id",
                name1:"userId",
                name2:"id",
                isNested:true
            },
            {
                title:"Designation",
                name1:"userId",
                name2:"designation",
                isNested:true
            },
        ],
        fields:[
        {
            label:"Doctor Name",
            name1:"userId",
            name2:"name",
            isNested:true
        },
        {
            label:"Address",
            name2:"address",
            name1:"userId",
            isNested:true
        },
        {
            label:"Age",
            name1:"userId",
            name2:"age",
            isNested:true
        },
        {
            label:"Phone Number",
            name1:"userId",
            name2:"mobileNumber",
            name3:"number",
            isDoubleNested:true
        },
        {
            label:"Gender",
            name1:"userId",
            name2:"gender",
            isNested:true
        },
        {
            label:"Alternate Mobile Number",
            name1:"userId",
            name2:"alternateMobileNumber",
            name3:"number",
            isDoubleNested:true
        },
        {
            label:"Blood Group",
            name1:"userId",
            name2:"bloodGroup",
            isNested:true,
        }
        ],
       
        image:{
            name1:"userId",
            name2:"photo",
            isNested:true
        }

    }

]


export const editDocterPreview =  [
    [
        {
            label:"Doctor ID",
            name:"id",
            type:"text"
        },
        {
            label:"Doctor Name",
            name:"name",
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
            name:"mobileNumber",
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
            name:"alternateMobileNumber",
            dropdownName:"countryCode",
            type:"inputdropdown",
            inputName:"number",

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
            options:["Dermatalogiet", "Cardiologist"]
        },
        {
            label:"Upload Photo",
            name:"photo",
            type:"file",
            title:"Upload Image",
        }
    ],
    {
        label: "Timing",
        name:"timing",
        type: "dynamic",
        field: [
            {
                label: "Day",
                name: "day",
                type: "text",
            },
            {
                label: "Status",
                name: "status",
                type: "select",
                options: ["Working", "Off"]
            },
            {
                label: "From",
                name: "startTime",
                type: "time"
            },
            {
                label: "To",
                name: "endTime",
                type: "time"
            }
        ]
    }
]

export const previewData = {
    doctorId:"234234",
    designation:"cardiologist",
    doctorName:"pandi poser pandi",
    address:"10 main st, las vegas, nagercoil.",
    age:25,
    phoneNumber:"2342342342",
    gender:"male",
    alternateMobileNumber:"2342342342",
    bloodGroup:"A+",
    doctorImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAe9NZZk7nUE_anJir2Scf7tsqMHRdEpCbJg&s",
    timings:[
        {
            day:"Monday",
            start:"7:30AM",
            end:"10:30AM"
        },
        {
            day:"Monday",
            start:"7:30AM",
            end:"10:30AM"
        },
        {
            day:"Monday",
            start:"7:30AM",
            end:"10:30AM"
        },
        {
            day:"Monday",
            start:"7:30AM",
            end:"10:30AM"
        },
    ],
}