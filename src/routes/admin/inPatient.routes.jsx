import InPatientLayout from "../../pages/inPatient/InPatientLayout";
import InPatientList from "../../pages/inPatient/InPatientList";
import InpatientAllocateRoom from "../../pages/inPatient/InpatientAllocateRoom";

export default [
    {
        path:"in-patients",
        element:<InPatientLayout />,
        children:[
            {
                index:true,
                element:<InPatientList />
            },
            {
                path:"allocate-room",
                element:<InpatientAllocateRoom />
            }
        ]
    }
]