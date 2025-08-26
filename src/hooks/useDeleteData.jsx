import React, { useState } from 'react';
import { fetch } from "../api/fetch";

export const useDeleteData = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);

    const deleteData = async ({ name, type }) => { 
        setIsLoading(true);
        setError(null); 

        try {
            const response = await fetch.delete(`${url}/${name}?type=${type}`);
            if (response.status === 200) {
                setMessage(response.data.message || "Deleted successfully!");
            }
            return response.status; 
        } catch (err) {
            setError(err.response?.data?.message || "Failed to delete");
            console.error("Error deleting data:", err);
            return null;
        } finally {
            setIsLoading(false);
        }
    };

    return { deleteData, isLoading, message, error };
};
