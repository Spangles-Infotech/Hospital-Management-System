import React, { useState } from "react";
import Loginbg from "../../assests/Loginbg.png"; 
import { useNavigate } from "react-router-dom";
import poster from "../../assests/poster.png";
import axios from "axios";

const Login = () => {

  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

 
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // const response = await axios.post("http:localhost:3500/api/auth/login", {
        const response = await axios.post("http://localhost:3500/api/auth/login",{
        userName: username,
        password: password
      });

      const { token, userId } = response.data;
      
      // Store token and userId in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      
      // Set authorization header for future requests
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      
      // Navigate to dashboard
      navigate("/admin/dashboard");
    } catch (error) {
      setError(error.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex justify-center items-center  bg-sky-50">
      
      <img
        className="absolute w-full h-full object-cover bg-sky-50 opacity-[5%]"
        src={Loginbg}
        alt="Login Background"
      />
<div className="flex">
<div className="w-[430px] h-[440px] bg-white relative p-10 shadow-lg rounded-md flex flex-col items-center font-roboto right-[280px]">
        <p className="text-stone-600 font-medium text-2xl mt-2 font-roboto">LOGIN</p>

       
        <form className="w-full mt-5 flex flex-col gap-4 font-roboto" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            className="w-full outline-none bg-cyan-50 p-4 rounded-lg mt-5 text-stone-600 "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full outline-none bg-cyan-50 p-4 rounded-lg mt-5 text-stone-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}
          <button
            type="submit"
            className="bg-slate-900 text-white text-xl p-3 font-medium font-roboto rounded-lg mt-8 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
      <div>
        <img 
        className="absolute right-10 top-0 w-[530px] h-[500px] object-contain bg-primary py-10"
        src={poster}/>
      </div>

</div>
     
      
    </section>
  );
};

export default Login;
