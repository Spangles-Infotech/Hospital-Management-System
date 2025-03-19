import { useSidebarModal } from '../context/SidebarContext'
import { useModal } from '../context/ModalContext'
import { tagFormFields, stockPreviewFields } from '../utils/variable/stock'
import PreviewModal from '../Component/modalContents/PreviewModal'
import { fetch } from '../api/fetch'
import { useFetchData } from './useFetchData'
import { useForm } from '../context/FormContext'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

export const useStock = () => {
    const {openSidebarModal} = useSidebarModal()
    const {openModal} = useModal()
    const {handleReset, formData} = useForm()
    const {data} = useFetchData("/get-all-generic-name")
    const {data:categoryData, fetchData:refetch} = useFetchData('/get-tags?tag=medicineCategory')
    const {data:strengthData, fetchData:strengthRefetch} = useFetchData('/get-tags?tag=strengthCategory')
    const {data:packsData, fetchData:packRefetch} = useFetchData('/get-tags?tag=unitsCategory')
    const {data:gstData, fetchData:gstRefetch} = useFetchData('/get-tags?tag=gstCategory')
    const {data:medicineNameData, fetchData:medicineRefetch} = useFetchData("/get-all-medicine-name")


    const stockButtonData = [
        {
          name:"New Stock",
          onClick: ()=>{openSidebarModal(stockEditFormField, false,)}
        }
    ]
    const addStockButtonData = [
        {
          name:"New Stock",
          onClick: ()=>{
            handleReset()
            openSidebarModal(stockEditFormField, false, "", null, true)
          }
        }
    ]

    // useEffect(()=>{
    //   if(formData?.["productName"]){
    //     isProductExits()
    //   }
    // },[formData])

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
      [{ label: "Product Code", name: "productCode", type:"text"   }, { label: "Product Name", name: "productName", type: "searchDropdown", options:medicineNameData}],
      [{ label: "Generic Name", name: "genericName", type: "searchDropdown", options:data }, { label: "HSN Code", name: "hsnCode", type: "text" }],
      [{label: "Category",name: "category",type: "select",options: categoryData,isAdd:true, fields:tagFormFields["medicine"], title:"Add Category", route:"/add-tags", refetch:refetch},{label: "Strength",name: "strength",type: "select",options:strengthData, isAdd:true, fields:tagFormFields["strength"], title:"Add Strength", route:"/add-tags", refetch:strengthRefetch}],
      [{ label: "Unit", name: "unit", type: "select", options: packsData, isAdd:true, fields:tagFormFields["pack"], title:"Add unit", route:"/add-tags", refetch:packRefetch  },{ label: "Low Stock", name: "lowStock", type: "number" }],
      [{ label: "Gst", name: "gst", type: "select", options: gstData, isAdd:true, fields:tagFormFields["gst"], title:"Add GST %", route:"/add-tags", refetch:gstRefetch  },{label: "Expire Alert",name:"expireAlert", options: ["months", "weeks", "days"], inputName: "count", inputType:"number", dropdownName: "duration", type: "inputdropdown", align:"right"}],
    ];

    const stockEditFormField = [
      [{ label: "Product Code", name: "productCode", type: "text" }, { label: "Product Name", name: "productName", type: "searchDropdown", options:medicineNameData}],
      [{ label: "Generic Name", name: "genericName", type: "searchDropdown", options:data }, { label: "HSN Code", name: "hsnCode", type: "text" }],
      [{ label: "Batch Number", name: "batchNumber", type:"text"}, { label: "Expiry Date", name: "expiryDate", type: "date" }],
      [{label: "Category",name: "category",type: "select",options: categoryData,isAdd:true, fields:tagFormFields["medicine"], title:"Add Category", route:"/add-tags", refetch:refetch},{label: "Strength",name: "strength",type: "select",options: strengthData,isAdd:true, fields:tagFormFields["strength"], title:"Add Strength", route:"/add-tags", refetch:strengthRefetch}],
      [{ label: "Unit", name: "unit", type: "select", options: packsData, isAdd:true, fields:tagFormFields["pack"], title:"Add unit", route:"/add-tags", refetch:packRefetch  },{ label: "Low Stock", name: "lowStock", type: "number" }],
      [{label:"Purchase Price", name:"purchasePrice", type:"number"},{label:"Sales Price", name:"salesPrice", type:"number"}, {label:"Total Quantity", name:"totalQuantity", type:"number"}],
      [{ label: "Gst", name: "gst", type: "select", options: gstData, isAdd:true, fields:tagFormFields["gst"], title:"Add GST %", route:"/add-tags", refetch:gstRefetch  },{label: "Expire Alert",name:"expireAlert", options: ["months", "weeks", "days"], inputName: "count", inputType:"number", dropdownName: "duration", type: "inputdropdown", align:"right"}],
    ];


  return {
    stockButtonData, stockActionData, getProductCode, stockFormField, categoryData, strengthData, packsData, gstData, addStockButtonData, stockEditFormField, medicineNameData, medicineRefetch
  }
}
