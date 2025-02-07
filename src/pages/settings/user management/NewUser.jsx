import React, { useState } from "react";

const NewUser = () => {
  const [designation, setDesignation] = useState("Doctor");
  const [name, setName] = useState("Mathews");
  const [userRole, setUserRole] = useState("Doctor");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const userData = { designation, name, userRole, username, password };
      console.log("User Data:", userData);
    }
  };

  const handleDiscard = () => {
    setDesignation("Doctor");
    setName("Mathews");
    setUserRole("Doctor");
    setUsername("");
    setPassword("");
    setErrors({});
  };

  return (
    <section className="p-4 w-full">
      <form onSubmit={handleSubmit}>
        <p className="text-primary text-lg font-medium">New User</p>
        <div className="py-3">
          <div className="flex justify-between">
            <div>
              <p className="text-lg font-medium text-stone-600 py-4">Designation</p>
              <select
                className="border-2 border-stone-400 w-[470px] p-3 rounded-md outline-none"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              >
                <option>Doctor</option>
                <option>Nurse</option>
                <option>Patient</option>
              </select>
            </div>
            <div>
              <p className="text-lg font-medium text-stone-600 py-4">Name</p>
              <select
                className="border-2 border-stone-400 w-[470px] p-3 rounded-md outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              >
                <option>Mathews</option>
                <option>Praveen</option>
                <option>David</option>
              </select>
            </div>
          </div>
          <div>
            <p className="text-lg font-medium text-stone-600 py-4 mt-2">User Role</p>
            <select
              className="border-2 border-stone-400 w-[470px] p-3 rounded-md outline-none"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
            >
              <option>Doctor</option>
              <option>Patient</option>
              <option>Nurse</option>
            </select>
          </div>
          <div className="flex mt-2 text-lg text-stone-600 justify-between">
            <div>
              <p className="font-medium py-4">Username</p>
              <input
                type="text"
                className="border-2 border-stone-400 w-[470px] p-3 rounded-md mt-2 outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && <p className="text-red-500">{errors.username}</p>}
            </div>
            <div>
              <p className="font-medium py-4">Password</p>
              <input
                type="password"
                className="border-2 border-stone-400 w-[460px] p-3 rounded-md mt-2 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>
          </div>
          <div className="flex mt-7 gap-7 items-center justify-end">
            <p className="text-red-600 cursor-pointer text-lg" onClick={handleDiscard}>
              Discard
            </p>
            <button
              type="submit"
              className="w-[15%] bg-primary p-2 text-white rounded-lg hover:bg-primary transition text-lg"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default NewUser;