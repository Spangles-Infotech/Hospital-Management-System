export const ipbillingTableHeading =[
    {
       name:"Bill. No.",
       path:"billNumber" 
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
        name:"Gender",
        path:"gender"
    },
    {
        name:"Phone Number",
        path:"phoneNumber"
    },
    {
        name:"Section",
        path:"section"
    },
    {
        name:"Room No.",
        path:"roomNumber"
    },
    {
        name:"No. of Days",
        path:"noOfDays"
    },
    {
        name:"From",
        path:"from",
        date:true
    },
    {
        name:"To",
        path:"to",
        date:true
    },
    {
        name:"Amount",
        path:"amount"
    },
    {
        name:"Credit",
        path:"credit"
    },
    {
        name:"Status",
        path:"status",
        type:"normal"
    },

    {
        name:"Action",
        path:"normal"

    }
]



export const ipbillingTableValue = [
    {
        id:"001",
        sino:"01",
        patientId:"DB02025001",
        patientName:"Praveen",
        age:"24",
        gender:"Male",
        bloodGroup:"B +ive",
        phoneNumber:"+91 9087654321",
        amount:"Rs. 3,060",
        status:"paid"

    },

    {
        id:"002",
        sino:"01",
        patientId:"DB02025001",
        patientName:"Gokul",
        age:"34",
        gender:"Male",
        bloodGroup:"O +ive",
        phoneNumber:"+91 9087654321",
        amount:"Rs. 3,060",
        status:"paid"
    },

    {
        id:"003",
        sino:"01",
        patientId:"DB02025001",
        patientName:"Sherin",
        age:"27",
        gender:"Female",
        bloodGroup:"AB +ive",
        phoneNumber:"+91 9087654321",
        amount:"Rs. 3,060",
        status:"unpaid"

    },

    {
        id:"004",
        sino:"01",
        patientId:"DB02025001",
        patientName:"Praveen",
        age:"24",
        gender:"Male",
        bloodGroup:"B +ive",
        phoneNumber:"+91 9087654321",
        amount:"Rs. 3,060",
        status:"unpaid"

    }


]
export const ipbillingPayment=[
 [

    {
        label:"Payment Type",
        inputName:"paymentType",
        dropdownName:"paymentType",
        type:"inputdropedown",
        option:["Cash","Gpay","Card"]

    }

 ],

 [
    {
        label:"Amount Paid",
        name:"amountPaid",
        type:"text"

    }
 ]  
]