import axios from "axios";

export const fetch = axios.create({
    // baseURL:"https://hospital-backend-ke9i.onrender.com/api",
    // baseURL:"https://anakuzhi-asan.onrender.com/api",
       baseURL: "https://hospital-management-system-eexc.onrender.com/api",  // final render file prod
    
    // baseURL:"http://localhost:3500/api",
})
