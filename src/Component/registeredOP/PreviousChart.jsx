import React from 'react';

const PreviousChart = () => {
  const chartData = [
    { date: '12/02/2024', id: 1 },
    { date: '13/02/2024', id: 2 },
    { date: '14/02/2024', id: 3 },
    { date: '15/02/2024', id: 4 },
    { date: '12/02/2024', id: 5 },
    { date: '13/02/2024', id: 6 },
    { date: '14/02/2024', id: 7 },
    { date: '15/02/2024', id: 8 },
  ];

  return (
    <section className="w-[25%] font-poppins">
      <div className="border border-[#1F9CC6] rounded-lg ">
        <p className="text-[#1F9CC6] font-medium text-lg p-2  ">Previous Chart</p>
        <div className="w-full h-[1px] bg-cyan-100 mt-4 "></div>
        {chartData.map((chart) => (
          <div key={chart.id}>
            <div className="flex justify-between py-2 p-4 text-stone-600 font-medium">
              <p>{chart.date}</p>
              <p className="text-blue-500 underline cursor-pointer">View</p>
            </div>
            <div className="w-full h-[1px] bg-cyan-100"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreviousChart;
