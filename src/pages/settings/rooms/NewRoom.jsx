import React, { useState } from 'react';
import { TableHeader } from '../../../Component/common/Table/TableHeader';

const NewRoom = () => {
  const [section, setSection] = useState('');
  const [numRooms, setNumRooms] = useState('');
  const [status, setStatus] = useState('active');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <section className='p-4 w-full bg-white'>
      <TableHeader title={'New Section'} isSearch={false} />
      <form onSubmit={handleSubmit}>
        <div className='flex justify-between'>
          <div>
            <p className='text-lg text-stone-600 font-medium py-4'>Section</p>
            <input
              type='text'
              value={section}
              onChange={(e) => setSection(e.target.value)}
              className='border border-stone-400 outline-none p-2 w-[470px] rounded-md  placeholder:text-stone-500'
              placeholder='Floor no. 05'
            />
          </div>
          <div>
            <p className='text-lg text-stone-600 font-medium py-4'>Number of Rooms</p>
            <input
              type='number'
              value={numRooms}
              onChange={(e) => setNumRooms(e.target.value)}
              className='border border-stone-400 outline-none p-2 w-[470px] rounded-md placeholder:text-stone-500'
              placeholder='10'
            />
          </div>
        </div>

        <div className='flex py-10 items-center gap-5'>
          <p className='text-lg text-stone-600 font-medium'>Status:</p>
        
        



          <div className={`flex gap-[10px] items-center h-[40px] font-medium ${status === 'active' ? 'text-activeGreen' : 'text-stone-600'}`}>
            <input
              type="radio"
              name="option"
              value="active"
              checked={status === 'active'}
              onChange={() => setStatus('active')}
              className={`size-[15px] ${status === 'active' ? 'accent-activeGreen' : 'accent-stone-400'}`}
            />
            <p>active</p>
          </div>



          <div className={`flex gap-[10px] items-center h-[40px] font-medium ${status === 'inactive' ? 'text-red-500' : 'text-stone-600'}`}>
            <input
              type="radio"
              name="option"
              value="inactive"
              checked={status === 'inactive'}
              onChange={() => setStatus('inactive')}
              className={`size-[15px] ${status === 'inactive' ? 'accent-red-500' : 'accent-stone-400'}`}
            />
            <p>Inactive</p>
          </div>
        </div>

        <div className="flex mt-7 gap-7 items-center justify-end">
          <p
            className="text-red-600 cursor-pointer text-lg"
            onClick={() => {
            
              setSection('');
              setNumRooms('');
              setStatus('active');
            }}
          >
            Discard
          </p>
          <button
            type="submit"
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
