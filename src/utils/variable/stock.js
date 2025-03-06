export const stockTableHeading = [
  {
    name: "Product Code",
    path: "productCode",
  },

  {
    name: "Batch No.",
    path: "batchNumber",
  },

  {
    name: "Product Name",
    path: "productName",
  },

  {
    name: "Category",
    path: "category",
  },

  {
    name: "HSN Code",
    path: "hsnCode",
  },

  {
    name: "Stocked Date",
    path: "stockedDate",
  },

  {
    name: "Expiry Date",
    path: "expiryDate",
    date: "true",
  },

  {
    name: "In Stock",
    path: "totalQuantity",
  },

  {
    name: "SalePrice",
    path: "salesPrice",
  },

  {
    name: "Action",
    path: "normal",
  },
];

export const stockEditFormField = [
  [{ label: "Product Code", name: "productCode", type: "text" }, { label: "Product Name", name: "productName", type: "text" }],
  [{ label: "Generic Name", name: "genericName", type: "text" }, { label: "HSN Code", name: "hsnCode", type: "text" }],
  [
    {
      label: "Category",
      name: "category",
      type: "select",
      options: ["Tablet", "Syrup", "Injection"],
    },
    {
      label: "Expire Alert",
      name:"expireAlert",
      options: ["months", "weeks", "days"],
      inputName: "count",
      inputType:"number",
      dropdownName: "duration",
      type: "inputdropdown",
      align:"right"
    },
  ],
  [{ label: "Pack", name: "pack", type: "text" }, { label: "Low Stock", name: "lowStock", type: "number" }],
  [{ label: "Gst %", name: "gst", type: "number" },{label:"Total Quantity", name:"totalQuantity", type:"number"}],
  [{label:"Purchase Price", name:"purchasePrice", type:"number"},{label:"Sales Price", name:"salesPrice", type:"number"}],
];

export const unitFields = {
  box: ["Sale Price Per Syrup", "Purchase Price Per Syrup", "Total Bottles", "Total Strips"],
  strip: [
    "Sale Price Per Syrup",
    "Purchase Price Per Syrup",
    "Total Bottles",
    "Total Boxes",
    "Strips Per Box",
  ],
  bottle: [
    "Total Strips",
    "Sale Price Per Tablet",
    "Purchase Price Per Tablet",
    "Total Boxes",
    "Strips Per Box",
    "Tablets Per Strip",
    "Total Tablets",
  ],
};

export const stockPreviewFields = [
  {
    isSingle: true,
    fields: [
      {
        label: "Product Code",
        name: "productCode",
      },
      {
        label: "Batch Number",
        name: "batchNumber",
      },
      {
        label: "Medicine Name",
        name: "productName",
      },
      {
        label: "Generic Name",
        name: "productName",
      },
      {
        label: "Category",
        name: "category",
      },
      {
        label: "Expiry Date",
        name: "expiryDate",
      },
      {
        label: "HSN Code",
        name: "hsnCode",
      },
      {
        label: "Unit",
        name: "unit",
      },
      {
        label: "Total Quantity",
        name: "totalQuantity",
      },
      {
        label: "Sale Price",
        name: "salePrice",
      },
      {
        label: "Purchase Price",
        name: "purchasePrice",
      },
      {
        label: "Low Stock",
        name: "lowStock",
      },
      {
        label: "Expire Alert",
        name: "expireAlert",
        path:"count",
        isNested:true
      },
      {
        label: "GST",
        name: "gst",
      },
    ],
  },
];

export const tagFormFields = {
  "medicine":[
    {
        label:"",
        name:"medicineCategory",
        type:"string",
    }
  ],
  "pack":[
    [
      {
          label:"",
          name:"unitsCategory",
          type:"number",
      },
    ]
  ],
  "strength":[
    {
        label:"",
        name:"strengthCategory",
        type:"string",
    }
  ],
  "gst":[
    {
        label:"",
        name:"gstCategory",
        type:"number",
    }
  ],

}


