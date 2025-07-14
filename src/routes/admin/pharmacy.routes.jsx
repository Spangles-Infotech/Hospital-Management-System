import PharmacyLayout from "../../layout/PharmacyLayout";
import Prescription from "../../pages/pharmacy/Prescription/Prescription";
import PrescriptionPreview from "../../pages/pharmacy/Prescription/PrescriptionPreview";
import Stocks from "../../pages/pharmacy/Stocks";
import Purchase from "../../pages/pharmacy/purchase/Purchase";
import PurchaseForm from "../../pages/pharmacy/purchase/PurchaseForm";
import PurchasePreview from "../../pages/pharmacy/purchase/PurchasePreview";
import PurchaseTable from "../../pages/pharmacy/purchase/PurchaseTable";
import SupplierForm from "../../pages/pharmacy/supplier/SupplierForm";
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
                element:<PharmacyLayout />,
                children:[
                    {
                        index:true,
                        element:<Prescription />
                    },
                    {
                        path:"preview",
                        element:<PrescriptionPreview />
                    },
                    {
                        path:"edit-prescription/:id",
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
                element:<PharmacyLayout />,
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
                        path:"preview-supplier/:id",
                        element:<SupplierPreview />
                    },
                    {
                        path:"purchase-preview/:id",
                        element:<PurchasePreview />
                    },
                    {
                        path:"edit-supplier-form/:id",
                        element:<SupplierForm isEdit={true} />
                    }
                ]
            },
            {
                path:"purchase",
                element:<PurchaseForm />
            },
            {
                path:"purchaseTable",
                element:<PurchaseTable />
            },

            {
                path:"purchase/preview/:id",
                element:<PurchasePreview />
            },
            {
                path:"purchaseTable/preview/:id",
                element:<PurchasePreview />
            },
            
            {
                path:"purchase/add-form",
                element:<PurchaseForm />
            },
            {
                path:"purchaseTable/add-form",
                element:<PurchaseForm />
            },
            {
                path:"purchase/edit-form/:id",
                element:<PurchaseForm isEdit={true} />
            },
            {
                path:"purchaseTable/edit-form/:id",
                element:<PurchaseForm isEdit={true} />
            }
        ]
    }
]