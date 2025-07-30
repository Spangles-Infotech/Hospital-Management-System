import IpBillingForm from "../../pages/ipBilling/IpBillingForm";
import IpBillingLayout from "../../pages/ipBilling/IpBillingLayout";
import IpBillingList from "../../pages/ipBilling/IpBillingList";

export default [
    {
        path:"ip-billing",
        element:<IpBillingLayout />,
        children:[
            {
                index:true,
                element:<IpBillingList />
            },
            {
                path:"form/:id",
                element:<IpBillingForm />
            }
        ]
    }
]