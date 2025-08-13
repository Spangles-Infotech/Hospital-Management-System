// import { TableHeader } from '../../Component/common/Table/TableHeader'
// import { Table } from '../../Component/common/Table/Table'
// import { useFetchData } from '../../hooks/useFetchData'
// import { Pagination } from '../../Component/common/Pagination'
// import { useStock } from '../../hooks/useStock'
// import { stockTableHeading } from '../../utils/variable/stock'
// import { useForm } from '../../context/FormContext'
// import { ITEMS_PER_PAGE } from '../../utils/variable/dashboard'
// import { Filter } from '../../Component/common/Filter'

import { Filter } from "../../../Component/common/Filter"
import { Pagination } from "../../../Component/common/Pagination"
import { Table } from "../../../Component/common/Table/Table"
import { TableHeader } from "../../../Component/common/Table/TableHeader"
import { useForm } from "../../../context/FormContext"
import { useFetchData } from "../../../hooks/useFetchData"
import { useStock } from "../../../hooks/useStock"
import { medicalTableHeading, stockTableHeading } from "../../../utils/variable/stock"

export const MedicalReports = () => {
  const { activePage, tableForm} = useForm()
  const {data, isLoading, error, total} = useFetchData("/get-all-stock", `page=${activePage}&limit=25&search=${tableForm?.search || ""}&from=${tableForm?.from || ""}&to=${tableForm?.to || ""}&category=${tableForm?.category || ""}`)
  const {stockActionData, addStockButtonData} = useStock()

  return (
  <section className='m-4 bg-white rounded-[15px]'>
    <h4>Medical bills</h4>
   {/* <TableHeader title={"Stock"} buttonData={addStockButtonData} /> */}
   <Filter />
   <Table tableHead={medicalTableHeading} tableValue={data} actionData={stockActionData} isLoading={isLoading} error={error} />  
   {
      data?.length > 0 &&
      <Pagination total={total} />
    }
  </section>
  )
}

// export default MedicalReports