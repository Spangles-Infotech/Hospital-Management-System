import RegisteredOP_1 from "../../pages/registered-op/RegisteredOP_1";
import RegisteredOP_2 from "../../pages/registered-op/RegisteredOP_2";
import Dashboard from "../../pages/Dashboard";
import Layout from "../../pages/Layout";
import Patient from "../../pages/Patient";
import Staff from "../../pages/Staff";
import Prescription from "../../pages/pharmacy/Prescription/Prescription";
import PrescriptionPreview from "../../pages/pharmacy/Prescription/PrescriptionPreview";
import registeredPreviewRoutes from "./registeredPreview.routes";
import pharmacyRoutes from "./pharmacy.routes";
import Doctor from "../../pages/Doctor";
import Expense from "../../pages/Expense";
import Inventory from "../../pages/Inventory";
import ipBillingRoutes from "./ipBilling.routes";

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
            
            ...ipBillingRoutes,
            ...registeredPreviewRoutes,
            ...pharmacyRoutes,

        ]
    }
]