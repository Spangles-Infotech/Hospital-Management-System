import React, { useCallback, useEffect, useState } from 'react'
import { fetch } from '../api/fetch'

export const useGetData = (url, condition = true) => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    const fetchData = useCallback(async () => {
        if (!url || !condition) return;
        setIsLoading(true);
        try {
            const response = await fetch.get(url);
            setData(response.data);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, [url, condition]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

  return{
    isLoading, data, error
  }
}