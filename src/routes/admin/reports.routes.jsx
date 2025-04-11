import { TabLayout } from "../../layout/TabLayout";
import Income from "../../pages/reports/Income";
import InPatient from "../../pages/reports/inpatient/InPatient";
import InPatitents from "../../pages/reports/InPatitents";
import Pharmacy from "../../pages/reports/pharmacy/Pharmacy";
import Reports from "../../pages/reports/Reports";
import  {incomeFilterFields, incomeTableHead,  incomeTableValue } from "../../utils/variable/reports/income"
import { reportOutPatientTableHead, reportOutPatientFilterFields  } from "../../utils/variable/reports/outpatient";



export default [
    {
        path:"reports",
        element:<TabLayout isSettings={false} />,
        children:[
            {
                path:"income",
                element:<Income />
            },
            {
                path:"out-patient",
                element:<Reports tableHead={reportOutPatientTableHead} filterFields={reportOutPatientFilterFields} name={"/get-all-registered-appointments"} />
            },
            {
                path:"in-patient",
                element:<InPatitents />
            },
            {
                path:"pharmacy",
                element:<Pharmacy />
            }
        ]
    }
]