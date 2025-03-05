import { TableHeader } from '../../Component/common/Table/TableHeader'
import { Table } from '../../Component/common/Table/Table'
import { useFetchData } from '../../hooks/useFetchData'
import { Pagination } from '../../Component/common/Pagination'
import { useStock } from '../../hooks/useStock'
import { stockTableHeading } from '../../utils/variable/stock'
import { useForm } from '../../context/FormContext'
import { ITEMS_PER_PAGE } from '../../utils/variable/dashboard'

const Stocks = () => {
  const { activePage} = useForm()
  const {data, isLoading, error, total} = useFetchData("/get-all-stock", `page=${activePage}&limit=${ITEMS_PER_PAGE}`)
  const {stockActionData, addStockButtonData} = useStock()

  return (
  <section className='m-4 bg-white rounded-[15px]'>
   <TableHeader title={"Stock"} buttonData={addStockButtonData} />
   <Table tableHead={stockTableHeading} tableValue={data} actionData={stockActionData} isLoading={isLoading} error={error} />  
   {
      data?.length > 0 &&
      <Pagination total={total} />
    }
  </section>
  )
}

export default Stocks