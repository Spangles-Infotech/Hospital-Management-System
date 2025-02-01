export const roleFields = [
    {
      label:"Registered OP",
      name:"registeredOp",
      children:[
        {
          label:"New Appointments",
          name:"isNewAppointments",
        },
        {
          label:"Vitals Entry",
          name:"isVitalsEntry",
        },
        {
          label:"Reschedule",
          name:"isReschedule",
        },
        {
          label:"Patient Consultation",
          name:"isPatientConsultation",
        }
      ]
    },
    {
        label:"Patients",
        name:"patients",
        children:[
            {
                label:"New Patient",
                name:"isNewPatient",
            },
            {
                label:"Edit Patient",
                name:"isEditPatient",
            }
        ]
    },
    {
        label:"Doctor",
        name:"doctor",
        children:[
            {
                label:"New Doctor",
                name:"isNewDoctor",
            },
            {
                label:"Edit Doctor",
                name:"isEditDoctor",
            }
        ]
    },
    {
        label:"Staff",
        name:"staff",
        children:[
            {
                label:"New Staff",
                name:"isNewStaff",
            },
            {
                label:"Edit Staff",
                name:"isEditStaff",
            }
        ]
    },
    {
        label:"Expense",
        name:"expense",
        children:[
            {
                label:"New Expense",
                name:"isNewExpense",
            },
            {
                label:"Edit Expense",
                name:"isEditExpense",
            },
            {
                label:"Print Expense",
                name:"isPrintExpense",
            }
        ]
    },
    {
        label:"Inventory",
        name:"inventory",
        children:[
            {
                label:"New Inventory",
                name:"isNewInventory",
            },
            {
                label:"Edit Inventory",
                name:"isEditInventory",
            },
            {
                label:"Print Inventory",
                name:"isPrintInventory",
            }
        ]
    },
    {
        label:"In-Patient",
        name:"inPatient",
        children:[
            {
                label:"Room Allocation",
                name:"isRoomAllocation",
            },
            {
                label:"Patient Consultation",
                name:"isPatientConsultation",
            },
        ]
    },
    {
        label:"Lab",
        name:"lab",
        children:[
            {
                label:"Payment",
                name:"isPayment",
            },
            {
                label:"Reports",
                name:"isReports",
            },
        ]
    },
    {
        label:"Settings",
        name:"isSettings",
    },
    {
        label:"Reports",
        name:"isReports",
    }
  ]

export const userListHeader = [
    {
        name:"Name",
        path:"name",
    },
    {
        name:"Designation",
        path:"designation",
    },
    {
        name:"User Role",
        path:"userRole",
    },
    {
        name:"User Name",
        path:"userName",
    },
    {
        name:"Password",
        path:"password",
    },
    {
        name:"Action",
        path:"normal"
    }
]

export const userListData = [
    {
        id:"12",
        name:"John Doe",
        designation:"Software Engineer",
        userRole:"Admin",
        userName:"johndoe",
        password:"password123",
    },
    {
        id:"13",
        name:"John Doe",
        designation:"Software Engineer",
        userRole:"Admin",
        userName:"johndoe",
        password:"password123",
    }
]