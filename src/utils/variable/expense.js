export const expenseTableHeading = [
    {
        name:"SI.no.",
        path:"si.no."
    },
    {
        name:"Date",
        path:"date",
        date:true
    },
    {
        name:"Category",
        path:"category"
    },
    {
        name:"Sub Category",
        path:"subCateogry"
    },
    {
        name:"Total Amount",
        path:"totalAmount"
    },
    {
        name:"Balance Amount",
        path:"balanceAmount"
    },
    {
        name:"Status",
        path:"status",
        type:"normal"
    },
    {
        name:"Action",
        path:"normal",
    }
]

export const expenseTableValue = [
    {
        id:"12",
        date:"24/07/2002",
        category:"Food",
        subCategory:"Breakfast",
        totalAmount:100,
        balanceAmount:100,
        status:"Paid",
    },
    {
        id:"13",
        date:"24/07/2002",
        category:"Food",
        subCategory:"Breakfast",
        totalAmount:100,
        balanceAmount:100,
        status:"Paid",
    },
    {
        id:"14",
        date:"24/07/2002",
        category:"Food",
        subCategory:"Breakfast",
        totalAmount:100,
        balanceAmount:100,
        status:"Paid",
    },
]

export const expenseFormFields = [
    [
        {
            label:"Date",
            name:"date",
            type:"date"
        },
        {
            label:"Category",
            name:"category",
            type:"text",
        },
    ],
    [
        {
            label:"Sub Category",
            name:"subCategory",
            type:"text",
        },
        {
            label:"Total Amount",
            name:"totalAmount",
            type:"number",
        },

    ],
    {
        label:"Paid Amount",
        name:"paidAmount",
        type:"number"
    },
    {
        label:"Description",
        name:"description",
        type:"textarea",
    },
]


export const expenseData = {
    totalAmount:"15,000",
    unPaidAmount:"12,500",
    paidAmount:"2,500",
}

export const editFormField = [
    {
        label:"",
        name:"amount",
        type:"number",
    }
]

export const expensePreviewField = [
    {
        isSingle:true,
        fields:[
            {
                label:"Date",
                name:"date",
            },
            {
                label:"Category",
                name:"category",
            },
            {
                label:"Sub Category",
                name:"subCateogry",
            },
            {
                label:"Total Amount",
                name:"totalAmount",
            },
            {
                label:"Balance Amount",
                name:"balanceAmount",
            },
            {
                label:"Description",
                name:"description",
            },
            {
                label:"Status",
                name:"status",
            }
        ]
    }
]

export const expensePreviewValue = {
    date:"2002-07-24",
    category:"Food",
    subCategory:"Restaurant",
    amount:100,
    balanceAmount:100,
    description:"Test Description",
    status:"Paid"
}