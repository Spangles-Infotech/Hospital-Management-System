import React,{useState} from 'react'
import MedicalReportAction from "../../assests/MedicalReportAction.png"
import EditIcon from "../../assests/editpen.png";
import PreviousChart from './PreviousChart';
export const OtherReports = () => {

   const [tests, setTests] = useState([
      { id: 1, type: "Blood Test", ConsultedDoctor: "Dr. Subash. N" },
      { id: 2, type: "MRI Scan", ConsultedDoctor: "Dr. Subash. N" },
      { id: 2, type: "X-ray", ConsultedDoctor: "Dr. Subash. N" },
    ]);
  
    const [newTest, setNewTest] = useState({ type: "", ConsultedDoctor: "" });
  
    const handleAdd = () => {
      if (newTest.type && newTest.description) {
        setTests([
          ...tests,
          { id: tests.length + 1, type: "Test", ConsultedDoctor: newTest.ConsultedDoctor },
        ]);
        setNewTest({ type: "", description: "" });
      }
    };
  
  
  
   
  return (
    <section className="p-3 font-poppins">
    <div className="flex gap-8">
      
      <div className="w-[75%]">
        <div className="border border-primary p-5 rounded-lg shadow-lg">
          
            <p className="text-slate-700 font-medium text-lg mb-4 w-[36%]">Medical Reports</p>

       

          <div className="flex gap-6">
        
           
          </div>

         
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-slate-700  text-lg">
                  <th className="px-6 py-4 text-left border-b border-gray-300">S.No</th>
                  <th className="px-6 py-4 text-left border-b border-gray-300 w-[200px]">Test Name</th>
                  <th className="px-6 py-4 text-left border-b border-gray-300">Consulted Doctor</th>
                  <th className="px-6 py-4 text-center border-b border-gray-300">Action</th>
                </tr>
              </thead>
              <tbody>
                {tests.map((test, index) => (
                  <tr key={test.id} className="text-stone-700">
                    <td className="px-6 py-4 border-b border-gray-300">{index + 1}</td>
                    <td className="px-6 py-4 border-b border-gray-300">{test.type}</td>
                    <td className="px-6 py-4 border-b border-gray-300">{test.ConsultedDoctor}</td>
                    <td className="px-6 py-4 border-b border-gray-300">
                      <div className="flex justify-center gap-4">
                        <img
                          className="w-6 h-6 cursor-pointer"
                          src={MedicalReportAction}
                          alt="Action"
                         
                        />
                       
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <PreviousChart/>
     
      
    </div>
 
  </section>
  )
}
