import RegisteredOP_1 from "../../Component/RegisteredOP_1";
import RegisteredOP_2 from "../../Component/RegisteredOP_2";
import Dashboard from "../../pages/Dashboard";
import Layout from "../../pages/Layout";
import Patient from "../../pages/Patient";

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
            }
        ]
    }
]