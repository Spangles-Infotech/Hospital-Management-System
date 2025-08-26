import React from 'react'
import { FormLayout } from '../common/FormLayout'
import { useForm } from '../../context/FormContext'
import { useModal } from '../../context/ModalContext'
import { IconCard } from '../common/IconCard'
import { usePostData } from '../../hooks/usePostData'
import { useUpdateData } from '../../hooks/useUpdateData'
import { usePatch } from '../../hooks/usePatch'
import { useGetData } from '../../hooks/useGetData'
import { useDeleteData } from '../../hooks/useDeleteData'
import { fetch } from '../../api/fetch'; 

export const FormModal = ({title, formField, data, isEdit, name, refetch, label, isPatch=false, getRoute}) => {
  const [tags, setTags] = React.useState([]);
  const { deleteData } = useDeleteData("/delete-tag");
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

  const fetchTags = async () => {
    let tagType = '';
    switch (title) {
        case "Add Category":
            tagType = 'medicineCategory';
            break;
        case "Add Strength":
            tagType = 'strength';
            break;
        case "Add unit":
            tagType = 'unit';
            break;
    }

    if (tagType) {
      const response = await fetch.get(`/get-tags?tag=${tagType}`);
      console.log(response.data.data,"response")
      setTags(response.data.data);
    }
  };

  React.useEffect(() => {
    fetchTags();
  }, [title, refetch]);

  const handleDeleteTag = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this tag?");
    if (confirmDelete) {
      const status = await deleteData(id);
      if (status === 200) {
        fetchTags(); // Refresh tags after deletion
      } else {
        alert("Failed to delete tag.");
      }
    }
  };

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

  // console.log("FormModal formData:", formData);
  // console.log("FormModal nextPatientId:", nextPatientId);
  // console.log("FormModal nextStaffId:", nextStaffId);

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
    console.log("Submitting formData:", formData);
    const response = isPatch ? await patchData(formData) : isEdit ? await updateData(formData) : await postData(formData);
    if ([200, 201].includes(response)) {
      if(refetch)refetch();
      closeModal();
      if (!notToReset.includes(title)){ 
        handleReset()
      }else{
        setFormData((prev)=>({...prev, [formField[0]?.name]:""}))
        fetchTags(); // Refresh tags after adding a new one
      }
    }
  };

  return (
    <div className='flex flex-col gap-[20px]  min-w-[600px]'>
        <p className='text-[20px] font-[500]'>{title}</p>
        {data && data.length > 0 && <IconCard />}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <div key={tag} className="flex items-center bg-gray-200 px-3 py-1 rounded-full text-sm">
                {tag}
                <button
                  onClick={() => handleDeleteTag(tag)}
                  className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        )}
        <div className='flex flex-col gap-[10px]'>
            <FormLayout data={formField} handleFieldChange={handleFieldChange} />
        </div>
        <div className="flex gap-7 items-center justify-end p-5">
          <p onClick={() => { handleReset(); closeModal(); }}  className="text-red-600 cursor-pointer text-lg w-[150px]"> Discard </p>
          <button onClick={(e)=>handleSubmit(e, formField, handleSubmitForm)} className="w-[150px] bg-[#1F9CC6] p-2 text-white rounded-lg hover:bg-[#1F9CC6] transition text-lg" > Save </button>
        </div>
    </div>
  )
}
