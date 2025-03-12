export const staffTableHeading = [
  {
    name: "Staff ID",
    path1: "userId",
    path2: "id",
    isNested: true,
  },
  {
    name: "Staff Name",
    path1: "userId",
    path2: "name",
    isNested: true,
  },
  {
    name: "Phone No.",
    isDoubleNested: true,
    path1: "userId",
    path2: "mobileNumber",
    path3: "number",
  },

  {
    name:"Gender",
    path1:"userId",
    path2:"gender",
    isNested:true
},
{
    name:"Blood Group",
    path2:"bloodGroup",
    path1:"userId",
    isNested:true
},
{
    name:"Designation",
    path2:"designation",
    path1:"userId",
    isNested:true
},
{
    name:"Status",
    path:"status",
    type:"tag"
},
{
    name:"Action",
    path:"normal"
}
];

export const staffFields = [
  [
    {
      label: "Staff ID",
      name: "id",
      type: "text",
    },
    {
      label: "Staff Name",
      name: "name",
      type: "text",
    },
  ],
  [
    {
      label: "Father's Name",
      name: "fatherName",
      type: "text",
    },
    {
      label: "Mobile Number",
      name: "mobileNumber",
      options: ["+91", "+92", "+93"],
      inputName: "number",
      dropdownName: "countryCode",
      type: "inputdropdown",
    },
  ],
  [
    [
      {
        label: "Date of Birth",
        name: "dob",
        type: "date",
      },
      {
        label: "Age",
        name: "age",
        type: "text",
      },
    ],
    {
      label: "Gender",
      name: "gender",
      options: ["Male", "Female", "Other"],
      type: "radio",
    },
  ],
  [
    {
      label: "Blood Group",
      name: "bloodGroup",
      options: ["A+", "A-", "B+", "B-", "AB+", "AB-"],
      type: "select",
    },
    {
      label: "Alternate Mobile Number",
      options: ["+91", "+92", "+93"],
      name: "alternateMobileNumber",
      inputName: "number",
      dropdownName: "countryCode",
      type: "inputdropdown",
    },
  ],
  [
    {
      label: "Pincode",
      name: "pincode",
      type: "text",
    },
    {
      label: "State",
      name: "state",
      options: ["Maharashtra", "Gujarat", "Rajasthan"],
      type: "select",
    },
  ],
  [
    {
      label: "District",
      name: "district",
      options: ["Maharashtra", "Gujarat", "Rajasthan"],
      type: "select",
    },
    {
      label: "City",
      name: "city",
      type: "text",
    },
  ],
  {
    label: "Address",
    name: "address",
    type: "textarea",
  },
  [
    {
      label: "Designation",
      name: "designation",
      type: "select",
      options: ["Doctor", "Nurse","staff"],
    },
    {
      label: "Upload Photo",
      name: "photo",
      type: "file",
      title: "Upload Image",
    },
  ],
  [
    {
      label: "Joining Date",
      name: "joiningDate",
      type: "date",
    },
    {
      label: "Reliving Date",
      name: "relivingDate",
      type: "date",
    },
  ],
];

export const staffTableValue = [
  {
    id: "21414",
    staffId: "323252",
    staffName: "John Doe",
    phoneNumber: "dasgasgasga",
    bloodGroup: "A+",
    gender: "Male",
    designation: "Emergency",
  },
  {
    id: "214145",
    staffId: "323252",
    staffName: "John Doe",
    phoneNumber: "dasgasgasga",
    bloodGroup: "A+",
    gender: "Male",
    designation: "Emergency",
  },
  {
    id: "214146",
    staffId: "323252",
    staffName: "John Doe",
    phoneNumber: "dasgasgasga",
    bloodGroup: "A+",
    gender: "Male",
    designation: "Emergency",
  },
];

export const staffPreviewField = [
  {
    icon: "staffIcon",
    head: [
      {
        title: "Staff ID",
        name1: "userId",
        name2: "id",
        isNested:true
      },
    ],
    fields: [
      {
        label: "Staff Name",
        name1: "userId",
        name2: "name",
        isNested:true
      },
      {
        label: "Address",
        name1: "userId",
        name2: "address",
        isNested:true
      },
      {
        label: "Age",
        name1: "userId",
        name2: "age",
        isNested:true
      },
      {
        label: "Phone Number",
        name1: "userId",
        name2: "mobileNumber",
        name3: "number",
        isDoubleNested:true
      },
      {
        label: "Gender",
        name1: "userId",
        name2: "gender",
        isNested:true
      },
      {
        label: "Alternate Mobile Number",
        name1: "userId",
        name2: "alternateMobileNumber",
        name3: "number",
        isDoubleNested:true
      },
      {
        label: "Blood Group",
        name1: "userId",
        name2: "bloodGroup",
        isNested:true
      },
    ],
    image: {
      name: "doctorImage",
    },
    isStaff: true,
    staffInfo: [
      {
        title: "Joining Date",
        name: "joiningDate",
      },
      {
        title: "Reliving Date",
        name: "relivingDate",
      },
    ],
  },
];

