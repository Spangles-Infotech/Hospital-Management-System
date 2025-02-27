import { useSidebarModal } from '../context/SidebarContext'
import { useModal } from '../context/ModalContext'
import { stockFormField, stockPreviewFields } from '../utils/variable/stock'
import PreviewModal from '../Component/modalContents/PreviewModal'
import { fetch } from '../api/fetch'

export const useStock = () => {

    const {openSidebarModal} = useSidebarModal()
    const {openModal} = useModal()

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
          onClick: (id) =>{openSidebarModal(stockFormField,  true, id)}
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


  return {
    stockButtonData, stockActionData, getProductCode
  }
}
