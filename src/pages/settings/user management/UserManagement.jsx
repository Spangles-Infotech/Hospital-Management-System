import React, { useState } from 'react'
import { TableHeader } from '../../../Component/common/Table/TableHeader'
import { ListIcon } from '../../../icons/ListIcon'
import { useNavigate } from 'react-router-dom'
import { Tab } from '../../../Component/common/Tab'
import { roleFields, userFormField } from '../../../utils/variable/settings/usermanagement'
import { useModal } from '../../../context/ModalContext'
import { FormModal } from '../../../Component/modalContents/FormModal'
import { editFormField } from '../../../utils/variable/expense'

const UserManagement = () => {

  const navigate = useNavigate()
  const {openModal} = useModal()
  const [formData, setFormData] = useState({})

  const handleClickFullAccess = ()=>{
    roleFields.forEach((field)=>{
        handleClickHead(field.name)
    })
  }

  const handleClickHead = (label)=>{
    const particularField = roleFields.find((item)=> item.name === label) 
    if(particularField?.children){
      particularField.children.map((item)=>{
        setFormData((prev)=> ({...prev, [label]:{...prev?.[label], [item.name]: true }}))
      })
    }else{
      setFormData((prev)=> ({...prev, [particularField.name]: formData[particularField.name] ? !formData[particularField.name]: true}))
    }
  }

  const handleClickAccess = (e, label)=>{
    const {name} = e.target
    setFormData((prev)=>({...prev, [label]:{...prev?.[label], [name]:formData?.[label]?.[name] ? !formData?.[label]?.[name] : true }}))
  }

  const buttonData = [
    {
      name:"New Role",
      onClick : ()=>{openModal(FormModal, {title:"New Role", formField:userFormField})}
    },
    {
      name: "User List",
      onClick : ()=>{navigate("/admin/settings/user-management/user-list")},
      icon: ListIcon
    }
  ]

  const tabData = ["Admin", "Doctor", "Nurse"]
  return (
    <section className='w-[80%] flex flex-col gap-[20px]'>
      <TableHeader title={"User Management"} isBlue={true} buttonData={buttonData}  isSearch={false} />
      <Tab data={tabData} path={"/admin/settings/user-management"} />
      <div className='flex flex-col gap-[20px]'>
        <div className='flex gap-[15px] items-center'>
          <input 
            type="checkbox" 
            onChange={handleClickFullAccess} 
            className='cursor-pointer accent-primary size-[25px]  border-primary rounded-[5px]' 
            checked={roleFields.every(item => ( !item.children && formData[item.name] ) || ( item.children && item?.children.every(child => formData?.[item.name]?.[child.name]))) || false} 
          />
          <label className='text-[18px] font-poppins font-[500] text-primary'>Full Access</label>
        </div>
        {
          roleFields.map((item)=>(
            <div key={item.label} className='flex flex-col gap-[20px]'>
              <div className='flex gap-[15px] items-center'>
                <input 
                  type="checkbox" 
                  className='cursor-pointer accent-primary size-[25px]  border-primary rounded-[5px]' 
                  checked={item.children ? item.children.every((child)=> formData?.[item.name]?.[child.name] === true) : formData?.[item.name] || false} 
                  name={item.name} 
                  onChange={()=>handleClickHead(item.name)}
                />
                <span className='text-[18px] font-poppins font-[500] text-primary'>{item.label}</span>
              </div>
              <div className={`${!item?.children ? "hidden" : "flex flex-wrap gap-[15px]"}`}>
                {
                  item.children && item?.children.map((child)=>(
                    <div className='flex gap-[15px] items-center' key={child.name}>
                      <input 
                        type="checkbox" 
                        name={child.name} 
                        onChange={(e)=>handleClickAccess(e, item.name)} 
                        checked={formData?.[item.name]?.[child.name] || false} 
                        className='cursor-pointer accent-primary size-[25px]  border-primary rounded-[5px]' 
                      />
                      <label className='text-[18px] font-poppins font-[400] text-customBlack'>{child.label}</label>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default UserManagement