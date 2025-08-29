import React, { useCallback, useEffect, useState } from 'react'
import { fetch } from '../api/fetch'

export const useFetchData = (baseUrl, query) => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    const [total, setTotal] = useState(0)
    const [error, setError] = useState(null)

    const url = query ? `${baseUrl}?${query}` : baseUrl ;

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch.get(url);
            // console.log(response,"responseresponse")
            setData(response.data.data);
            setTotal(response.data?.total)
            setError(null);
        } catch (err) {
            setError(err.message);
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
    isLoading, data, error, total, fetchData
  }
}
