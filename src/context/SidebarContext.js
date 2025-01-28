import { createContext, useContext } from "react";
import { SidebarModal } from "../Component/common/SidebarModal";

const SidebarModalContext = createContext()

export const SidebarModalProvider = ({children})=>{

    const intitialValue = {isOpen:false, formField:[]}

    const [sidebarContent, setSidebarContent] = useState(intitialValue)

    const onClose = ()=>{
        setSidebarContent(intitialValue)
    }

    const openSidebarModal = (data)=>{
        setSidebarContent({isOpen:true, formField:data})
    }

    return(
        <SidebarModalContext.Provider>
            {children}
            <SidebarModal 
                formField={sidebarContent.formField}
                isOpen = {sidebarContent.isOpen}
                onClose={onClose}
            />
        </SidebarModalContext.Provider>
    )
}

export const useSidebarModal = ()=> useContext(SidebarModalContext)