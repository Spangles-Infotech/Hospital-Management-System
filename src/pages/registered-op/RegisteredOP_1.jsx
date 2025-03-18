import New_Appointment from "../../Component/modalContents/New_Appointment";
import Vitals from '../../Component/modalContents/Vitals';
import { Pagination } from '../../Component/common/Pagination';
import { Table } from '../../Component/common/Table/Table';
import { TableHeader } from '../../Component/common/Table/TableHeader';
import { TableHeading } from '../../utils/variable/RegOp_nurse';
import { useModal } from '../../context/ModalContext';
import { useRegisteredOp } from "../../hooks/useRegisteredOp";


const RegisteredOP_1 = () => {

  const {openModal} = useModal()
  const {data, isLoading, refetch} = useRegisteredOp()
  
  const btnData=[
    {
      name:"New Appointment",
      onClick:()=>{openModal(New_Appointment, {title:"Add Appointments", refetch:refetch, name:"/register-appointment"})}
    }
  ]

const actionData=[
  {
    name:"Action1",
    onClick:()=>{openModal(Vitals,{title:"Add vitals",refetch:refetch,name:"/post-vitals"})}
  },
  {
    name:"Action2",
    
  }
]
  
  return (
    <section className="w-full p-7 font-roboto ">
      <TableHeader title={"Registered OP"} buttonData={btnData} isDate={false}/>
      <Table tableHead={TableHeading} tableValue={data} actionData={actionData} isLoading={isLoading} />
      <Pagination />
    </section>

  );
};

export default RegisteredOP_1;
