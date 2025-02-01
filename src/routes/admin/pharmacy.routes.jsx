import PharmacyLayout from "../../pages/pharmacy/PharmacyLayout";
import Prescription from "../../pages/pharmacy/Prescription/Prescription";
import PrescriptionLayout from "../../pages/pharmacy/Prescription/PrescriptionLayout";
import PrescriptionPreview from "../../pages/pharmacy/Prescription/PrescriptionPreview";
import Stocks from "../../pages/pharmacy/Stocks";
import Purchase from "../../pages/pharmacy/purchase/Purchase";
import PurchaseForm from "../../pages/pharmacy/purchase/PurchaseForm";
import PurchasePreview from "../../pages/pharmacy/purchase/PurchasePreview";
import SupplierForm from "../../pages/pharmacy/supplier/SupplierForm";
import SupplierLayout from "../../pages/pharmacy/supplier/SupplierLayout";
import SupplierList from "../../pages/pharmacy/supplier/SupplierList";
import SupplierPreview from "../../pages/pharmacy/supplier/SupplierPreview";
import { SupplierPurchase } from "../../pages/pharmacy/supplier/SupplierPurchase";

export default [
    {
        path:"pharmacy",
        element:<PharmacyLayout />,
        children:[
            {
                path:"prescriptions",
                element:<PrescriptionLayout />,
                children:[
                    {
                        index:true,
                        element:<Prescription />
                    },
                    {
                        path:"preview",
                        element:<PrescriptionPreview />
                    },
                ]
            },
            {
                path:"stocks",
                element:<Stocks />
            },
            {
                path:"suppliers",
                element:<SupplierLayout />,
                children:[
                    {
                        index:true,
                        element:<SupplierList />
                    },
                    {
                        path:"add-supplier",
                        element:<SupplierForm />
                    },
                    {
                        path:"preview-supplier",
                        element:<SupplierPreview />
                    },
                    {
                        path:"purchase-preview",
                        element:<SupplierPurchase />
                    }
                ]
            },
            {
                path:"purchase",
                element:<Purchase />
            },

            {
                path:"purchase/preview",
                element:<PurchasePreview />
            },
            
            {
                path:"purchase/add-form",
                element:<PurchaseForm />
            }
        ]
    }
]