
import React from 'react';
import { Table} from './common/Table/Table';
import { TableHeader } from './common/Table/TableHeader';
import { FormModal } from './modalContents/FormModal';
import { useModal } from '../context/ModalContext';
import { DoctortableHeading,DoctortableValue } from '../utils/variable/dashboard';


const Doctors = () => {


  return (
    <>
      <div className='flex mt-6 '>
        <div className="w-full border border-primary rounded-xl ">
          <TableHeader title={"Doctors"} isSearch={false}/>
          <Table tableHead={DoctortableHeading} tableValue={DoctortableValue}/>

        </div>
      </div>
    </>
  );
}

export default Doctors;
