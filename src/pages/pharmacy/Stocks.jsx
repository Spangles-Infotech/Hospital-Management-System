import { TableHeader } from '../../Component/common/Table/TableHeader'
import { Table } from '../../Component/common/Table/Table'
import { stockFormField, stockPreviewFields, stockTableHeading, supplierPurchasePreviewData } from '../../utils/variable/stock'
import { useSidebarModal } from '../../context/SidebarContext'
import { useFetchData } from '../../hooks/useFetchData'
import { useModal } from '../../context/ModalContext'
import PreviewModal from '../../Component/modalContents/PreviewModal'
import { Pagination } from '../../Component/common/Pagination'

const Stocks = () => {

  const {openSidebarModal} = useSidebarModal()
  const {openModal} = useModal()
  const {data, isLoading, error} = useFetchData("/get-all-stock")

  const buttonData = [
    {
      name:"New Stock",
      onClick: ()=>{openSidebarModal(stockFormField, false)}
    }
  ]

  const actionData = [
    {
      name:"eye",
      onClick : (id)=>{openModal(PreviewModal, {title:"Stock", previewFields:stockPreviewFields},`/get-stock/${id}`)}
    },
    {
      name: "editpen",
      onClick: (id) =>{openSidebarModal(stockFormField,  true, id)}
    }
  ]
  return (
  <section className='m-4 bg-white rounded-[15px]'>
   <TableHeader title={"Stock"} buttonData={buttonData} />
   <Table tableHead={stockTableHeading} tableValue={data} actionData={actionData} isLoading={isLoading} error={error} />  
   {
      data?.length > 0 &&
      <Pagination />
    }
  </section>
  )
}

export default Stocks