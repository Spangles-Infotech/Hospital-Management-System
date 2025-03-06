import React from 'react'
import { useFetchData } from './useFetchData'

export const useRegisteredOp = () => {

    const {data, fetchData:refetch, isLoading} = useFetchData("/get-all-registered-appointments")

  return {
        isLoading,
        refetch,
        data
    }
}
