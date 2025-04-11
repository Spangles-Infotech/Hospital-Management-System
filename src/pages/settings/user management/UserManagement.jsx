import React, { useEffect } from 'react'
import { TableHeader } from '../../../Component/common/Table/TableHeader'
import { Tab } from '../../../Component/common/Tab'
import { roleFields } from '../../../utils/variable/settings/usermanagement'
import { useForm } from '../../../context/FormContext'
import { useOthers } from '../../../hooks/useOthers'

const UserManagement = () => {

  const {formData, setFormData} = useForm()
  const {userButtonData, tabData, handleClickFullAccess, handleAccessDiscard, handleClickHead, handlePostAccess, handleClickAccess} = useOthers()

  useEffect(()=>{
    setFormData((prev)=>({...prev, role:tabData[0]}))
  },[])

  return (
    <section className='w-[80%] flex flex-col gap-[20px]'>
      <TableHeader title={"User Management"} isBlue={true} buttonData={userButtonData}  isSearch={false} />
      <Tab data={tabData} path={"/admin/settings/user-management"} />
      <div className='flex flex-col gap-[20px]'>
        <div className='flex gap-[30px] items-center'>
          <input 
            type="checkbox" 
            onChange={handleClickFullAccess} 
            className='cursor-pointer accent-primary size-[25px]  border-primary rounded-[5px]' 
            checked={roleFields.every(item => ( !item.children && formData["permission"]?.[item.name] ) || ( item.children && item?.children.every(child => formData?.["permission"]?.[item.name]?.[child.name]))) || false} 
          />
          <label className='text-[18px] font-poppins font-[500] text-primary'>Full Access</label>
        </div>
        {
          roleFields.map((item)=>(
            <div key={item.label} className='flex flex-col gap-[20px]'>
              <div className='flex gap-[30px] items-center'>
                <input 
                  type="checkbox" 
                  className='cursor-pointer accent-primary size-[25px]  border-primary rounded-[5px]' 
                  checked={item.children ? item.children.every((child)=> formData?.["permission"]?.[item.name]?.[child.name] === true) : formData?.["permission"]?.[item.name] || false} 
                  name={item.name} 
                  onChange={()=>handleClickHead(item.name)}
                />
                <span className='text-[18px] font-poppins font-[500] text-primary'>{item.label}</span>
              </div>
              <div className={`${!item?.children ? "hidden" : "flex flex-wrap gap-[30px]"}`}>
                {
                  item.children && item?.children.map((child)=>(
                    <div className='flex gap-[30px] items-center' key={child.name}>
                      <input 
                        type="checkbox" 
                        name={child.name} 
                        onChange={(e)=>handleClickAccess(e, item.name)} 
                        checked={formData?.["permission"]?.[item.name]?.[child.name] || false} 
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
      <div className="flex mt-7 gap-7 items-center justify-end">
            <p onClick={handleAccessDiscard} className="text-red-600 cursor-pointer text-lg" >
              Discard
            </p>
            <button type="submit" onClick={handlePostAccess} className="w-[15%] bg-primary p-2 text-white rounded-lg hover:bg-primary transition text-lg">
              Save
            </button>
          </div>
    </section>
  )
}

export default UserManagement