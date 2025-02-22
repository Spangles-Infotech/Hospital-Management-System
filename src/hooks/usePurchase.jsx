import React, { useState } from "react";
import { fetch } from "../api/fetch";
import { usePostData } from "./usePostData";
import { useForm } from "../context/FormContext";
import { NewPurchaseField } from "../utils/variable/purchase";
import { useNavigate } from "react-router-dom";
import { useUpdateData } from "./useUpdateData";

export const usePurchase = () => {
  const navigate = useNavigate();
  const { formData, handleReset, handleSubmit } = useForm();
  const [supplierData, setSupplierData] = useState({});
  const { message, isLoading, error, postData } = usePostData(`/add-purchase`);
  const {message:updateMessage, updateData } = useUpdateData("/update-purchase")

  const handleGetSupplierInfo = async (supplierId) => {
    try {
      const response = await fetch.get(
        `get-supplier-info?supplierId=${supplierId}`
      );
      setSupplierData(response.data.data);
    } catch (error) {
      console.log("error at fetcching supplier data", error.message);
    }
  };

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

  return {
    handleGetSupplierInfo,
    handleBackToPurchase,
    handleSavePurchase,
    supplierData,
    getOrderId,
  };
};
