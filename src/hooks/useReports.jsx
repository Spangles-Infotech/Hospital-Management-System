import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const useReports = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const tab = query.get("tab");

    const handleClickTab = (item)=>{
        navigate(`?tab=${item}`)
    }

    return {
        tab,
        handleClickTab
  }
}
