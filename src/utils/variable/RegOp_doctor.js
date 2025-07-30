export const TableHeading=[
    {
        name:"Token",
        path2:"token"
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
        name:"Age",
        path1:"patientId",
        path2:"age",
        isNested:true
    },
    
    {
        name:"Gender",
        path1:"patientId",
        path2:"gender",
        isNested:true
    },
    {
        name:"Blood Group",
        path1:"patientId",
        path2:"bloodGroup",
        isNested:true
    },
    {
        name:"Phone Number",
        path1:"patientId",
        path2:"mobileNumber",
        path3:"number",
        isDoubleNested:true

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
        id:"89746",
        patientDetail:"SB202024006",
        patientId:"SB20202457",
        token:"01",
        patientName:"Vijay",
        age:"25",
        gender:"Male",
        bloodGroup:"A+",
        phoneNumber:"+91 9087654322",
        status:"Active",
    },

    {
        id:"89749",
        patientDetail:"SB202024006",
        patientId:"SB20202457",
        patientName:"Vijay",
        age:"25",
        token:"02",
        gender:"Male",
        bloodGroup:"A+",
        phoneNumber:"+91 9087654322",
        status:"Consulted",
    }
]

