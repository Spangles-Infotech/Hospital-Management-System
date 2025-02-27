import React, { useEffect, useState } from "react";
import { fetch } from "../api/fetch";
import { usePostData } from "./usePostData";
import { useForm } from "../context/FormContext";
import { NewPurchaseField } from "../utils/variable/purchase";
import { useNavigate } from "react-router-dom";
import { useUpdateData } from "./useUpdateData";

export const usePurchase = () => {
  const navigate = useNavigate();
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

  return {
    handleBackToPurchase,
    handleSavePurchase,
    supplierData,
    getOrderId,
  };
};
