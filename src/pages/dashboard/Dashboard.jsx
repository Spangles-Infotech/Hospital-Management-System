import React from "react";
import Appointments from "../../assests/Appointments.png";
import TotalDoctors from "../../assests/TotalDoctors.png";
import NewPaitents from "../../assests/NewPaitents.png";
import Nurses from "../../assests/Nurses.png";
import Doctors from "../../Component/Doctors";
import Appointment from "../../Component/Appointment";
import { TableHeader } from "../../Component/common/Table/TableHeader";
import { useModal } from "../../context/ModalContext";
import { doctorFields } from "../../utils/variable/doctor";
import { FormModal } from "../../Component/modalContents/FormModal";
import { useFetchData } from "../../hooks/useFetchData";
import { patientFields } from "../../utils/variable/patient";
import New_Appointment from "../../Component/modalContents/New_Appointment";
import { useRegisteredOp } from "../../hooks/useRegisteredOp";

const Dashboard = () => {
  const {openModal} = useModal()
  const{data,isLoading, fetchData:fetchData} = useFetchData("/get-all-doctor")
  // const{fetchData: fetchPatients} = useFetchData("/get-all-doctor")
  const {   fetchData:fetchPatients } = useFetchData(`/get-all-patient`)

  const {  refetch:fetchAppointment } = useRegisteredOp();






  const btnData=[
    {
      name:"New Doctor",
      onClick : ()=>{ openModal(FormModal, {title:"New Doctor", formField:doctorFields, refetch:fetchData, name:"/add-doctor"})}
    },
    {
      name:"New Patient",
      onClick: () => { openModal(FormModal, { title: "New Patients", formField: patientFields, refetch:fetchPatients, name:"/add-patient"}) }

      
    },
    {
      name:"Book Appointment",
      onClick: () => {
        openModal(New_Appointment, { title: "Add Appointments", refetch: fetchAppointment, name: "/register-appointment" });
      }
    }
  ]
  return (
    <section className="w-full p-6 container mx-auto">

      <TableHeader buttonData={btnData} isSearch={false}/>

      <div className="flex gap-6 mt-10">
        <div className="w-1/2 border border-primary rounded-xl"></div>

        <div className="flex flex-col gap-1 w-1/2">
          <div className="flex gap-1">
            <div className="w-full border border-primary rounded-tl-xl px-11 flex items-center text-lg gap-7 ">
              <img
                src={Appointments}
                alt="Appointments"
                className="w-[60px] h-[60px] bg-green-100 rounded-md p-1"
              />
              <div>
                <p className="text-stone-700 font-normal">Appointments</p>
                <div className="text-3xl text-activeGreen font-semibold">79</div>
              </div>
            </div>
            <div className="w-full border border-primary rounded-tr-xl p-11 flex items-center gap-7 text-lg">
              <img
                src={NewPaitents}
                alt="New Patients"
                className="w-[60px] h-[60px] bg-orange-100 rounded-md p-1"
              />
              <div>
                <p className="text-stone-700">New Patients</p>
                <div className="text-3xl text-orange-500 font-semibold">200</div>
              </div>
            </div>
          </div>

          <div className="flex gap-1 ">
            <div className="w-full border border-primary rounded-bl-xl p-11 flex items-center gap-7 text-lg font-roboto">
              <img
                src={TotalDoctors}
                alt="Total Doctors"
                className="w-[60px] h-[60px] bg-blue-100 rounded-md p-1"
              />
              <div>
                <p className="text-stone-700">Total Doctors</p>
                <div className="text-3xl text-cyan-700 font-semibold">120</div>
              </div>
            </div>
            <div className="w-full border border-primary rounded-br-xl p-11 flex items-center text-lg gap-7">
              <img
                src={Nurses}
                alt="Nurses"
                className="w-[60px] h-[60px] bg-blue-100 rounded-md p-1"
              />
              <div>
                <p className="text-stone-700">Nurses</p>
                <div className="text-3xl text-blue-900 font-semibold">300</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex  gap-6">
        <Doctors />
        <Appointment />
      </div>
    </section>
  );
};

export default Dashboard;
