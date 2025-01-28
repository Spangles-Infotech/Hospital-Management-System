
import React from 'react';
import { Table} from './common/Table/Table';
import { TableHeader } from './common/Table/TableHeader';
import { FormModal } from './modalContents/FormModal';
import { useModal } from '../context/ModalContext';
import { AppointmentstableHeading,AppointmentstableValue } from '../utils/variable/dashboard';

const Appointment = () => {


  return (
    <>
      <div className="w-full border border-primary rounded-xl  gap-3 mt-6 ">

        <TableHeader title={"Appointments"} isSearch={false} button={true} />
          
        <Table tableHead={AppointmentstableHeading} tableValue={AppointmentstableValue}/>


      
      </div>
    </>
  );
};

export default Appointment;
