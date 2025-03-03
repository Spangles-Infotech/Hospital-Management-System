import { useSidebarModal } from '../context/SidebarContext'
import { useModal } from '../context/ModalContext'
import { stockEditFormField, stockPreviewFields } from '../utils/variable/stock'
import PreviewModal from '../Component/modalContents/PreviewModal'
import { fetch } from '../api/fetch'
import { useFetchData } from './useFetchData'

export const useStock = () => {
    const {openSidebarModal} = useSidebarModal()
    const {openModal} = useModal()
    const {data} = useFetchData("/get-all-generic-name")
    const {data:categoryData, fetchData:refetch} = useFetchData("/get-all-category")
    const {data:medicineNameData} = useFetchData("/get-all-medicine-name")

    const stockButtonData = [
        {
          name:"New Stock",
          onClick: ()=>{openSidebarModal(stockFormField, false)}
        }
    ]

    const stockActionData = [
        {
          name:"eye",
          onClick : (id)=>{openModal(PreviewModal, {title:"Stock", previewFields:stockPreviewFields},`/get-stock/${id}`)}
        },
        {
          name: "editpen",
          onClick: (id) =>{openSidebarModal(stockEditFormField,  true, id)}
        }
    ]

    const getProductCode = async()=>{
        try {
            const response = await fetch.get("/get-product-code")
            return response.data.productCode
        } catch (error) {
            console.log("error at getting product code", error?.message)            
        }
    }

    const stockFormField = [
      [{ label: "Product Code", name: "productCode", type: "text" }, { label: "Product Name", name: "productName", type: "text" }],
      [{ label: "Generic Name", name: "genericName", type: "searchDropdown", options:data }, { label: "HSN Code", name: "hsnCode", type: "text" }],
      [
        {
          label: "Category",
          name: "category",
          type: "select",
          options: categoryData,
        },
      ],
      [{ label: "Pack", name: "pack", type: "text" },{ label: "Low Stock", name: "lowStock", type: "number" }],
      [{ label: "Gst %", name: "gst", type: "number" },{
        label: "Expire Alert",
        name:"expireAlert",
        options: ["months", "weeks", "days"],
        inputName: "count",
        inputType:"number",
        dropdownName: "duration",
        type: "inputdropdown",
        align:"right"
      }],
    ];


  return {
    stockButtonData, stockActionData, getProductCode, stockFormField, refetch, medicineNameData, categoryData
  }
}
