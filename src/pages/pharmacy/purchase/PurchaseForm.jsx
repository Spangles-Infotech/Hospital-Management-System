import MedicinePrescription from '../Prescription/MedicinePrescription'
import Payment_Prescription from '../Prescription/Payment_Prescription'
import { PharmacyPreviewInfo } from '../../../Component/preview content/PharmacyPreviewInfo'
import { NewPurchaseField } from '../../../utils/variable/purchase'
import { usePurchase } from '../../../hooks/usePurchase'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchData } from '../../../hooks/useFetchData'
import { useForm } from '../../../context/FormContext'

const PurchaseForm = ({isEdit=false}) => {

  const {id} = useParams()
  const {setFormData} = useForm()
  const {handleBackToPurchase, handleSavePurchase} = usePurchase()
  const tableHeader =[ "MEDICINE NAME", "BATCH NO.", "MEDICINE CATEGORY",  "HSN",  "EXP DATE", "QTY", "UNIT", "PRICE", "GST (in percent)", "AMOUNT"]
  const fields=[
    { label:"", name:"medicineName", "type":"text"},
    { label: "", name:"batchNo", "type": "select"},
    {label:"", name:"medicineCategory", "type":"select", "options":["Tablet","Medicine","Syrup"] },
    { label:"", name:"hsnCode", "type":"text"},
    { label: "", name:"expDate", "type": "date"},
    {label:"", name:"quantity", "type":"text"},
    {label:"", name:"unit", "type":"select", options:["Bottles", "Box", "Strip"]},
    {label:"", name:"price", "type":"number"},
    {label:"", name:"gst", "type":"number"},
    {labe:"", name:"amount","type":"number"}
  ]

  const {data, isLoading, error} = useFetchData(`/get-purchase/${id}`)

  useEffect(()=>{
    if(id && data){
      setFormData(data)
    }
  },[data])



  return (
    <section className='p-6'>
      <PharmacyPreviewInfo fields={NewPurchaseField} isForm={true}/>
      <MedicinePrescription tableHeader={tableHeader} fields={fields} title={"medicines"} count={data?.["medicines"]?.length} isEdit={isEdit} />
      <Payment_Prescription handleClick={handleSavePurchase} handleDiscard={handleBackToPurchase} isEdit={isEdit} id={id} />
    </section>
  )
}

export default PurchaseForm