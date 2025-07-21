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
        formData?.supplierName ? `get-supplier-info?supplierName=${formData.supplierName}` : null
        );
        setSupplierData(response.data.data);
      } catch (error) {
      }
    };
    handleGetSupplierInfo()
  },[formData?.supplierName])

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
    const response = await fetch.get("/get-order-id")
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
        },],[

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
                                {
            label:"Payment",
            name:"paymentStatus",
            options:["paid","not paid"],
            type:"select"
        },


    ],
    [
        {
            label:"Invoice Number",
            name:"invoiceNumber",
            type:"text"
        },

        {
            label:"Invoice Date",
            name:"purchaseDate",
            type:"date",
        },

        {
            label:"Delivery Date",
            name:"deliveryDate",
            type:"date"
        }
    ],

    
  ]



  const updatePurchasePaymentStatus = async (id, newStatus) => {
    await updateData(id, { paymentStatus: newStatus });
  };

  return {
    handleBackToPurchase,
    handleSavePurchase,
    NewPurchaseField,
    supplierData,
    getOrderId,
    updatePurchasePaymentStatus,
  };
};
