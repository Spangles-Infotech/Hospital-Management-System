export const supplierTableHeading = [
    {
      name:"Supplier ID",
      path:"supplierId"
    },
    {
      name:"Supplier Name",
      path:"supplierName"
    },
    {
        name:"GST No.",
        path:"gstNumber"
    },
    {
      name:"Phone No.",
      path:"phoneNumber"
    },
    {
      name:"Action",
      path:"normal"
    }
  ]

export const supplierData = [
    {
        id:"21414",
        supplierId: "323252",
        supplierName: "John Doe",
        gstNumber: "grqrqhrh",
        phoneNumber: "dasgasgasga",
    },
    {
        id:"21415",
        supplierId: "323252",
        supplierName: "John Doe",
        gstNumber: "grqrqhrh",
        phoneNumber: "dasgasgasga",
    },
    {
        id:"21416",
        supplierId: "323252",
        supplierName: "John Doe",
        gstNumber: "grqrqhrh",
        phoneNumber: "dasgasgasga",
    },
]

export const supplierFormField = [
  [
    {
      label:"Supplier ID",
      name:"supplierId",
      type:"text"
    },
    {
      type:""
    }
  ],
  [
    {
      label:"Supplier/Company Name",
      name:"supplierName",
      type:"text"
    },
    {
      label:"DL Number",
      name:"dlNumber",
      type:"text"
    }
  ],
  [
    {
      label:"TIN Number",
      name:"tinNumber",
      type:"text"
    },
    {
      type:""
    }
  ],
  [
    {
      label:"GST Number",
      name: "gstNumber",
      type:"text"
    },
    {
      label:"Pan Number",
      name: "panNumber",
      type:"text"
    },
  ],
  [
    {
      label:"Phone Number",
      name: "phoneNumber",
      type:"text"
    },
    {
      label:"Email",
      name: "email",
      type:"text"
    },
  ],
  [
    {
      label:"Address",
      name: "address",
      type:"text"
    },
    {
      label:"City",
      name: "city",
      type:"text"
    },
  ],
  [
    {
      label:"District",
      name: "district",
      type:"text"
    },
    {
      label:"State",
      name: "state",
      type:"text"
    },
  ],
  [
    {
      label:"Zip Code",
      name: "zipCode",
      type:"text"
    },
    {
      type:""
    }
  ]
]

export const supplierPreviewField = [
  {
    icon:"homeIcon",
    label:"Supplier ID",
    name:"supplierName"
  },
  {
    icon:"gstIcon",
    label:"GST Number",
    name:"gstNumber"
  },
  {
    icon:"emailIcon",
    label:"Email",
    name:"email"
  },
  {
    icon:"dlNumber",
    label:"DL Number",
    name:"dlNumber"
  },
  {
    icon:"dlNumber",
    label:"TIN Number",
    name:"tinNumber"
  },
  {
    icon:"locationIcon",
    label:"",
    name:"address"
  },
  {
    icon:"panNumber",
    label:"Pan Number",
    name:"panNumber"
  },
  {
    icon:"phoneIcon",
    label:"Phone Number",
    name:"phoneNumber"
  }
]

export const supplierPreviewData = {
    id:"21414",
    supplierId: "323252",
    supplierName: "John Doe",
    gstNumber: "grqrqhrh",
    panNumber:"3253253252",
    tinNumber:"3253253252",
    dlNumber:"3253253252",
    email:"john.doe@example.com",
    phoneNumber: "dasgasgasga",
    address:"Nagercoil",
}

export const supplierPurchaseHeading = [
  {
    name:"Order No.",
    path:"orderNumber"
  },
  {
    name:"Invoice No.",
    path:"invoiceNumber"
  },
  {
      name:"Date",
      path:"date"
  },
  {
    name:"No. of Items",
    path:"numberOfItems"
  },
  {
    name:"Amount",
    path:"amount"
  },
  {
    name:"Action",
    path:"normal"
  }
]

export const supplierPurchaseValue = [
  {
    id:"21414",
    orderNumber: "323252",
    invoiceNumber: "23525",
    date: "22/10/2025",
    numberOfItems:"10",
    amount:"12,000",
  },
  {
    id:"21415",
    orderNumber: "323252",
    invoiceNumber: "23525",
    date: "22/10/2025",
    numberOfItems:"10",
    amount:"12,000",
  },
  {
    id:"21416",
    orderNumber: "323252",
    invoiceNumber: "23525",
    date: "22/10/2025",
    numberOfItems:"10",
    amount:"12,000",
  },
]

export const supplierPurchasePreviewField = [
  {
    label:"Supplier ID",
    name:"supplierId"
  },
  {
    label:"Order Number",
    name:"orderNumber"
  },
  {
    label:"Delivered Date",
    name:"deliveredDate"
  },
  {
    label:"Supplier Name",
    name:"supplierName"
  },
  {
    label:"Invoice Number",
    name:"invoiceNumber"
  },
  {
    label:"Phone Number",
    name:"phoneNumber"
  },
  {
    label:"PurchasedDate",
    name:"purchasedDate"
  }
]

export const supplierPurchasePreviewData = {
  supplierId: "21415",
  orderNumber: "323252",
  deliveredDate: "22/10/2025",
  supplierName:"Gukesh",
  invoiceNumber: "23525",
  phoneNumber: "1234567890",
  purchasedDate: "22/10/2025",
}