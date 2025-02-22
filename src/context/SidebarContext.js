import { createContext, useContext, useState } from "react";
import { SidebarModal } from "../Component/common/SidebarModal";

const SidebarModalContext = createContext()

export const SidebarModalProvider = ({children})=>{

    const intitialValue = {isOpen:false, formField:[], isEdit:false, id:""}

    const [sidebarContent, setSidebarContent] = useState(intitialValue)

    const onClose = ()=>{
        setSidebarContent(intitialValue)
    }

    const openSidebarModal = (data, isEdit, id)=>{
        setSidebarContent({isOpen:true, formField:data, isEdit:isEdit, id:id})
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
            />
        </SidebarModalContext.Provider>
    )
}

export const useSidebarModal = ()=> useContext(SidebarModalContext)