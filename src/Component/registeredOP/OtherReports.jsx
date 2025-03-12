import React from 'react';
import MedicalReportAction from "../../assests/MedicalReportAction.png";
import PreviousChart from './PreviousChart';
import { useForm } from '../../context/FormContext';

export const OtherReports = () => {
  const { formData } = useForm();
  const otherReports = formData?.otherReports || [];

  return (
    <section className="p-3 font-poppins">
      <div className="flex gap-8">
        <div className="w-[75%]">
          <div className="border border-primary p-5 rounded-lg shadow-lg">
            <p className="text-slate-700 font-medium text-lg mb-4 w-[36%]">
              Medical Reports
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-slate-700 text-lg">
                    <th className="px-6 py-4 text-left border-b border-gray-300">S.No</th>
                    <th className="px-6 py-4 text-left border-b border-gray-300 w-[200px]">Test Name</th>
                    <th className="px-6 py-4 text-left border-b border-gray-300">Consulted Doctor</th>
                    <th className="px-6 py-4 text-center border-b border-gray-300">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {otherReports.length > 0 ? (
                    otherReports.map((test, index) => (
                      <tr key={index} className="text-stone-700">
                        <td className="px-6 py-4 border-b border-gray-300">{index + 1}</td>
                        <td className="px-6 py-4 border-b border-gray-300">{test.testName}</td>
                        <td className="px-6 py-4 border-b border-gray-300">{test.consultedDoctor}</td>
                        <td className="px-6 py-4 border-b border-gray-300 text-center">
                          <div className="flex justify-center gap-4">
                            <img
                              className="w-6 h-6 cursor-pointer"
                              src={MedicalReportAction}
                              alt="Action"
                            />
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center text-gray-500 py-4">
                        No medical reports available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <PreviousChart />
      </div>
    </section>
  );
};
