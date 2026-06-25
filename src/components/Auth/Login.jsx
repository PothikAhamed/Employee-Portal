import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is :", email);
    console.log("password is :", password);
    setEmail("")
    setPassword("")
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="bg-transparent rounded-2xl shadow shadow-black">

        <form onSubmit={submitHandler} className="flex w-100 h-110 flex-col items-center justify-center gap-y-5">
          <input value={email} onChange={(e) => {
              setEmail(e.target.value)}} required type="email" placeholder="Enter mail" className="bg-transparent shadow shadow-black rounded-full text-[14px] w-60 h-10 outline-none px-5" />
          <input value={password} onChange={(e)=>{
            setPassword(e.target.value)}} required type="password" placeholder="Enter password" className="bg-transparent shadow shadow-black rounded-full text-[14px] w-60 h-10 outline-none px-5" />
          <button className="bg-transparent shadow shadow-black w-30 h-10 rounded-full text-[20px]">Login</button>
        </form>

      </div>
    </div>
  );
};

export default Login;
