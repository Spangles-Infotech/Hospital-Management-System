import React, { useEffect, useState } from 'react'
import { useForm } from '../../context/FormContext'
import axios from 'axios'

export const Filter = () => {
  const { tableForm, setTableForm } = useForm()
  const [categories, setCategories] = useState(["Syrup", "Tablet","Lotion"])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/tags?tag=medicineCategory')
        if (response.data.success) {
          setCategories(response.data.data)
        }
      } catch (error) {
        console.error("Error fetching categories:", error)
      }
    }
    fetchCategories()
  }, [])

  const handleCategoryChange = (e) => {
    setTableForm({ ...tableForm, category: e.target.value })
  }

  const handleFromDateChange = (e) => {
    setTableForm({ ...tableForm, from: e.target.value })
  }

  const handleToDateChange = (e) => {
    setTableForm({ ...tableForm, to: e.target.value })
  }

  return (
    <div className="p-4 flex gap-4 items-center">
      <div className="flex flex-col">
        <label htmlFor="category" className="text-sm font-medium text-gray-700">Category</label>
        <select
          id="category"
          name="category"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={tableForm?.category || ''}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="fromDate" className="text-sm font-medium text-gray-700">From Date</label>
        <input
          type="date"
          id="fromDate"
          name="fromDate"
          className="mt-1 block w-full pl-3 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={tableForm?.from || ''}
          onChange={handleFromDateChange}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="toDate" className="text-sm font-medium text-gray-700">To Date</label>
        <input
          type="date"
          id="toDate"
          name="toDate"
          className="mt-1 block w-full pl-3 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={tableForm?.to || ''}
          onChange={handleToDateChange}
        />
      </div>
    </div>
  )
}