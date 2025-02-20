import React, { useState } from "react";
import Loginbg from "../../assests/Loginbg.png";
import { useNavigate } from "react-router-dom";
import poster from "../../assests/poster.png";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
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
          <p className="text-stone-600 font-medium text-2xl mt-2 font-roboto">
            LOGIN
          </p>

          <form
            className="w-full mt-5 flex flex-col gap-4 font-roboto"
            onSubmit={handleLogin}
          >
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

            <button
              onClick={() => navigate("/admin/pharmacy")}
              type="submit"
              className="bg-slate-900 text-white text-xl p-3 font-medium  font-roboto rounded-lg mt-8"
            >
              Login
            </button>
          </form>
        </div>
        <div>
          <img
            className="absolute right-10 top-0 w-[530px] h-[500px] object-contain bg-primary py-10"
            src={poster}
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
