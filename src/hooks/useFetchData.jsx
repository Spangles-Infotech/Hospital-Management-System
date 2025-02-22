import React, { useCallback, useEffect, useState } from 'react'
import { fetch } from '../api/fetch'

export const useFetchData = (baseUrl, query) => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    const url = query ? `${baseUrl}?${query}` : baseUrl ;

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch.get(url);
            setData(response.data.data);
            setError(null);
        } catch (err) {
            setError(err.message);
            console.error("Error fetching data:", err);
        } finally {
            setIsLoading(false);
        }
    }, [url]);

    useEffect(() => {
        if(baseUrl !== null){
            fetchData();
        }
    }, [fetchData]);

  return{
    isLoading, data, error, fetchData
  }
}
