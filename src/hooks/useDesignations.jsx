import { useEffect, useState } from 'react';
import { fetch } from '../api/fetch';

export const useDesignations = () => {
    const [designations, setDesignations] = useState(["123","geloo"]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDesignations = async () => {
            setIsLoading(true);
            try {
                // const response = await fetch.get('/designation');
                const response = await fetch.get('/get-all-designation');

                
                const designationOptions = response.data.data.map(designation => designation.title);
                setDesignations(designationOptions);
                setError(null);
            } catch (err) {
                setError(err.message);
                setDesignations([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDesignations();
    }, []);

    return { designations, isLoading, error };
};