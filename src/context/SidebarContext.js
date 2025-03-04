import { createContext, useContext, useState } from "react";
import { SidebarModal } from "../Component/common/SidebarModal";

const SidebarModalContext = createContext()

export const SidebarModalProvider = ({children})=>{

    const intitialValue = {isOpen:false, formField:[], isEdit:false, id:"", refetch:null}

    const [sidebarContent, setSidebarContent] = useState(intitialValue)

    const onClose = ()=>{
        setSidebarContent(intitialValue)
    }

    const openSidebarModal = (data, isEdit, id, refetch)=>{
        setSidebarContent({isOpen:true, formField:data, isEdit:isEdit, id:id, refetch:refetch})
    }

    return(
        <SidebarModalContext.Provider value={{openSidebarModal, onClose}}>
            {children}
            <SidebarModal 
                formField={sidebarContent.formField}
                isOpen = {sidebarContent.isOpen}
                isEdit = {sidebarContent.isEdit}
                id = {sidebarContent.id}
                onClose={onClose}
                refetch={sidebarContent.refetch}
            />
        </SidebarModalContext.Provider>
    )
}

export const useSidebarModal = ()=> useContext(SidebarModalContext)