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
      path: "salePrice",
    },
  
    {
      name: "Action",
      path: "normal",
    },
  ];
  
  export const stockFormField = [
    [{ label: "Product Code", name: "productCode", type: "text" }],
    [{ label: "Product Name", name: "productName", type: "text" }],
    [{ label: "Generic Name", name: "genericName", type: "text" }],
    [
      {
        label: "Category",
        name: "category",
        type: "select",
        options: ["Tablet", "Syrup", "Injection"],
      },
    ],
    [{ label: "HSN Code", name: "hsnCode", type: "text" }],
    [{ label: "Batch Number", name: "batchNumber", type: "text" }],
    [{ label: "Expiry Date", name: "expiryDate", type: "date" }],
    [
      {
        label: "Unit",
        name: "unit",
        type: "select",
        options: ["box", "strip", "bottle"],
      },
      { label: "Total Boxes", name: "totalBox", type: "number" },
    ],
    [
      { label: "Sale Price Per Tablet", type: "number", name: "salePrice" },
      {
        label: "Purchase Price Per Tablet",
        type: "number",
        name: "purchasePrice",
      },
    ],
    [
      { label: "Strips Per Box", type: "number", name: "stripPerBox" },
      { label: "Tablets Per Strip", type: "number", name: "tabletPerStrip" },
      { label: "Sale Price Per Syrup", type: "number", name: "salePrice" },
      {
        label: "Purchase Price Per Syrup",
        type: "number",
        name: "purchasePrice",
      },
    ],
    [
      { label: "Total Tablets", name: "totalQuantity", type: "number" },
      { label: "Total Bottles", type: "number", name: "totalQuantity" },
      { label: "Low Stock", name: "lowStock", type: "number" },
    ],
    [
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
      { label: "Gst %", name: "gst", type: "number" },
    ],
    [{ label: "Supplier", name: "supplier", type: "text" }],
  ];
  
  export const unitFields = {
    box: ["Sale Price Per Syrup", "Purchase Price Per Syrup", "Total Bottles"],
    strip: [
      "Sale Price Per Syrup",
      "Purchase Price Per Syrup",
      "Total Bottles",
      "Total Boxes",
      "Strips Per Box",
    ],
    bottle: [
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
          name: "genericName",
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
        },
        {
          label: "GST",
          name: "gst",
        },
      ],
    },
  ];
  
  export const supplierPurchasePreviewData = {
    date: "2002-07-24",
    category: "Food",
    subCategory: "Restaurant",
    amount: 100,
    balanceAmount: 100,
    description: "Test Description",
    status: "Paid",
  };
  