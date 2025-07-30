import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useForm } from "../../context/FormContext";
import { ITEMS_PER_PAGE } from "../../utils/variable/dashboard";
import { useLocation, useParams } from "react-router-dom";

export const Pagination = ({ total }) => {

  const params = useParams()
  const location = useLocation();
  console.log(params,"params")

  console.log("Pathname (location.pathname):", location.pathname)

  
  let totalPages = Math.ceil(total / ITEMS_PER_PAGE);
  if(location.pathname === "/admin/pharmacy/stocks"){
   totalPages = Math.ceil(total / 3);
    
  }
  const  {activePage, setActivePage} = useForm()


  const getPageNumbers = () => {
    let start = Math.max(1, activePage - 2);
    let end = Math.min(totalPages, activePage + 2);

    if (end - start < 4 && start > 1) {
      start = Math.max(1, end - 4);
    }
    if (end - start < 4 && end < totalPages) {
      end = Math.min(totalPages, start + 4);
    }

    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  const handlePageClick = (page) => {
    setActivePage(page);
  };

  const handlePrevious = () => {
    if (activePage > 1) {
      setActivePage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (activePage < totalPages) {
      setActivePage((prev) => prev + 1);
    }
  };

  return (
    <section className="p-10">
      <div className="flex text-base gap-2 justify-center items-center">
        <IoIosArrowBack
          className={`text-stone-500 cursor-pointer ${
            activePage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePrevious}
        />

        {getPageNumbers().map((page) => (
          <p
            key={page}
            onClick={() => handlePageClick(page)}
            className={`w-7 h-7 rounded-full text-center flex items-center justify-center cursor-pointer ${
              activePage === page
                ? "bg-cyan-600 text-white"
                : "bg-transparent text-stone-600 "
            }`}
          >
            {page}
          </p>
        ))}

        {activePage < totalPages - 2 && <p className="gap-2 text-stone-600">...</p>}

        <IoIosArrowForward
          className={`text-cyan-600 cursor-pointer ${
            activePage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleNext}
        />
      </div>
    </section>
  );
};
