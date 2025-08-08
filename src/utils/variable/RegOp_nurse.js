export const TableHeading=[
    {
        name:"Token",
        path:"token"
    },

    {
        name:"Patient ID",
        path1:"patientId",
        path2:"patientId",
        isNested:true
    },

    {
        name:"Patient Name",
        path1:"patientId",
        path2:"patientName",
        path3:"name",
        isDoubleNested:true
    },

    {
        name:"Phone No.",
        path1:"patientId",
        path2:"mobileNumber",
        path3:"number",
        isDoubleNested:true
    },

    {
        name:"Blood Group",
        path1:"patientId",
        path2:"bloodGroup",
        isNested:true
    },
    
    {
        name:"Gender",
        path1:"patientId",
        path2:"gender",
        isNested:true

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


export const vitalsField = [
    [{ label: "Temperature", name: "temperature", options: ["F","C","K"],inputName:"value", inputType:"text", dropdownName:"type", type: "inputdropdown", align:"right" }],
    [{ label: "Pulse Rate", name: "pulseRate", type:"number" }],
    [{ label: "Blood Pressure", name: "bloodPressure", type:"number"}],
    [
      { label: "Height", name: "height", options: ["cm","m","in","ft"],inputName:"value",dropdownName:"type", inputType:"number", type: "inputdropdown", align:"right"},
      { label: "Weight", name: "weight", options: ["kg","g","lb"],inputName:"value",dropdownName:"type",inputType:"number",  type: "inputdropdown", align:"right" }
    ],
    [{ label: "Symptoms", name: "symptoms", type: "text" }],
    {
        label:"Other Reports",
        name:"testing",
        type:"dynamic",
        field:[
            {
                label:"Test Name",
                name:"testName",
                type:"text",
            },
            {
                label:"Consulted Doctor",
                name:"consultedDoctor",
                type:"text",
            },
            {
                label:"Upload Document",
                name:"uploadfile",
                type:"file",
                title:"Upload file",
            }
        ]
    }
  ];

