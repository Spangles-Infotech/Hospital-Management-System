import React from 'react'
import { TableHeader } from '../../../Component/common/Table/TableHeader'
import { Table } from '../../../Component/common/Table/Table'
import { purchaseTableHeading } from '../../../utils/variable/purchase'
import { useNavigate } from 'react-router-dom'
import { useFetchData } from '../../../hooks/useFetchData'
import { Pagination } from '../../../Component/common/Pagination'
import { useForm } from '../../../context/FormContext'
import { ITEMS_PER_PAGE } from '../../../utils/variable/dashboard'
import { useModal } from '../../../context/ModalContext'
// import { DotIcon } from '../../../icons/DotIcon'; // Assuming DotIcon will be used for paid/unpaid status
import { usePurchase } from '../../../hooks/usePurchase';
import { toast } from 'react-toastify';

const PurchaseTable = () => {

  const navigate =useNavigate()
  const {activePage, handleReset, tableForm} = useForm()
  const {data, isLoading, error, total} = useFetchData("/get-all-purchase",`page=${activePage}&search=${tableForm?.search || ""}&from=${tableForm?.from || ""}&to=${tableForm?.to || ""}`)
  const { updatePurchasePaymentStatus } = usePurchase();

  const handlePaymentStatusChange = async (id, currentStatus) => {
    const newStatus = currentStatus === "paid" ? "not paid" : "paid";
    try {
      await updatePurchasePaymentStatus(id, newStatus);
      toast.success(`Payment status updated to ${newStatus}`);
    } catch (error) {
      toast.error(`Failed to update payment status: ${error.message}`);
    }
  };

  const btnData = [
    {
      name:"New Purchase",
      onClick: ()=>{ 
        navigate("add-form")
        handleReset()
      }
    }
  ]

  const actionData = [
    {
      name:"eye",
      onClick : (id)=>navigate(`preview/${id}`)
    },
    

    { 
      name: "editpen",
      onClick: (id) => {navigate(`edit-form/${id}`)}
    },
    {
      name: "cash", // Placeholder for paid/unpaid icon
      onClick: (id, rowData) => handlePaymentStatusChange(id, rowData.Payment),
      condition: (rowData) => rowData.Payment !== undefined // Only show if paymentStatus exists
    }
  ]
  return (
  <section className='p-4'>
    <TableHeader title={"Purchase"} buttonData={btnData}/>
    <Table tableHead={purchaseTableHeading} tableValue={data} isLoading={isLoading} actionData={actionData}/>
    {
      data?.length > 0 &&
      <Pagination total={total} />
    }
  </section>
  )
}

export default PurchaseTable