export const reportOutPatientTableHead = [
    {
        name:"Date",
        path:"date"
    },
    {
        name:"Patient ID",
        path:"patientId"
    },
    {
        name:"Patient Name",
        path:"patientName"
    },
    {
        name:"Age",
        path:"age"
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
        name:"Doctor's Name",
        label:"doctorName"
    }
]

export const reportOutPatientTableValue = [
    {
        id:"1",
        date:"22/11/2111",
        patientId:"212",
        patientName:"john",
        age:"20",
        bloodGroup:"A+",
        gender:"Male",
        doctorName:"Dr. John"
    },
    {
        id:"2",
        date:"22/11/2111",
        patientId:"212",
        patientName:"john",
        age:"20",
        bloodGroup:"A+",
        gender:"Male",
        doctorName:"Dr. John"
    },
    {
        id:"3",
        date:"22/11/2111",
        patientId:"212",
        patientName:"john",
        age:"20",
        bloodGroup:"A+",
        gender:"Male",
        doctorName:"Dr. John"
    },
]

export const reportOutPatientFilterFields = [
    {
        label:"Date From",
        name:"From",
        type:"date"
    },
    {
        label:"Date To",
        name:"To",
        type:"date"
    },
    {
        label:"Doctor's Name",
        name:"doctorName",
        type:"select",
        options:["Mathews", "Georgie", "Mandy"]
    },
    {
        label:"Gender",
        name:"gender",
        type:"select",
        options:["Male", "Female", "Others"]
    },
    {
        label:"Age From",
        name:"ageFrom",
        type:"select",
        options:[5, 10, 15, 25, 30]
    },
    {
        label:"Age To",
        name:"ageTo",
        type:"select",
        options:[5, 10, 15, 25, 30]
    },
    {
        label:"Blood Group",
        name:"bloodGroup",
        type:"select",
        options:["A+", "A-", "B+"]
    },
    {
        name:"search",
        type:"search"
    }
]