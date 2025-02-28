import React from 'react'
import { TableHeader } from '../../../Component/common/Table/TableHeader'
import { Table } from '../../../Component/common/Table/Table'
import { userListData, userListHeader } from '../../../utils/variable/settings/usermanagement'
import { useNavigate } from 'react-router-dom'

const UserList = () => {
  
  const navigate = useNavigate()
  const btnData = [
    {
      name:"New User",
      onClick:()=>{navigate("/admin/settings/user-management/new-user")}
    }
  ]
  const actionData = [
    {
      name:"eye",
      onClick:()=>{("clicking")}
    },
    {
      name:"editpen",
      onClick:()=>{("clicking")}
    }
  ]
  return (
    <section className='w-[80%] p-2 bg-white '>
      <TableHeader title={"User list"} buttonData={btnData}  />
      <Table tableHead={userListHeader} tableValue={userListData} actionData={actionData} />
    </section>
  )
}

export default UserList