import React, { useEffect, useState } from 'react'
import { IncomeTab } from '../../../Component/reports/IncomeTab'
import { Table } from '../../../Component/common/Table/Table'
import { useReports } from '../../../hooks/useReports'
import { pharmacyHeading } from '../../../utils/variable/reports/pharmacy'
import { useFetchData } from '../../../hooks/useFetchData'
import { Pagination } from '../../../Component/common/Pagination'

const Pharmacy = () => {
  const tabs = [
    { name: "Low Stock", path: "low-stock" },
    { name: "Expiry Date", path: "expiry-date" }
  ]
  const [tableData, setTableData] = useState([])
  const [isLoading, setIsLoading] = useState([])
  const [total, setTotal] = useState([])

  const { tab } = useReports()

  const {
    data: lowStockData,
    isLoading: stockLoading,
    total: stockTotal
  } = useFetchData("/get-all-stock", "isLowStock=true")

  const {
    data: expiryDateData,
    isLoading: expiryLoading,
    total: expiryTotal
  } = useFetchData("/get-all-stock", "IsExpiryDate=true")

  // Determine current data

  useEffect(()=>{
    const isLowStockTab = tab === "low-stock"
    setTableData( isLowStockTab ? lowStockData : expiryDateData)
    setIsLoading( isLowStockTab ? stockLoading : expiryLoading)
    setTotal( isLowStockTab ? stockTotal : expiryTotal)
  },[tab])

  return (
    <section className='flex flex-col gap-[50px]'>
      <IncomeTab data={tabs} isIncome={true} />
      <Table
        tableHead={pharmacyHeading}
        tableValue={tableData}
        isLoading={isLoading}
      />
      <Pagination total={total} />
    </section>
  )
}

export default Pharmacy
