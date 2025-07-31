// RegisteredOP_1 Component
import New_Appointment from "../../Component/modalContents/New_Appointment";
import { Pagination } from '../../Component/common/Pagination';
import { Table } from '../../Component/common/Table/Table';
import { TableHeader } from '../../Component/common/Table/TableHeader';
import { TableHeading, vitalsField } from '../../utils/variable/RegOp_nurse';
import { useModal } from '../../context/ModalContext';
import { useRegisteredOp } from "../../hooks/useRegisteredOp";
import { FormModal } from "../../Component/modalContents/FormModal";
import { useForm } from "../../context/FormContext";
import { useNavigate } from "react-router-dom";

const RegisteredOP_1 = () => {
  const navigate = useNavigate();
  const {setFormData} = useForm()
  const { openModal } = useModal();
  const { data, isLoading, refetch } = useRegisteredOp();

  const btnData = [
    {
      name: "New Appointment",
      onClick: () => {
        // openModal(New_Appointment, { title: "Add Appointments", refetch: refetch, name: "/register-appointment" });
        navigate('newappointment')
      }
    }
  ];

  const actionData = [
    {
      name: "Action1",
      onClick: (id) => {
        setFormData({appointmentId:id.id, patientId:id.patientId})
        openModal(FormModal, { title: "Add vitals", formField: vitalsField, refetch: refetch, name: "/post-vitals" });
      }
    },
    { name: "Action2" }
  ];

  return (
    <section className="w-full p-7 font-roboto">
      <TableHeader title={"Registered OP"} buttonData={btnData} isDate={false} />
      <Table tableHead={TableHeading} tableValue={data} actionData={actionData} isLoading={isLoading} isPat={true} />
      <Pagination />
    </section>
  );
};

export default RegisteredOP_1;