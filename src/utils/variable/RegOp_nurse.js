export const TableHeading=[
    {
        name:"Token",
        path:"token"
    },

    {
        name:"Patient ID",
        path:"PatientId"
    },

    {
        name:"Patient Name",
        path:"patientName"
    },

    {
        name:"Phone No.",
        path:"phoneNo"
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
        name:"Doctor Name",
        path:"doctorName"
    },

    {
        name:"Status",
        path:"status"
    },

    {
        name:"Action",
        path:"normal"
    }
]

export const TableValue=[
    {
       id:"3457",
       token:"01",
       PatientId:"SB202024001",
       patientName:"Vijay",
       phoneNo:"+91 9087654321",
       bloodGroup:"A+",
       gender:"Male",
       doctorName:"Dr.David",
       status:"Yet to Consult" 
    },

    {
        id:"3454",
        token:"02",
        PatientId:"SB202024001",
        patientName:"Vijay",
        phoneNo:"+91 9087654321",
        bloodGroup:"O+",
        gender:"Male",
        doctorName:"Dr.David",
        status:"Yet to Consult" 
     },
     {
        id:"3452",
        token:"02",
        PatientId:"SB202024001",
        patientName:"Vijay",
        phoneNo:"+91 9087654321",
        bloodGroup:"B+",
        gender:"Male",
        doctorName:"Dr.David",
        status:"Consulted" 
     }
]


export const vitalsField=[
    [
        {
            label:"Temperature",
            name:"temperature",
            type:"text"
        }
    ],
    [
        {
            label:"Blood Pressure",
            name:"bloodPressure",
            type:"text"
        }
    ],
    [
        {
            label:"Height",
            name:"height",
            type:"text"
        },
        {
            label:"Weight",
            name:"weight",
            type:"text"
        }
    ],
    [
       {
            label:"Symptoms",
            name:"symptoms",
            type:"text"
       }
    ],

    [
        {
            label:"Test Name",
            name:"testName",
            type:"text"
        },

        {
            label:"Consulted Doctor",
            name:"consultedDoctor",
            type:"text"
        },

        {
            label:"Upload Document",
            name:"photo",
            type:"file",
            title:"Upload Image"
        }
    ]

]