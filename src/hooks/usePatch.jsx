
import { useState } from 'react';
import { useForm } from '../context/FormContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

export const usePatch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const { handleReset } = useForm();

  const PatchData = async (body) => {
    setIsLoading(true);
    try {
      const response = await axios.patch(url, body); 
      setMessage(response.data.message);

      if (response.status === 201 || response.status === 200) {
        toast.success(response.data.message || 'Data updated successfully!');
        handleReset(); 
      }

      return response.status;
    } catch (error) {
      setError(error.message);
      toast.error(error.message || 'Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    PatchData,
    isLoading,
    message,
    error,
  };
};
