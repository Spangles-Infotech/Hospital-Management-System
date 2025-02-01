import React, { useState } from 'react'
import { TableHeader } from '../../../Component/common/Table/TableHeader'
import { ListIcon } from '../../../icons/ListIcon'
import { useNavigate } from 'react-router-dom'
import { Tab } from '../../../Component/common/Tab'

const UserManagement = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({})

  const handleClickFullAccess = ()=>{
    roleFields.map(item => {
      handleClickHead(item.label)
    })
  }

  const handleClickHead = (label)=>{
    const filteredField = roleFields.filter((item)=> item.label === label) 
    filteredField.map((item)=> {
      if(item.children){
        item?.children.map((childItem)=> {
          setFormData((prev)=> ({...prev, [childItem.name]:true}))
        })
      }else{
        setFormData((prev)=> ({...prev, [item.name]:true}))
      }
    })
  }

  const handleClickAccess = (e)=>{
    const {name} = e.target
    setFormData({...formData, [name]: true})
  }

  const buttonData = [
    {
      name:"New Role",
      onClick : ()=>{console.log("clicking")}
    },
    {
      name: "User List",
      onClick : ()=>{navigate("/admin/settings/user-list")},
      icon: ListIcon
    }
  ]

  const roleFields = [
    {
      label:"Registered OP",
      name:"isRegisteredOp",
      children:[
        {
          label:"New Appointments",
          name:"isNewAppointments",
        },
        {
          label:"Vitals Entry",
          name:"isVitalsEntry",
        },
        {
          label:"Reschedule",
          name:"isReschedule",
        },
        {
          label:"Patient Consultation",
          name:"isPatientConsultation",
        }
      ]
    }
  ]

  const tabData = ["Admin", "Doctor", "Nurse"]
  return (
    <section className='w-[80%] flex flex-col gap-[20px]'>
      <TableHeader title={"User Management"} isBlue={true} buttonData={buttonData}  isSearch={false} />
      <Tab data={tabData} path={"/admin/settings/user-management"} />
      <div className='flex flex-col gap-[20px]'>
        <div className='flex gap-[15px] items-center'>
          <input type="checkbox" className='cursor-pointer accent-primary size-[25px]  border-primary rounded-[5px]' onChange={handleClickFullAccess} />
          <label className='text-[18px] font-poppins font-[500] text-primary'>Full Access</label>
        </div>
        {
          roleFields.map((item)=>(
            <div key={item.label} className='flex flex-col gap-[20px]'>
              <div className='flex gap-[15px] items-center'>
                <input type="checkbox" className='cursor-pointer accent-primary size-[25px]  border-primary rounded-[5px]' checked={formData[item.name]} name={item.name} />
                <label className='text-[18px] font-poppins font-[500] text-primary'>{item.label}</label>
              </div>
              <div className={`${!item.children ? "hidden" : "flex flex-wrap gap-[15px]"}`}>
                {
                  item.children.map((child)=>(
                    <div className='flex gap-[15px] items-center'>
                      <input type="checkbox" className='cursor-pointer accent-primary size-[25px]  border-primary rounded-[5px]' checked={formData[child.name]} name={child.name} onChange={handleClickAccess} />
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