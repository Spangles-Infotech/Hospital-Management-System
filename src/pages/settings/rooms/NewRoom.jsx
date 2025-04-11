import React, { useState } from 'react';
import { TableHeader } from '../../../Component/common/Table/TableHeader';
import { useForm } from '../../../context/FormContext';
import { useOthers } from '../../../hooks/useOthers';

const NewRoom = () => {
  const {formData, handleChange, errors} = useForm()
  const {handleAddBlock} = useOthers()
  return (
    <section className='p-4 w-full bg-white'>
      <TableHeader title={'New Section'} isSearch={false} />
      <form>
        <div className='flex justify-between'>
          <div>
            <p className='text-lg text-stone-600 font-medium py-4'>Section</p>
            <input
              type='text'
              value={formData?.section}
              onChange={handleChange}
              name='section'
              className='border border-stone-400 outline-none p-2 w-[470px] rounded-md  placeholder:text-stone-500'
              placeholder='Floor no. 05'
            />
          </div>
          <div>
            <p className='text-lg text-stone-600 font-medium py-4'>Number of Rooms</p>
            <input
              type='number'
              value={formData?.noOfRooms}
              onChange={handleChange}
              name='noOfRooms'
              className='border border-stone-400 outline-none p-2 w-[470px] rounded-md placeholder:text-stone-500'
              placeholder='10'
            />
          </div>
        </div>

        <div className='flex py-10 items-center gap-5'>
          <p className='text-lg text-stone-600 font-medium'>Status:</p>
          <div className={`flex gap-[10px] items-center h-[40px] font-medium ${formData?.status?.toLowerCase() === 'active' ? 'text-activeGreen' : 'text-stone-600'}`}>
            <input
              type="radio"
              name="status"
              value="Active"
              checked={formData?.status?.toLowerCase() === 'active'}
              onChange={handleChange}
              className={`size-[15px] ${formData?.status?.toLowerCase() === 'active' ? 'accent-activeGreen' : 'accent-stone-400'}`}
            />
            <p>Active</p>
          </div>
          <div className={`flex gap-[10px] items-center h-[40px] font-medium ${formData?.status?.toLowerCase() === 'inactive' ? 'text-red-500' : 'text-stone-600'}`}>
            <input
              type="radio"
              name="status"
              value="Inactive"
              checked={formData?.status?.toLowerCase() === 'inactive'}
              onChange={handleChange}
              className={`size-[15px] ${formData?.status?.toLowerCase() === 'inactive' ? 'accent-red-500' : 'accent-stone-400'}`}
            />
            <p>Inactive</p>
          </div>
        </div>

        <div className="flex mt-7 gap-7 items-center justify-end">
          <p
            className="text-red-600 cursor-pointer text-lg"
          >
            Discard
          </p>
          <button
            type="submit"
            onClick={handleAddBlock}
            className="w-[15%] bg-primary p-2 text-white rounded-lg hover:bg-primary transition text-lg"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewRoom;
