import { useSidebarModal } from '../context/SidebarContext'
import { useModal } from '../context/ModalContext'
import { tagFormFields, stockPreviewFields } from '../utils/variable/stock'
import PreviewModal from '../Component/modalContents/PreviewModal'
import { fetch } from '../api/fetch'
import { useFetchData } from './useFetchData'

export const useStock = () => {
    const {openSidebarModal} = useSidebarModal()
    const {openModal} = useModal()
    const {data} = useFetchData("/get-all-generic-name")
    const {data:categoryData, fetchData:refetch} = useFetchData('/get-tags?tag=medicineCategory')
    const {data:strengthData, fetchData:strengthRefetch} = useFetchData('/get-tags?tag=strengthCategory')
    const {data:packsData, fetchData:packRefetch} = useFetchData('/get-tags?tag=packsCategory')
    const {data:gstData, fetchData:gstRefetch} = useFetchData('/get-tags?tag=gstCategory')

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
      [{label: "Category",name: "category",type: "select",options: categoryData,isAdd:true, fields:tagFormFields["medicine"], title:"Add Category", route:"/add-tags", refetch:refetch},{label: "Strength",name: "strength",type: "select",options: strengthData,isAdd:true, fields:tagFormFields["strength"], title:"Add Strength", route:"/add-tags", refetch:strengthRefetch}],
      [{ label: "Pack", name: "pack", type: "select", options: packsData, isAdd:true, fields:tagFormFields["pack"], title:"Add Packs", route:"/add-tags", refetch:packRefetch  },{ label: "Low Stock", name: "lowStock", type: "number" }],
      [{ label: "Gst", name: "gst", type: "select", options: gstData, isAdd:true, fields:tagFormFields["gst"], title:"Add GST %", route:"/add-tags", refetch:gstRefetch  },{label: "Expire Alert",name:"expireAlert", options: ["months", "weeks", "days"], inputName: "count", inputType:"number", dropdownName: "duration", type: "inputdropdown", align:"right"}],
    ];

    const stockEditFormField = [
      [{ label: "Product Code", name: "productCode", type: "text" }, { label: "Product Name", name: "productName", type: "text" }],
      [{ label: "Generic Name", name: "genericName", type: "searchDropdown", options:data }, { label: "HSN Code", name: "hsnCode", type: "text" }],
      [{label: "Category",name: "category",type: "select",options: categoryData,isAdd:true, fields:tagFormFields["medicine"], title:"Add Category", route:"/add-tags", refetch:refetch},{label: "Strength",name: "strength",type: "select",options: strengthData,isAdd:true, fields:tagFormFields["strength"], title:"Add Strength", route:"/add-tags", refetch:strengthRefetch}],
      [{ label: "Pack", name: "pack", type: "select", options: packsData, isAdd:true, fields:tagFormFields["pack"], title:"Add Packs", route:"/add-tags", refetch:packRefetch  },{ label: "Low Stock", name: "lowStock", type: "number" }],
      [{label:"Purchase Price", name:"purchasePrice", type:"number"},{label:"Sales Price", name:"salesPrice", type:"number"}, ,{label:"Total Quantity", name:"totalQuantity", type:"number"}],
      [{ label: "Gst", name: "gst", type: "select", options: gstData, isAdd:true, fields:tagFormFields["gst"], title:"Add GST %", route:"/add-tags", refetch:gstRefetch  },{label: "Expire Alert",name:"expireAlert", options: ["months", "weeks", "days"], inputName: "count", inputType:"number", dropdownName: "duration", type: "inputdropdown", align:"right"}],
    ];


  return {
    stockButtonData, stockActionData, getProductCode, stockFormField, categoryData, strengthData, packsData, gstData
  }
}
