import RegisteredOP_1 from "../../pages/RegisteredOP_1";
import RegisteredOP_2 from "../../pages/RegisteredOP_2";
import Dashboard from "../../pages/Dashboard";
import Layout from "../../pages/Layout";
import Patient from "../../pages/Patient";
import Staff from "../../pages/Staff";
import Prescription from "../../pages/pharmacy/Prescription/Prescription";
import PrescriptionPreview from "../../pages/pharmacy/Prescription/PrescriptionPreview";

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
        ]
    }
]