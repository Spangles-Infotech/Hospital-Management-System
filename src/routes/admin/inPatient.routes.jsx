import PageLayout from "../../layout/PageLayout";
import InPatientList from "../../pages/inPatient/InPatientList";
import InpatientAllocateRoom from "../../pages/inPatient/InpatientAllocateRoom";

export default [
    {
        path:"in-patients",
        element:<PageLayout />,
        children:[
            {
                index:true,
                element:<InPatientList />
            },
            {
                path:"allocate-room/:id",
                element:<InpatientAllocateRoom />
            }
        ]
    }
]