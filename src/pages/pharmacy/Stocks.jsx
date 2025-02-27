import { TableHeader } from '../../Component/common/Table/TableHeader'
import { Table } from '../../Component/common/Table/Table'
import { useFetchData } from '../../hooks/useFetchData'
import { Pagination } from '../../Component/common/Pagination'
import { useStock } from '../../hooks/useStock'
import { stockTableHeading } from '../../utils/variable/stock'
import { useEffect } from 'react'
import { useForm } from '../../context/FormContext'

const Stocks = () => {
  const {setFormData} = useForm()
  const {data, isLoading, error} = useFetchData("/get-all-stock")
  const {stockActionData, stockButtonData, getProductCode} = useStock()

  useEffect(()=>{
    const getCode = async()=>{
      const productCode = await getProductCode()
      setFormData({productCode:productCode})
    }
    getCode()
  },[])

  return (
  <section className='m-4 bg-white rounded-[15px]'>
   <TableHeader title={"Stock"} buttonData={stockButtonData} />
   <Table tableHead={stockTableHeading} tableValue={data} actionData={stockActionData} isLoading={isLoading} error={error} />  
   {
      data?.length > 0 &&
      <Pagination />
    }
  </section>
  )
}

export default Stocks