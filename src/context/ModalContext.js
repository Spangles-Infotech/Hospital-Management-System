import { createContext, useContext, useState } from "react";
import { Modal } from "../Component/common/Modal";

const ModalContext = createContext()

export const ModalProvider = ({children})=>{
    const [modalState, setModalState] = useState({
        isOpen: false,
        content: null,
        contentProps: {},
    })

    const openModal = (content, contentProps = {})=>{
        setModalState({isOpen: true, content, contentProps})
    }

    const closeModal = ()=>{
        setModalState({ isOpen: false, content: null, contentProps: {} });
    }

    return (
        <ModalContext.Provider value={{ ...modalState, openModal, closeModal }}>
            {children}
            <Modal
                isOpen={modalState.isOpen}
                onClose={closeModal}
                content={modalState.content}
                contentProps={modalState.contentProps}
            />
        </ModalContext.Provider>
    );    
}

export const useModal = () => useContext(ModalContext);