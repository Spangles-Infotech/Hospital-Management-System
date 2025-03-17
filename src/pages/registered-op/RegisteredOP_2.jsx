import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { Pagination } from "../../Component/common/Pagination";
import { useNavigate } from "react-router-dom";
import { Table } from "../../Component/common/Table/Table";
import { TableHeading, TableValue } from "../../utils/variable/RegOp_doctor";
import { useRegisteredOp } from "../../hooks/useRegisteredOp";
import { useForm } from "../../context/FormContext";

const RegisteredOP_2 = () => {
  const navigate = useNavigate();
  const {setFormData} = useForm()
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, refetch } = useRegisteredOp();

  const actionData = [
    {
      name: "DoctorAction",
      onClick: (id) =>{ 
        setFormData({appointmentId:id})
        navigate(`/admin/registered-op-doctor/preview/${id}`)
      }
    },
  ];

  return (
    <section className="w-full p-5">
      <div className="flex items-center gap-8 justify-between mb-8">
        <div className="text-lg p-4 font-semibold text-primary">
          Registered OP
        </div>
        <div className="flex items-center gap-4 p-2.5 outline outline-1 rounded-lg text-gray-400 w-80">
          <IoIosSearch className="text-stone-700 text-2xl" />
          <input
            type="text"
            placeholder="Search by Name or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full outline-none text-stone-700 placeholder-stone-700"
          />
        </div>
      </div>
      <Table
        tableHead={TableHeading}
        tableValue={data}
        actionData={actionData}
        isBlue={true}
        isLoading={isLoading}
      />
      <Pagination />
    </section>
  );
};

export default RegisteredOP_2;
