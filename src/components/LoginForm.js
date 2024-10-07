import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
function LoginForm({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  function submitHandler(e) {
    e.preventDefault();
    setIsLoggedIn(true);

    navigate("/dashboard");
    toast.success("Logged In");
    const loginData = {
      ...data,
    };
    console.log("Printing login data..");
    console.log(loginData);
  }
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full  gap-y-4 mt-6"
    >
      <label className="w-full">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
          type="email"
          placeholder="Enter email address"
          required
          onChange={changeHandler}
          name="email"
          value={data.email}
        />
      </label>

      <label className="w-full relative">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Password<sup className="text-pink-200">*</sup>
        </p>
        <input
          className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          required
          onChange={changeHandler}
          name="password"
          value={data.password}
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute top-[40px] right-3  cursor-pointer "
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <Link to="#">
          <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
            Forgot Password
          </p>
        </Link>
      </label>
      <button className="bg-yellow-50 rounded-[8px] font-medium mt-6 text-richblack-900 py-[8px] px-[12px]">
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
