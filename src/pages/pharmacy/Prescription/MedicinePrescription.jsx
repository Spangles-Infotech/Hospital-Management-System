import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Delete from "../../../assests/Delete.png";
import { Form } from "../../../Component/common/Form";
import { useForm } from "../../../context/FormContext";

const MedicinePrescription = ({tableHeader, fields, title, data, isEdit=false}) => {
  const {formData, handleTimingChange, errors, setFormData} = useForm()
  
  const [row, setRow] = useState([])

  const handleAddRow = ()=>{
    setRow([...row, fields])
  }

  const handleDeleteRow = (index)=>{
    const updatedRows = row.filter((_, i) => i !== index);
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData };
      updatedFormData[title] = updatedFormData?.[title].filter((_,i)=> i!==index)
      return updatedFormData;
    });
    setRow(updatedRows)
  }

  useEffect(()=>{
    if(isEdit){
      setFormData((prevFormData) => ({
          ...prevFormData,
          [title]: data,
        }));
        setRow(data.map(() => fields));
    }else{
      setRow([fields])
    }
  },[fields, isEdit])



  return (
    <section className="mt-10 w-full">
    <div className="border-2 border-primary rounded-[15px] overflow-hidden text-stone-500 bg-white w-full">
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr>
            {tableHeader?.map((item, i) => (
              <th
                className={`p-2 text-center border-b-2 border-primary ${tableHeader.length - 1 === i  ? "" : "border-r "}`}
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
              <tr className="border-t items-center border-b border-primary text-stone-600" key={index}>
                {items?.map((item, i) => (
                  item.name === "quantity" ? 
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
                  :
                  <td
                    className={`p-2  ${items.length - 1 === i  ? "flex" : "border-r border-primary"}`}
                    key={item.name}
                  >
                    <div className={`${items.length - 1 === i  ? "w-[80%]" : "w-full"} `}>
                      <Form
                        item={item}
                        formData={formData?.[title]?.[index]}
                        handleChange={(e)=>handleTimingChange(e, title, index)}
                        errors={errors}
                        isBorder={false}
                      />
                    </div>
                    <div className="w-[20%] flex items-center justify-center">
                        {
                          items.length - 1 === i  &&
                          <img src={Delete} alt="delete-icon" className="size-[30px] cursor-pointer  object-contain" onClick={()=>handleDeleteRow(index)} />
                        }
                    </div>
                  </td>
                ))}
              </tr>
            ))
          }
          <tr>
            <td colSpan={tableHeader.length} className="text-start p-4">
              <button className="px-6 py-2 border-2 border-primary text-primary rounded-md" onClick={handleAddRow}>
                Add Row
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  
  );
};

export default MedicinePrescription;
