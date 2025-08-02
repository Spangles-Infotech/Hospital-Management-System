import { createContext, useContext, useEffect, useState } from "react";
import { Modal } from "../Component/common/Modal";
import { fetch } from "../api/fetch";

const ModalContext = createContext()

export const ModalProvider = ({children})=>{
    const [modalState, setModalState] = useState({
        isOpen: false,
        content: null, 
        contentProps: {},
        name:""
    })

    const [data, setData] = useState([])

    const openModal = (content, contentProps = {}, name)=>{
        setModalState({isOpen: true, content, contentProps, name:name})
    }

    const closeModal = ()=>{
        setModalState({ isOpen: false, content: null, contentProps: {}, name:"" });
    }

    useEffect(() => {
        if (modalState.name) {
            const fetchData = async () => {
                const result = await fetch.get(modalState.name);
                setData(result.data.data); 
            };
            fetchData();
        }
    }, [modalState.name]);

    return (
        <ModalContext.Provider value={{ ...modalState, openModal, closeModal }}>
            {children}
            <Modal
                isOpen={modalState.isOpen}
                onClose={closeModal}
                content={modalState.content}
                contentProps={{...modalState.contentProps, data}}
            />
        </ModalContext.Provider>
    );    
}

export const useModal = () => useContext(ModalContext);