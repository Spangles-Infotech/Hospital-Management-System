import RegisteredOP_1 from "../../pages/registered-op/RegisteredOP_1";
import RegisteredOP_2 from "../../pages/registered-op/RegisteredOP_2";
import Dashboard from "../../pages/dashboard/Dashboard";
import Layout from "../../layout/Layout";
import Patient from "../../pages/patient/Patient";
import Staff from "../../pages/staff/Staff";
import Prescription from "../../pages/pharmacy/Prescription/Prescription";
import PrescriptionPreview from "../../pages/pharmacy/Prescription/PrescriptionPreview";
import registeredPreviewRoutes from "./registeredPreview.routes";
import pharmacyRoutes from "./pharmacy.routes";
import Doctor from "../../pages/doctor/Doctor";
import Expense from "../../pages/expense/Expense";
import Inventory from "../../pages/inventory/Inventory";
import ipBillingRoutes from "./ipBilling.routes";
import inPatientRoutes from "./inPatient.routes";
import settingRoutes from "./setting.routes";
import Login from "../../pages/login/Login";

export default [
    {
        path:"/admin",
        element:<Layout />,
        children:[
           
            {
                path:"dashboard",
                element: <Dashboard />
            },
            {
                path:"registered-op-nurse",
                element:<RegisteredOP_1 />
            },
            {
                path:"registered-op-doctor",
                element:<RegisteredOP_2 />
            },
            {
                path:"doctors",
                element:<Doctor />
            },
            {
                path:"patients",
                element:<Patient />
            },
            {
                path:"staff",
                element:<Staff />
            },
            {
                path:"pharmacy",
                element:<Prescription />
            },
            {
                path:"doctors",
                element:<PrescriptionPreview />
            },
            {
                path:"expense",
                element:<Expense />
            },
            {
                path:"inventory",
                element:<Inventory />
            },
            ...settingRoutes,
            ...inPatientRoutes,
            ...ipBillingRoutes,
            ...registeredPreviewRoutes,
            ...pharmacyRoutes,

        ]
    },
    {
        path:"/login",
        element:<Login/>
    },
]