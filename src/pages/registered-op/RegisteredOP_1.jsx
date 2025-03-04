import New_Appointment from "../../Component/modalContents/New_Appointment";
import Vitals from '../../Component/modalContents/Vitals';
import { Pagination } from '../../Component/common/Pagination';
import { Table } from '../../Component/common/Table/Table';
import { TableHeader } from '../../Component/common/Table/TableHeader';
import { TableHeading, TableValue } from '../../utils/variable/RegOp_nurse';
import { useModal } from '../../context/ModalContext';
import { useFetchData } from "../../hooks/useFetchData";


const RegisteredOP_1 = () => {

  const {openModal} = useModal()
  const {data, isLoading} = useFetchData("/get-all-registered-appointments")
  
  const btnData=[
    {
      name:"New Appointment",
      onClick:()=>{openModal(New_Appointment)}
    }
  ]

const actionData=[
  {
    name:"Action1",
    onClick:()=>{openModal(Vitals)}
  },
  {
    name:"Action2",
    
  }
]
  
  return (
    <section className="w-full p-7 font-roboto ">
      <TableHeader title={"Registered OP"} buttonData={btnData}/>
      <Table tableHead={TableHeading} tableValue={data} actionData={actionData} isLoading={isLoading}/>
      <Pagination />
    </section>

  );
};

export default RegisteredOP_1;
