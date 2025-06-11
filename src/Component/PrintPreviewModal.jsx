import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Table } from './common/Table/Table'
import { useFetchData } from '../hooks/useFetchData'

const PrintPreviewModal = ({ tableHead, title, onClose }) => {
  const printRef = useRef()
  const {data,isLoading,error, fetchData:refetch} = useFetchData("/get-all-expense","limit=15")

  console.log(data,"data")

  useEffect(() => {
    const timerId = setTimeout(() => {
      handlePrint();
    }, 1500);

    return () => {
      clearTimeout(timerId);
      onClose()
    };
  }, []);

  const handlePrint = () => {

    
    const printContents = printRef.current.innerHTML
    const win = window.open('', '', 'width=900,height=650')
    win.document.write(`
      <html>
        <head>
          <title>${title}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
            th { background-color: #f4f4f4; }
          </style>
        </head>
        <body>
          ${printContents}
        </body>
      </html>
    `)
    win.document.close()
    win.focus()
    win.print()
    win.close()
  }

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 w-[80%] max-h-[90%] overflow-auto rounded shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={()=>onClose} className="text-red-500">X</button>
        </div>

        <div ref={printRef}>
          <Table tableHead={tableHead} tableValue={data} />
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button onClick={handlePrint} className="bg-blue-600 text-white px-4 py-2 rounded">Print</button>
          <button onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded">Close</button>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default PrintPreviewModal
