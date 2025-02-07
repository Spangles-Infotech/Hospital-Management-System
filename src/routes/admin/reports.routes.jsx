import { TabLayout } from "../../layout/TabLayout";
import InPatient from "../../pages/reports/inpatient/InPatient";
import Pharmacy from "../../pages/reports/pharmacy/Pharmacy";
import Rooms from "../../pages/reports/rooms/Rooms";
import Reports from "../../pages/reports/Reports";
import  {incomeFilterFields, incomeTableHead,  incomeTableValue } from "../../utils/variable/reports/income"
import { reportOutPatientTableHead, reportOutPatientTableValue, reportOutPatientFilterFields  } from "../../utils/variable/reports/outpatient";



export default [
    {
        path:"reports",
        element:<TabLayout isSettings={false} />,
        children:[
            {
                path:"income",
                element:<Reports tableHead={incomeTableHead} tableValue={incomeTableValue} filterFields={incomeFilterFields} isIncome={true} />
            },
            {
                path:"out-patient",
                element:<Reports tableHead={reportOutPatientTableHead} tableValue={reportOutPatientTableValue} filterFields={reportOutPatientFilterFields}  />
            },
            {
                path:"in-patient",
                element:<InPatient />
            },
            {
                path:"rooms",
                element:<Rooms />
            },
            {
                path:"pharmacy",
                element:<Pharmacy />
            }
        ]
    }
]