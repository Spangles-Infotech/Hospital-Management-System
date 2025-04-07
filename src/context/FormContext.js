import { createContext, useContext, useState } from "react";
import { fetch } from "../api/fetch";
import { getDateFromISO } from "../utils/functions/function";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const ITEM_PER_PAGE = 15
  const [formData, setFormData] = useState({});
  const [tableForm, setTableForm] = useState({})
  const [registerOp ,setRegisterOp] = useState({})
  const [errors, setErrors] = useState({});
  const [medicineQuery, setMedicineQuery] = useState([]);
  const [currentMedicalIndex, setCurrentMedicalIndex] = useState(0);
  const [selectedUnit, setSelectedUnit] = useState("bottle")
  const [activePage, setActivePage] = useState(1);
  const [historyData, setHistoryData] = useState([])
  const itemsToUpdatePayment = ["gst", "purchaseRate", "discount", "quantity", "free", "unit", "salePrice"]

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData, [name]: type === "checkbox" ? checked : value };
      if (name === "isRoundOff") {
        updatePaymentDetails(updatedFormData);
      }
      if(name === "unit"){
        setSelectedUnit(value)
      }
      handleAddTotalQuantity(updatedFormData)
      return updatedFormData;
    });
    setErrors((prevErr) => {
      const newErrors = { ...prevErr };
      delete newErrors[name];
      return newErrors;
    });
  };

  const handleAddToFormData = (title) => {
    setFormData((prev) => {
      const updatedFormData = { ...prev };
      
      const newEntry =
        title === "prescription"
          ? registerOp[title] && registerOp[title]?.medicineType === undefined
            ? { ...registerOp[title], medicineType: "TABLET" }
            : registerOp[title]
          : registerOp[title];
  
      updatedFormData[title] = [
        ...(Array.isArray(updatedFormData[title]) ? updatedFormData[title] : []),
        newEntry || {}
      ];
  
      return updatedFormData;
    });
  
    setRegisterOp((prev) => ({ ...prev, [title]: {} }));
  };
  
  

  const handleRegisterOpChange = (e, type)=>{
    const {name, value} = e.target
    setRegisterOp((prev)=>{
      const updatedRegisterOp = {...prev}
      updatedRegisterOp[type] = {...updatedRegisterOp[type] , [name]:value}
      return updatedRegisterOp
    })
  }

  const handleEditRegisterOP = (title, index) => {
    let removeItem = {}
    setFormData((prev) => {
      const updatedFormData = { ...prev };
      removeItem = updatedFormData[title]?.[index];
      updatedFormData[title] = updatedFormData[title]?.filter((_, i) => i !== index);
      return updatedFormData;
    });
    setRegisterOp((prev) => ({
      ...prev,
      [title]: removeItem, 
    }));
  };

  const handleDeleteRegisterOp = (title, index)=>{
    setFormData((prev) => {
      const updatedFormData = { ...prev };
      updatedFormData[title] = updatedFormData[title]?.filter((_, i) => i !== index);
      return updatedFormData;
    });
  }
  

  const handleRegiterOpCancel = ()=>{
    setRegisterOp({})
  }

  // func to handle the input and dropdown value
  const handleInputDropDownChange = (e, label)=>{
    const {name, value} = e.target
    setFormData((prevFormData) => {
      const updatedFormData = {...prevFormData}
      updatedFormData[label] = {...updatedFormData[label], [name]:value}
      return updatedFormData
    })
  }

  // func to add total quantity to stock form
  const handleAddTotalQuantity = (updatedFormData)=>{
    if(updatedFormData["stripPerBox"] && updatedFormData["tabletPerStrip"]){
      let totalBox = updatedFormData["totalBox"]
      let totalStrip = updatedFormData["stripPerBox"] * updatedFormData["tabletPerStrip"]
      let totalQuantity = totalBox !== undefined ? totalBox * totalStrip : totalStrip
      updatedFormData["totalQuantity"] = totalQuantity
    }
  }

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
    setErrors({});
    setActivePage(1)
    setFormData(()=>{});
    setTableForm({})
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
      // automatically update the total quantity
      if(name === "quantity" && updatedFormData[label][index]["unit"] && updatedFormData[label][index]["free"] || name === "unit" && updatedFormData[label][index]["quantity"] && updatedFormData[label][index]["free"] || name === "free" && updatedFormData[label][index]["quantity"] && updatedFormData[label][index]["unit"]   ){
        const totalQuantity = ( Number(updatedFormData[label][index]["quantity"]) + Number(updatedFormData[label][index]["free"]) ) * updatedFormData[label][index]["unit"] 
        updatedFormData[label][index]["availableQuantity"] = totalQuantity
      }
      if(name === "amount"){
        updatePaymentDetails(updatedFormData, index, "bills");
      }
      // If GST or Price changes, recalculate payment details
      if (itemsToUpdatePayment.includes(name)) {
        updatePaymentDetails(updatedFormData, index);
      }
      return updatedFormData;
    });
    if (name === "medicineName" || name === "batchNumber") {
      setMedicineQuery((prevQuery) => {
        const updatedMedicalQuery = [...prevQuery]
        updatedMedicalQuery[index] = {... updatedMedicalQuery[index], [name]:value};
        return updatedMedicalQuery;
      });
    }
  };

  // condition to add netAmount , discount, gross amount, total Quantity
  const updatePaymentDetails = (updatedFormData, index, cat) => {
    
    let netAmount = 0;
    let totalGstAmount = 0;
    let grossAmount = 0;
    let totalMedicineAmount = 0;
    let totalDiscountAmount = 0;
    let totalBillAmount = 0;
    let totalBillQuantity = updatedFormData["bills"]?.length || 0;
    let totalQuantity = updatedFormData["medicines"]?.length || 0;
    
    if (cat === "bills") {
      updatedFormData["bills"]?.forEach((bill) => {
        const billAmount = Number(bill.amount) || 0;
        totalBillAmount += billAmount;
      });
    } else {
      updatedFormData["medicines"].forEach((medicine, medIndex) => {
        if (medicine.gst && medicine.discount && medicine.quantity) {
          const medPrice = Number(medicine.purchaseRate);
          const medGst = Number(medicine.gst);
          const medDiscount = Number(medicine.discount);
          const quantity = Number(medicine.quantity);
          const sellingPrice = Number(medicine.salePrice);
          const totalMedPrice = sellingPrice ? sellingPrice * quantity : medPrice * quantity;

          // Calculate the discount amount for this medicine
          const discountAmount = totalMedPrice * (medDiscount / 100);
          totalDiscountAmount += discountAmount;
          const calculatedDiscountPrice = totalMedPrice - discountAmount;
          const gstValue = calculatedDiscountPrice * (medGst / 100);
          const totalMedicinePrice = calculatedDiscountPrice + gstValue;
          const purchasePrice = medicine.purchaseRate / medicine.unit;
          const salesPrice = medicine.mrp / medicine.unit;

          // Updating the specific medicine amount at the given index
          if (medIndex === index) {
            updatedFormData["medicines"][index]["amount"] = Number(totalMedicinePrice.toFixed(2));
            updatedFormData["medicines"][index]["purchasePrice"] = Number(purchasePrice.toFixed(2));
            updatedFormData["medicines"][index]["salesPrice"] = Number(salesPrice.toFixed(2));
          }

          grossAmount += calculatedDiscountPrice;
          totalMedicineAmount += Number(totalMedicinePrice.toFixed(2));
          totalGstAmount += gstValue;
          netAmount += totalMedicinePrice;
        }
      });
    }

    let finalNetAmount = Number(netAmount.toFixed(2));
    let roundOff = 0;
    if (updatedFormData["isRoundOff"]) {
      roundOff = Number((finalNetAmount % 1).toFixed(2));
      finalNetAmount = Math.round(finalNetAmount);
    } else {
      finalNetAmount = Number(finalNetAmount.toFixed(2));
      roundOff = Number((finalNetAmount % 1).toFixed(2));
    }

    let finalAmount = finalNetAmount + roundOff;

    if(totalBillAmount > 0){
      finalNetAmount = Number(updatedFormData["netAmount"])
      grossAmount = Number(updatedFormData["grossAmount"])
      totalMedicineAmount = Number(updatedFormData["totalMedicineAmount"])
      totalDiscountAmount = Number(updatedFormData["totalDiscountAmount"])
      totalGstAmount = Number(updatedFormData["totalGstAmount"])
      finalNetAmount += totalBillAmount;
      grossAmount += totalBillAmount;
    }else{
      totalBillAmount =  Number(updatedFormData["totalBillAmount"])
      finalNetAmount += totalBillAmount;
      grossAmount += totalBillAmount;
    }


    setFormData((prevFormData) => ({
      ...prevFormData,
      medicines: updatedFormData["medicines"], 
      roundOff,
      totalQuantity, 
      totalBillAmount: totalBillAmount === 0 ? Number(updatedFormData["totalBillAmount"]) : totalBillAmount,
      totalBillQuantity,
      totalMedicineAmount,
      netAmount: finalNetAmount,
      totalDiscountAmount: Number(totalDiscountAmount.toFixed(2)),
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
        hsnCode: medicineData?.hsnCode,
        medicineCategory: medicineData?.category,
        gst:medicineData?.gst,
        packValue:medicineData?.pack?.value,
        unit:medicineData?.unit,
        discount:medicineData?.discount,
        totalQuantity:medicineData?.totalQuantity,
        salePrice:medicineData?.salePrice,
        expiryDate: getDateFromISO(medicineData?.expiryDate)
      };
      updatedFormData[title] = updatedRow;
      return updatedFormData;
    });
  };

  const getHistoryWithMedicineName = async()=>{
    try {
      const response = await fetch.get(`/get-medicine-purchase-history/${formData?.medicines?.[currentMedicalIndex]?.medicineName}`)
      setHistoryData(response.data.data)
    } catch (error) {
      console.log("error", error.message)
    }
  }

  return (
    <FormContext.Provider
      value={{handleAddToFormData, handleRegisterOpChange, handleDeleteRegisterOp, registerOp, handleRegiterOpCancel, errors, historyData, getHistoryWithMedicineName, formData, activePage, selectedUnit, ITEM_PER_PAGE, medicineQuery, currentMedicalIndex, handleReset, setFormData, handleChange, handleSubmit, setActivePage, handleTimingChange, updateMedicalDetail, handleInputDropDownChange, }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
