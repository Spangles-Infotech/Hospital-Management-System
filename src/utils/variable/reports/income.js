export const incomeTableHead = {
    "doctor-fee" : [
        {
            name:"Date",
            path:"date"
        },
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
            name:"Patient's ID",
            path:"patientId"
        },
        {
            name:"Patient's Name",
            path:"patientName"
        },
        {
            name:"Fee",
            path:"fee",
        },
    ],
    "laboratory" : [
        {
            name:"Date",
            path:"date"
        },
        {
            name:"Patient's ID",
            path:"patientId"
        },
        {
            name:"Patient's Name",
            path:"patientName"
        },
        {
            name:"Test Name",
            path:"testName"
        },
        {
            name:"Amount",
            path:"amount",
        },
    ],
    "pharmacy" : [
        {
            name:"Date",
            path:"date",
            date:true
        },
        {
            name:"Pres. No.",
            path:"prescriptionNumber"
        },
        {
            name:"Patient's Type",
            path:"patientType"
        },
        {
            name:"Patient's ID",
            path:"patientId"
        },
        {
            name:"Patient's Name",
            path:"patientName"
        },
        {
            name:"Payment Mode",
            path:"paymentMode"
        },
        {
            name:"Amount",
            path:"amount",
        },
    ],
    "out-patients" : [
        {
            name:"Date",
            path:"date"
        },
        {
            name:"Bil No.",
            path:"billNumber"
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
            name:"Payment Mode",
            path:"paymentMode"
        },
        {
            name:"Amount",
            path:"amount",
        },
    ],
    "in-patients" : [
        {
            name:"Bill Date",
            path:"date"
        },
        {
            name:"Bil No.",
            path:"billNumber"
        },
        {
            name:"Patient's ID",
            path:"patientId"
        },
        {
            name:"Patient's Name",
            path:"patientName"
        },
        {
            name:"No. of Days",
            path:"numberOfDays"
        },
        {
            name:"Payment Mode",
            path:"paymentMode"
        },
        {
            name:"Amount",
            path:"amount",
        },
    ],

    



}

export const incomeFilterFields = {
    "doctor-fee":[
        [
            {
                label:"Doctor's Name",
                name:"doctorName",
                type:"select",
                options:["Mathews", "Georgie", "Mandy"]
            },
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
                name:"search",
                type:"search"
            }
        ]
    ],
    "laboratory":[
        [
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
        ]
    ],
    "pharmacy":[
        [

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
                label:"Patient Type",
                name:"patientType",
                type:"select",
                options:["Adult", "Pediatric", "Geriatric"]
            },
            {
                label:"Payment Mode",
                name:"paymentMode",
                type:"select",
                options:["Cash", "Card", "Insurance"]
            }
        ]
    ],
    "out-patients":[
        [
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
                label:"Payment Mode",
                name:"paymentMode",
                type:"select",
                options:["Cash", "Card", "Insurance"]
            }
        ]
    ],
    "in-patients":[
        [
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
                label:"Payment Mode",
                name:"paymentMode",
                type:"select",
                options:["Cash", "Card", "Insurance"]
            }
        ]
    ]
}

export const incomeTableValue = {
    "doctor-fee":[
        {
            id:"21",
            date:"12/11/2002",
            doctorId:"D001",
            doctorName:"Dr. John",
            patientId:"P001",
            patientName:"John Doe",
            fee:1000,
        },
        {
            id:"22",
            date:"12/11/2002",
            doctorId:"D001",
            doctorName:"Dr. John",
            patientId:"P001",
            patientName:"John Doe",
            fee:1000,
        },
        {
            id:"23",
            date:"12/11/2002",
            doctorId:"D001",
            doctorName:"Dr. John",
            patientId:"P001",
            patientName:"John Doe",
            fee:1000,
        },
    ],
    "laboratory":[
        {
            id:"24",
            date:"12/11/2002",
            patientId:"P001",
            patientName:"John Doe",
            testName:"X-ray",
            amount:1000,
        },
        {
            id:"25",
            date:"12/11/2002",
            patientId:"P001",
            patientName:"John Doe",
            testName:"Urine Test",
            amount:1000,
        },
        {
            id:"25",
            date:"12/11/2002",
            patientId:"P001",
            patientName:"John Doe",
            testName:"Blood Test",
            amount:1000,
        },
    ],
    "pharmacy":[
        {
            id:"26",
            date:"12/11/2002",
            patientId:"P001",
            patientName:"John Doe",
            patientType:"out patient",
            prescriptionNumber:"2141",
            paymentMode:"Cash",
            amount:1000,
        },
        {
            id:"27",
            date:"12/11/2002",
            patientId:"P001",
            patientName:"John Doe",
            patientType:"out patient",
            prescriptionNumber:"2141",
            paymentMode:"Cash",
            amount:1000,
        },
        {
            id:"28",
            date:"12/11/2002",
            patientId:"P001",
            patientName:"John Doe",
            patientType:"out patient",
            prescriptionNumber:"2141",
            paymentMode:"Cash",
            amount:1000,
        },
    ],
    "out-patients":[
        {
            id:"28",
            date:"12/11/2002",
            patientId:"P001",
            patientName:"John Doe",
            billNumber:"2141",
            paymentMode:"Cash",
            amount:1000,
        },
        {
            id:"28",
            date:"12/11/2002",
            patientId:"P001",
            patientName:"John Doe",
            billNumber:"2141",
            paymentMode:"Cash",
            amount:1000,
        },
        {
            id:"28",
            date:"12/11/2002",
            patientId:"P001",
            patientName:"John Doe",
            billNumber:"2141",
            paymentMode:"Cash",
            amount:1000,
        },
    ],
    "in-patients":[
        {
            id:"28",
            date:"12/11/2002",
            patientId:"P001",
            patientName:"John Doe",
            billNumber:"2141",
            paymentMode:"Cash",
            noOfDays:"10",
            amount:1000,
        },
        {
            id:"28",
            date:"12/11/2002",
            patientId:"P001",
            patientName:"John Doe",
            billNumber:"2141",
            paymentMode:"Cash",
            noOfDays:"10",
            amount:1000,
        },
        {
            id:"28",
            date:"12/11/2002",
            patientId:"P001",
            patientName:"John Doe",
            billNumber:"2141",
            paymentMode:"Cash",
            noOfDays:"10",
            amount:1000,
        },
    ]
}

export const incomeNames = {
    "doctor-fee": "/get-all-doctor",
    "pharmacy":"/get-all-prescription",
    "out-patients":"/get-all-registered-appointments",
    "in-patients":"/get-all-in-patients"

}

