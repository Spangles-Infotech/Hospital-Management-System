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
    const pageNumbers = [];
    const maxPagesToShow = 5; // Maximum number of page numbers to display directly

    // Always include the first page
    pageNumbers.push(1);

    // Calculate start and end for the middle range
    let start = Math.max(2, activePage - Math.floor(maxPagesToShow / 2) + 1);
    let end = Math.min(totalPages - 1, activePage + Math.floor(maxPagesToShow / 2) - 1);

    // Adjust start/end if they overlap with 1 or totalPages
    if (start <= 1) {
      start = 2;
      end = Math.min(totalPages - 1, start + maxPagesToShow - 3); // -3 for 1, ..., totalPages
    }
    if (end >= totalPages) {
      end = totalPages - 1;
      start = Math.max(2, end - maxPagesToShow + 3); // +3 for 1, ..., totalPages
    }

    // Add ellipsis if there's a gap after the first page
    if (start > 2) {
      pageNumbers.push('...');
    }

    // Add middle pages
    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }

    // Add ellipsis if there's a gap before the last page
    if (end < totalPages - 1) {
      pageNumbers.push('...');
    }

    // Always include the last page (if not already included and totalPages > 1)
    if (totalPages > 1 && !pageNumbers.includes(totalPages)) {
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const handlePageClick = (page) => {
    if (page !== '...') {
      setActivePage(page);
    }
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

        {getPageNumbers().map((page, index) => (
          <p
            key={index} // Use index as key for '...' to avoid duplicate key warnings
            onClick={() => handlePageClick(page)}
            className={`w-7 h-7 rounded-full text-center flex items-center justify-center cursor-pointer ${
              activePage === page
                ? "bg-cyan-600 text-white"
                : "bg-transparent text-stone-600 "
            } ${page === '...' ? 'cursor-default' : ''}`}
          >
            {page}
          </p>
        ))}

        {/* This line is now redundant as '...' is handled within getPageNumbers */}
        {/* {activePage < totalPages - 2 && <p className="gap-2 text-stone-600">...</p>} */}

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
