import PageLayout from "../../layout/PageLayout";
import LabPrint from "../../pages/lab/LabPrint";
import LabsPatientList from "../../pages/lab/LabsPatientList";

export default [
    {
        path:"labs",
        element:<PageLayout />,
        children:[
            {
                index:true,
                element:<LabsPatientList/>
            },
            {
                path: "lab-print",
                element:<LabPrint/>
            }
        ]
    }
]



