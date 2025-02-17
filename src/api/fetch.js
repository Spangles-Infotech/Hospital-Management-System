import axios from "axios";


export const fetch = axios.create({
    baseURL:"https://hospital-backend-ke9i.onrender.com/api",
})