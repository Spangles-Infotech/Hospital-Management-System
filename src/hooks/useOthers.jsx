import React, { useEffect, useState } from 'react'
import { usePostData } from './usePostData'
import { useFetchData } from './useFetchData'
import { useDeleteData } from './useDeleteData'
import { useForm } from '../context/FormContext'
import { useNavigate } from 'react-router-dom'
import { fetch } from '../api/fetch'
import { useModal } from '../context/ModalContext'
import { FormModal } from '../Component/modalContents/FormModal'
import { roomFormField } from '../utils/variable/settings/room'
import { InactiveModal } from '../Component/modalContents/InactiveModal'
import { roleFields, userFormField } from '../utils/variable/settings/usermanagement'
import { ListIcon } from '../icons/ListIcon'

export const useOthers = () => {

    const navigate = useNavigate()
    const {openModal} = useModal()
    const [nameList, setNameList] = useState([])
    const {data:tabData, fetchData:tabRefetch} = useFetchData("/get-all-roles")
    const [rooms, setRooms] = useState([])
    const {data:userList, fetchData:userRefetch} = useFetchData("/get-all-users")
    const {postData:AddAccess} = usePostData("/add-user-access")
    const {data, fetchData:refetch} = useFetchData("get-all-designation")
    const {data:desgination} = useFetchData("get-only-designation")
    const {postData:addBlock}  = usePostData("/add-block")
    const {formData, setFormData} = useForm()
    const {deleteData:deleteDesignation} = useDeleteData("delete-designation")
    const {postData:postDesignation} = usePostData("add-designation")
    const  {data:roomData, fetchData:roomRefetch} = useFetchData("/get-all-block")


    useEffect(()=>{
        const fetchNameList = async()=>{
            try {
                const response = await fetch.get(`/get-name-list/${formData?.designation}`)
                setNameList(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        if(formData?.designation){
            fetchNameList()
        }
    },[formData])

    const handleDeleteDesignation = async(id)=>{
        const status = await deleteDesignation(id)
        if(status === 200){
            refetch()
        }
    }

    const handlePostAccess = ()=>{
        AddAccess(formData)
    }

    const handleAddBlock = ()=>{
        addBlock(formData)
        navigate("/admin/settings/rooms")
    }

    const getFloorBySection = async(section)=>{
        try {
            const response = await fetch.get(`/get-all-room/${section}`)
            setRooms(response.data.data[0].rooms)
        } catch (error) {
            console.log("error", error.message)
        }
    }

    const handlePostDesignation = async()=>{
        const status = await postDesignation(formData)
        if(status === 201){
            refetch()
        }
    }

    const blockBtnData=[
        {
          name:" New Section",
          onClick : ()=>{navigate("/admin/settings/rooms/add-room")}
        }
      ]
    
      const blockActionData = [
        {
          name:"tripledot",
          data:[
            {
              name:"List",
              title:"List",
              onClick: (id)=>{navigate(`/admin/settings/rooms/room/${id}`)}
            },
            {
              name:"inactive",
              title:"Inactive",
              onClick: ()=>{}
            } 
          ]
        }
    ]

    const roomField = [
        {
            label:"Section",
            name:"section",
        },
        {
            label:"No. of Rooms",
            name:"noOfRooms",
        }
    ]
    
    const roomActionData = [
        {
          name:"tripledot",
          data:[
            {
              name:"edit",
              title:"Edit Rent",
              onClick: ()=>{}
            },
            {
              name:"inactive",
              title:"Inactive",
              onClick: ()=>{openModal(InactiveModal, {title:"Floor no. 01", btnTitle:"Room",field: roomField})}
            } 
          ]
        }
    ]

    const handleAddRoom = ()=>{
        openModal(FormModal, {title:"New Room", formField:roomFormField})
    }

    const userButtonData = [
        {
          name:"New Role",
          onClick : ()=>{openModal(FormModal, {title:"New Role", formField:userFormField, refetch:tabRefetch, name:"/add-roles"})}
        },
        {
          name: "User List",
          onClick : ()=>{navigate("/admin/settings/user-management/user-list")},
          icon: ListIcon
        }
    ]

    const handleClickFullAccess = ()=>{
        roleFields.forEach((field)=>{
            handleClickHead(field.name)
        })
      }
    
      const handleClickHead = (label) => {
        const particularField = roleFields.find((item) => item.name === label);
      
        if (particularField?.children?.length) {
          const updatedChildren = {};
          particularField.children.forEach((child) => {
            updatedChildren[child.name] = true;
          });
      
          setFormData((prev) => ({
            ...prev,
            permission: {
              ...prev.permission,
              [label]: updatedChildren
            }
          }));
        } else {
          // Toggle standalone permission
          setFormData((prev) => ({
            ...prev,
            permission: {
              ...prev.permission,
              [label]: !prev.permission?.[label]
            }
          }));
        }
      };
      
    
      const handleClickAccess = (e, label) => {
        const { name } = e.target;
      
        setFormData((prev) => ({
          ...prev,
          permission: {
            ...prev.permission,
            [label]: {
              ...prev.permission?.[label],
              [name]: !prev.permission?.[label]?.[name]
            }
          }
        }));
      };

      const handleAccessDiscard = ()=>{
        setFormData((prev) => ({...prev, permission:{}}))
      }


      const newUserFields = [
        [
            {
                label: "Designation",
                name:"designation",
                type:"select",
                options:desgination
            },
            {
                label:"Name",
                name:"name",
                type:"select",
                options:nameList
            }
        ],
        [
            {
                label:"User Role",
                name:"userRole",
                options:tabData,
                type:"select"
            },
            {
                label:"",
                name:"",
                type:""
            }
        ],
        [
            {
                label:"User Name",
                name:"userName",
                type:"text"
            },
            {
                label:"Password",
                name:"password",
                type:"password"
            }
        ]
    ]


  return {
    handleDeleteDesignation,
    handlePostDesignation,
    handleClickFullAccess,
    handleAccessDiscard,
    getFloorBySection,
    handleClickAccess,
    handlePostAccess,
    handleClickHead,
    blockActionData,
    roomActionData,
    handleAddBlock,
    userButtonData,
    handleAddRoom,
    newUserFields,
    blockBtnData,
    roomField,
    roomData,
    userList,
    tabData,
    rooms,
    data
  }
}
