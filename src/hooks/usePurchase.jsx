import React, { useEffect, useState } from "react";
import { fetch } from "../api/fetch";
import { usePostData } from "./usePostData";
import { useForm } from "../context/FormContext";
import { NewPurchaseField } from "../utils/variable/purchase";
import { useNavigate } from "react-router-dom";
import { useUpdateData } from "./useUpdateData";
import { useSupplier } from "./useSupplier";

export const usePurchase = () => {
  const navigate = useNavigate();
  const {supplierNameList} = useSupplier()
  const { formData, setFormData, handleReset, handleSubmit } = useForm();
  const [supplierData, setSupplierData] = useState({});
  const { message, isLoading, error, postData } = usePostData(`/add-purchase`);
  const {message:updateMessage, updateData } = useUpdateData("/update-purchase")

  useEffect(()=>{
    const handleGetSupplierInfo = async () => {
      try {
        const response = await fetch.get(
          `get-supplier-info?supplierName=${formData.supplierName}`
        );
        setSupplierData(response.data.data);
      } catch (error) {
        console.log("error at fetcching supplier data", error.message);
      }
    };
    handleGetSupplierInfo()
  },[formData.supplierName])

  useEffect(() => {
    if (supplierData) {
        setFormData((prev) => ({
            ...prev,
            supplierId:supplierData?.supplierId,
            supplierName: supplierData?.supplierName,
            supplierPhoneNumber: supplierData?.phoneNumber,
        }));
    }
  }, [supplierData]);

  const handlePostPurchaseData = (id, isEdit) => {
    if(isEdit){
      updateData(id, formData)
    }else{
      postData(formData);
    }
    handleBackToPurchase()
  };

  const handleSavePurchase = (e, id, isEdit) => {
    if (!isLoading) {
      e.preventDefault();
      handleSubmit(e, NewPurchaseField, () => handlePostPurchaseData(id, isEdit));
    }
  };

  const getOrderId = async()=>{
    const response = await fetch.get("get-order-id")
    return response.data.orderId
  }

  const handleBackToPurchase = () => {
    navigate("/admin/pharmacy/purchase");
    handleReset();
  };

  const NewPurchaseField = [

    [
        {
            label:"Supplier ID",
            name:"supplierId",
            type:"text"
        },

        {
            label:"Supplier Name",
            name:"supplierName",
            type:"searchDropdown",
            options:supplierNameList
        },

        {
            label:"Supplier Phone Number",
            name:"supplierPhoneNumber",
            type:"text"
        },

    ],
    [
        {
            label:"Invoice Number",
            name:"invoiceNumber",
            type:"text"
        },

        {
            label:"Purchase Date",
            name:"purchaseDate",
            type:"date",
        },

        {
            label:"Delivery Date",
            name:"deliveryDate",
            type:"date"
        }
    ]
  ]

  const stockFormField = [
    [{ label: "Product Code", name: "productCode", type: "text" }],
    [{ label: "Product Name", name: "productName", type: "text" }],
    // [{ label: "Generic Name", name: "genericName", type: "searchDropdown", options: }],
    [{ label: "HSN Code", name: "hsnCode", type: "text" }],
    [
      {
        label: "Category",
        name: "category",
        type: "select",
        options: ["Tablet", "Syrup", "Injection"],
      },
    ],
    [{ label: "Pack", name: "pack", type: "text" }],
    [{ label: "Low Stock", name: "lowStock", type: "number" }],
    [{ label: "Gst %", name: "gst", type: "number" },],
    [{
      label: "Expire Alert",
      name:"expireAlert",
      options: ["months", "weeks", "days"],
      inputName: "count",
      inputType:"number",
      dropdownName: "duration",
      type: "inputdropdown",
      align:"right"
    },]
  ];

  return {
    handleBackToPurchase,
    handleSavePurchase,
    NewPurchaseField,
    supplierData,
    getOrderId,
  };
};
