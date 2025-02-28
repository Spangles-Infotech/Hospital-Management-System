import MedicinePrescription from '../Prescription/MedicinePrescription'
import Payment_Prescription from '../Prescription/Payment_Prescription'
import { PharmacyPreviewInfo } from '../../../Component/preview content/PharmacyPreviewInfo'
import { usePurchase } from '../../../hooks/usePurchase'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchData } from '../../../hooks/useFetchData'
import { useForm } from '../../../context/FormContext'
import { AddIcon } from '../../../icons/AddIcon'
import { useSidebarModal } from '../../../context/SidebarContext'
import { useStock } from '../../../hooks/useStock'

const PurchaseForm = ({isEdit=false}) => {

  const {id} = useParams()
  const {setFormData} = useForm()
  const {stockFormField} = useStock()
  const {openSidebarModal} = useSidebarModal()
  const {handleBackToPurchase, handleSavePurchase,getOrderId, NewPurchaseField} = usePurchase()
  const tableHeader =[ "MEDICINE NAME", "HSN", "MEDICINE CATEGORY", "BATCH NO.", "EXP DATE", "QTY","FREE", "UNIT","TOTAL QUANTITY", "PURCHASE RATE", "MRP", "DISCOUNT", "GST (in percent)", "AMOUNT"]
  const fields=[
    {label:"", name:"medicineName", "type":"text"},
    {label:"", name:"hsnCode", "type":"text"},
    {label:"", name:"medicineCategory", "type":"select", "options":["Tablet","Medicine","Syrup"] },
    {label:"", name:"batchNo", "type": "text"},
    {label:"", name:"expDate", "type": "date"},
    {label:"", name:"quantity", "type":"number"},
    {label:"", name:"free", "type":"number"},
    {label:"", name:"unit", "type":"number"},
    {label:"", name:"availableQuantity", "type":"number"},
    {label:"", name:"purchaseRate", "type":"number"},
    {label:"", name:"mrp", "type":"number"},
    {label:"", name:"discount", "type":"number"},
    {label:"", name:"gst", "type":"number"},
    {label:"", name:"amount","type":"number"}
  ]
  
  const {data, isLoading, error} = useFetchData( id ? `/get-purchase/${id}`: null)

  useEffect(()=>{
    if(id && data){
      setFormData(data)
    }
  },[data])

  useEffect(()=>{
    if(!isEdit){
      const fetch = async()=>{
        const response = await getOrderId()
        setFormData({orderNumber:response})
      }
      fetch()
    }
  },[])

  return (
    <section className='p-6'>
      <PharmacyPreviewInfo fields={NewPurchaseField} isForm={true}/>
      <div className='flex justify-end mt-5'>
        <div
            role="button" 
            onClick={()=>openSidebarModal(stockFormField, false)}
            className="flex flex-row gap-1 items-center px-3 py-1 h-[30px] 2xl:h-[35px] border border-primary text-white transition-all duration-500 bg-primary rounded text-sm space-x-2 hover:bg-white hover:text-primary fill-white focus:ring-4 focus:ring-teal-200 cursor-pointer hover:fill-primary"
        >
            <AddIcon /> 
            <span>Add Stock</span>
        </div>
      </div>
      <MedicinePrescription tableHeader={tableHeader} fields={fields} title={"medicines"} count={data?.["medicines"]?.length} isEdit={isEdit} />
      <Payment_Prescription handleClick={handleSavePurchase} handleDiscard={handleBackToPurchase} isEdit={isEdit} id={id} />
    </section>
  )
}

export default PurchaseForm