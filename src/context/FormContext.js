import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { getDateFromISO } from "../utils/functions/function";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [medicineQuery, setMedicineQuery] = useState([]);
  const [currentMedicalIndex, setCurrentMedicalIndex] = useState(0);
  const [batchNumber, setBatchNumber] = useState([]);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData, [name]: type === "checkbox" ? checked : value };
      if (name === "isRoundOff") {
        updatePaymentDetails(updatedFormData);
      }
      return updatedFormData;
    });
    setErrors((prevErr) => {
      const newErrors = { ...prevErr };
      delete newErrors[name];
      return newErrors;
    });
  };


  const validateErrors = (fields) => {
    let errors = {};

    fields.forEach((item) => {
      if (Array.isArray(item)) {
        item.forEach((ite) => {
          if (Array.isArray(ite)) {
            ite.map((it) => {
              if (it.type !== "" && !formData[it.name || it.inputName]) {
                errors[it.name || it.inputName] = `${it.label} is Required`;
              }
            });
          } else if (ite.type !== "" && !formData[ite.name || ite.inputName]) {
            errors[ite?.name || ite?.inputName] = `${ite?.label} is Required`;
          }
        });
      } else {
        if (item.type !== "" && !formData[item.name]) {
          errors[item.name || item.inputName] = `${item.label} is Required`;
        }
      }
    });

    return errors;
  };

  const handleReset = () => {
    setFormData({});
    setErrors({});
  };

  const handleTimingChange = (e, label, index) => {
    const { name, value } = e.target;
    setCurrentMedicalIndex(index);
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData };
      if (!updatedFormData[label]) {
        updatedFormData[label] = [];
      }
      if (!updatedFormData[label][index]) {
        updatedFormData[label][index] = {};
      }
      updatedFormData[label][index][name] = value;
      // Automatically update amount when GST is entered
      if (name === "gst" && updatedFormData[label][index]["price"]) {
        const price = Number(updatedFormData[label][index]["price"]);
        const gst = Number(value);
        const amount = price + (price * (gst / 100));
  
        updatedFormData[label][index]["amount"] = amount.toFixed(2);
      }
      // Automatically update amount when Price is entered
      if (name === "price" && updatedFormData[label][index]["gst"]) {
        const price = Number(value);
        const gst = Number(updatedFormData[label][index]["gst"]);
        const amount = price + (price * (gst / 100));
  
        updatedFormData[label][index]["amount"] = amount.toFixed(2);
      }
      // If GST or Price changes, recalculate payment details
      if (name === "gst" || name === "price") {
        updatePaymentDetails(updatedFormData);
      }
      return updatedFormData;
    });
  
    if (name === "medicineName" || name === "batchNo") {
      setMedicineQuery((prevQuery) => {
        const updatedMedicalQuery = [...prevQuery]
        updatedMedicalQuery[index] = {... updatedMedicalQuery[index], [name]:value};
        return updatedMedicalQuery;
      });
    }
  };
  
  // condition to add netAmount , discount, gross amount, total Quantity
  const updatePaymentDetails = (updatedFormData) => {
    if (!updatedFormData["medicines"]) return;

    let netAmount = 0;
    let totalGstAmount = 0;
    let grossAmount = 0;
    let totalQuantity = updatedFormData["medicines"]?.length

    updatedFormData["medicines"].forEach((medicine) => {
      if (medicine.price && medicine.gst) {
        const medPrice = Number(medicine.price);
        const medGst = Number(medicine.gst);
        const gstValue = medPrice * (medGst / 100);

        grossAmount += medPrice;
        totalGstAmount += gstValue;
        netAmount += medPrice + gstValue;
      }
    });

    let finalNetAmount = Number(netAmount.toFixed(2));
    let roundOff = 0;

    if (updatedFormData["isRoundOff"]) {
      roundOff = Number((finalNetAmount % 1).toFixed(2));
      finalNetAmount = Math.round(finalNetAmount);
    } else {
      finalNetAmount = Number(finalNetAmount.toFixed(2));
      roundOff =  Number((finalNetAmount % 1).toFixed(2));
    }

    const finalAmount = finalNetAmount + roundOff;

    setFormData((prevFormData) => ({
      ...prevFormData,
      roundOff,
      totalQuantity, 
      netAmount: finalNetAmount,
      totalGstAmount: Number(totalGstAmount.toFixed(2)),
      grossAmount: Number(grossAmount.toFixed(2)),
      finalAmount: Number(finalAmount.toFixed(2)),
    }));
  };

  const handleSubmit = (e, fields, func) => {
    e.preventDefault();
    const errors = validateErrors(fields);
    if (Object.entries(errors).length === 0) {
      func();
    } else {
      setErrors(errors);
    }
  };

  const updateMedicalDetail = (title, medicineData) => {
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData };
      const updatedRow = [...(updatedFormData[title] || [])];
      updatedRow[currentMedicalIndex] = {
        ...updatedRow[currentMedicalIndex],
        expDate: getDateFromISO(medicineData?.expiryDate),
        hsnCode: medicineData?.hsnCode,
        medicineCategory: medicineData?.category,
      };
      updatedFormData[title] = updatedRow;
      return updatedFormData;
    });
  };
  
  const handleSetBatchData = (medicineData)=>{
    setBatchNumber((prev)=>{
      const updatedBatchNumber = [...prev];
      updatedBatchNumber[currentMedicalIndex] = medicineData;
        return updatedBatchNumber;
      })
  }
  

  return (
    <FormContext.Provider
      value={{
        formData,
        currentMedicalIndex,
        errors,
        batchNumber,
        setFormData,
        setBatchNumber,
        handleChange,
        handleSubmit,
        handleReset,
        medicineQuery,
        updateMedicalDetail,
        handleTimingChange,
        handleSetBatchData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
