import { Diagnosis } from "../../Component/registeredOP/Diagnosis";
import { LabTesting } from "../../Component/registeredOP/LabTesting";
import { OtherReports } from "../../Component/registeredOP/OtherReports";
import { OtherSevices } from "../../Component/registeredOP/OtherSevices";
import { Prescription } from "../../Component/registeredOP/Prescription";
import RegisteredOpPreview from "../../pages/registered-op/RegisteredPreview";

export default [
    {
        path:"registered-op-doctor/preview",
        element:<RegisteredOpPreview />,
        children:[
            {
                index:true,
                element:<Diagnosis />
            },
            {
                path:"lab-testing",
                element:<LabTesting />
            },
            {
                path:"prescription",
                element:<Prescription />
            },
            {
                path:"other-reports",
                element:<OtherReports />
            },
            {
                path:"other-services",
                element:<OtherSevices />
            }
        ]

    }
]