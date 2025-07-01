import React from 'react'
import { FormLayout } from '../common/FormLayout'
import { useForm } from '../../context/FormContext'
import { useModal } from '../../context/ModalContext'
import { IconCard } from '../common/IconCard'
import { usePostData } from '../../hooks/usePostData'
import { useUpdateData } from '../../hooks/useUpdateData'
import { usePatch } from '../../hooks/usePatch'
import { useGetData } from '../../hooks/useGetData'

export const FormModal = ({title, formField, data, isEdit, name, refetch, label, isPatch=false, getRoute}) => {
  const {closeModal} = useModal()
  const {postData} = usePostData(name)
  const {patchData} = usePatch(name)
  const {updateData} = useUpdateData(name)
  const {handleReset, formData, handleSubmit, setFormData, handleTableFormChange} = useForm()
  const notToReset = ["Add Category", "Add unit", "Add GST %", "Add Strength"]
  const {data: fetchedData} = useGetData(getRoute, isEdit)
  const {data: nextDoctorId} = useGetData("/get-next-doctor-id", !isEdit && name === "/add-doctor")
  const {data: nextPatientId} = useGetData("/get-next-patient-id", !isEdit && name === "/add-patient")
  const {data: nextStaffId} = useGetData("/get-next-staff-id", !isEdit && name === "/add-staff")
  console.log(nextStaffId?.nextStaffId,"nextStaffId full object")

  React.useEffect(() => {
    if (!isEdit && name === "/add-doctor" && nextDoctorId) {
      setFormData((prev) => ({ ...prev, id: nextDoctorId.doctorId }));
    } else if (!isEdit && name === "/add-patient" && nextPatientId) {
      setFormData((prev) => ({ ...prev, patientId: nextPatientId.patientId }));
    } else if (!isEdit && name === "/add-staff" && nextStaffId) {
      console.log("Setting staff ID:", nextStaffId?.da);
      setFormData((prev) => ({ ...prev, id: nextStaffId?.nextStaffId }));
    }
  }, [isEdit, name, nextDoctorId, nextPatientId, nextStaffId, setFormData]);

  console.log("FormModal formData:", formData);
  console.log("FormModal nextPatientId:", nextPatientId);
  console.log("FormModal nextStaffId:", nextStaffId);

  React.useEffect(() => {
    if (isEdit && fetchedData) {
      setFormData(fetchedData);
    } else if (isEdit && data) {
      setFormData(data);
    }
  }, [isEdit, data, fetchedData, setFormData]);

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "dob") {
      const age = calculateAge(value);
      setFormData((prev) => ({
        ...prev,
        age: age.toString(),
      }));
    }
  };

  const handleSubmitForm = async () => {
    if (!formData) return;
    const response = isPatch ? await patchData(formData) : isEdit ? await updateData(formData) : await postData(formData);
    if ([200, 201].includes(response)) {
      if(refetch)refetch();
      closeModal();
      if (!notToReset.includes(title)){ 
        handleReset()
      }else{
        setFormData((prev)=>({...prev, [formField[0]?.name]:""}))
      }
    }
  };

  return (
    <div className='flex flex-col gap-[20px]  min-w-[600px]'>
        <p className='text-[20px] font-[500]'>{title}</p>
        {data.length > 0 && <IconCard />}
        <div className='flex flex-col gap-[10px]'>
            <FormLayout data={formField} handleFieldChange={handleFieldChange} />
        </div>
        <div className="flex gap-7 items-center justify-end p-5">
          <p onClick={() => { handleReset(); closeModal(); }}  className="text-red-600 cursor-pointer text-lg w-[150px]"> Discard </p>
          <button onClick={(e)=>handleSubmit(e, formField, handleSubmitForm)} className="w-[150px] bg-primary p-2 text-white rounded-lg hover:bg-primary transition text-lg" > Save </button>
        </div>
    </div>
  )
}
