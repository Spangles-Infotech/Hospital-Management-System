export const adminSidebarData = [
    // {
    //     name:"Dashboard",
    //     icon:"dashboard",
    //     path:"/admin/dashboard",
    // },
    // {
    //     name:"Registered OP (nurse)",
    //     icon:"registeredOpNurse",
    //     path:"/admin/registered-op-nurse",
    // },
    // {
    //     name:"Registered OP (doctor)",
    //     icon:"registeredOpDoctor",
    //     path:"/admin/registered-op-doctor",
    // },
    // {
    //     name:"Patients",
    //     icon:"patients",
    //     path:"/admin/patients",
    // },
    // {
    //     name:"Doctors",
    //     icon:"doctors",
    //     path:"/admin/doctors",
    // },
    // {
    //     name:"Staff",
    //     icon:"staff",
    //     path:"/admin/staff",
    // },
    {
        name:"Pharmacy",
        icon:"pharmacy",
        path:"/admin/pharmacy",
        components:[
            {
                tab_name: "Prescriptions",
                path: "/admin/pharmacy/Prescriptions",
                tab_path: "/admin/pharmacy/Prescriptions",
            },
            {
                tab_name: "Stocks",
                path: "/admin/pharmacy/stocks",
                tab_path: "/admin/pharmacy/stocks",
            },
            {
                tab_name: "Suppliers",
                path: "/admin/pharmacy/suppliers",
                tab_path: "/admin/pharmacy/suppliers",
            },
            {
                tab_name: "Purchase",
                path: "/admin/pharmacy/purchase",
                tab_path: "/admin/pharmacy/purchase",
            },
        ]
    },
    // {
    //     name:"Expense",
    //     icon:"expense",
    //     path:"/admin/expense",
    // },
    // {
    //     name:"Inventory",
    //     icon:"inventory",
    //     path:"/admin/inventory",
    // },
    // {
    //     name:"In-Patients",
    //     icon:"in-patients",
    //     path:"/admin/in-patients",
    // },
    // {
    //     name:"Labs",
    //     icon:"labs",
    //     path:"/admin/labs",
    // },
    // {
    //     name:"Settings",
    //     icon:"settings",
    //     path:"/admin/settings",
    //     temp_path:"/admin/settings/designation"
    // },
    // {
    //     name:"Reports",
    //     icon:"reports",
    //     path:"/admin/reports",
    //     temp_path:"/admin/reports/income?tab=doctor-fee",
    // }
]