import React, { useEffect, useState } from 'react'
import { fetch } from '../api/fetch'

export const useFetchData = (baseUrl, query) => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    const url = query ? `${baseUrl}?${query}` : baseUrl;

    useEffect(() => {
        let isMounted = true; 
    
        const fetchData = async () => {
          setIsLoading(true);
          try {
            const response = await fetch.get(url);
            if (isMounted) {
              setData(response.data.data);
              setError(null);
            }
          } catch (err) {
            if (isMounted) setError(err.message);
            console.error("Error fetching data:", err);
          } finally {
            if (isMounted) setIsLoading(false);
          }
        };
    
        fetchData();
    
        return () => {
          isMounted = false;
        };
      }, [url]);

  return{
    isLoading, data, error
  }
}
