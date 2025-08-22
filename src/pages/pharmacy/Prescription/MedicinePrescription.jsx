import React, { useEffect, useState } from "react";
import Delete from "../../../assests/Delete.png";
import { Form } from "../../../Component/common/Form";
import { useForm } from "../../../context/FormContext";
import { useFetchData } from "../../../hooks/useFetchData";

const MedicinePrescription = ({tableHeader, fields, title, count, isEdit=false, isPres=false}) => {

  const {formData, handleTimingChange, errors, setFormData, medicineQuery, currentMedicalIndex, updateMedicalDetail} = useForm()
  const {data:medicineData} = useFetchData( "/get-medicine-detail",`medicineName=${medicineQuery[currentMedicalIndex]?.medicineName || ""}&batchNumber=${ isPres ? medicineQuery[currentMedicalIndex]?.batchNumber ?? ""  : ""}`)

  const [row, setRow] = useState([])

  const handleAddRow = ()=>{
    setRow([...row, fields])
  }

  const handleDeleteRow = (index)=>{
    const updatedRows = row.filter((_, i) => i !== index);
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData };
      updatedFormData[title] = updatedFormData[title] ? updatedFormData[title].filter((_,i)=> i!==index) : [];
      return updatedFormData;
    });
    setRow(updatedRows)
  }

  useEffect(() => {
    if (isEdit && count) {
      for(let i = 1; i <= count; i++){
        setRow((prev)=>([...prev, fields]))
      }
    }
  }, [count, isEdit]);
  
  useEffect(()=>{
    if(medicineQuery[currentMedicalIndex]?.medicineName){
      updateMedicalDetail(title, medicineData)
    }
  },[medicineData, medicineQuery])

  const items = ["MEDICINE NAME", "HSN", "MEDICINE CATEGORY", "BATCH NO.", "EXP DATE"]

  return (
    <section className="mt-10 w-full">
    <div className="border-2 border-[#1F9CC6] rounded-[15px] overflow-hidden text-stone-500 bg-white w-full">
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr>
            {tableHeader?.map((item, i) => (
              <th
                className={`p-2 text-center border-b-2 border-[#1F9CC6] 
                  ${items.includes(item) ? "w-[90px]" : item === "AMOUNT" ? "w-[70px]" : "w-[50px]"} 
                  ${tableHeader.length - 1 === i ? "" : "border-r "} 
                  overflow-hidden text-ellipsis whitespace-nowrap`}
                key={item}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            row?.map((items, index) => (
              <tr className={`border-t items-center border-b 1F9CC6 text-stone-600`} key={index}>
                {items?.map((item, i) => (
                  <td
                   className={`p-2 ${items.length - 1 === i ? "flex" : "border-r border-[#1F9CC6]"}`}
                    key={item.name}
                  >
                    {
                      item.name === "sino" ?
                          <p>{index + 1}</p>
                       : <div className={`${items.length - 1 === i  ? "w-[80%]" : item?.type === "number" ? "min-w-[50px]"  : "min-w-[90px]"}`}>
                          <Form
                            item={item}
                            formData={formData?.[title]?.[index]}
                            handleChange={(e)=>handleTimingChange(e, title, index)}
                            errors={errors}
                            isBorder={false}
                          />
                        </div>
                    }
                    <div className="w-[20%] flex items-center justify-center">
                        {
                          items?.length - 1 === i &&
                          <img src={Delete} alt="delete-icon" className="size-[30px] cursor-pointer  object-contain" onClick={()=>handleDeleteRow(index)} />
                        }
                    </div>
                  </td>
                ))}
              </tr>
            ))
          }
          <tr>
            <td colSpan={tableHeader.length - 2} className="text-start p-4">
              <button className="px-6 py-2 border-2 border-[#1F9CC6] text-[#1F9CC6] rounded-md" onClick={handleAddRow}>
                Add Row
              </button>
            </td>
            <td>
              <div className="flex gap-[20px] items-center">
                <p>Total</p>
                <p>{title === "bills" ? formData?.["totalBillQuantity"] :formData?.["totalQuantity"]}</p>
              </div>
            </td>
            <td className="border-l border-primary text-center align-middle">{ title === "bills" ? formData?.["totalBillAmount"] :formData?.["totalMedicineAmount"]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  
  );
};

export default MedicinePrescription;

{/* item.name === "quantity" ? 
<td className={`border-r border-primary flex w-auto gap-[5px] p-2`} key={`${index}-quantity`}>
  <div className="w-[46%] h-full">
    <Form
      item={{ label: "", name:"quantity", "type": "text"}}
      formData={formData?.[title]?.[index]}
      handleChange={(e)=>handleTimingChange(e, title, index)}
      errors={errors}
      isBorder={false}
    />
  </div>
  <div className="h-[55px] w-[1%] bg-primary"></div>
  <div className="w-[46%]">
    <Form
      item={{ label: "", name:"availableQuantity", "type": "text"}}
      formData={formData?.[title]?.[index]}
      handleChange={(e)=>handleTimingChange(e, title, index)}
      errors={errors}
      isBorder={false}
    />
  </div>
</td>
: */}