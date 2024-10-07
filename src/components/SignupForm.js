import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function SignupForm({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

  const submitHandler = (e) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      toast.error("Password not matched.");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account created");
    const accountData = {
      ...data,
    };

    const finalData = {
      ...accountData,
      accountType,
    };

    navigate("/dashboard");
    console.log("printing Final account data");
    console.log(finalData);
  };
  return (
    <div>
      {/* students-Instructor tab */}
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : " bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Students
        </button>
        <button
          className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : " bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>
      <form onSubmit={submitHandler}>
        {/* firstName and lastName */}
        <div className="flex gap-x-4 mt-[20px]">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name:<sup className="text-pink-200">&nbsp;&nbsp;*</sup>
            </p>

            <input
              className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              type="text"
              value={data.firstName}
              name="firstName"
              required
              onChange={changeHandler}
              placeholder="Enter First Name"
            ></input>
          </label>

          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name: <sup className="text-pink-200">&nbsp;*</sup>
            </p>

            <input
              className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              type="text"
              placeholder="Enter Last Name"
              onChange={changeHandler}
              required
              name="lastName"
              value={data.lastName}
            />
          </label>
        </div>

        {/* email */}
        <div className="mt-[20px]">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Email Address:<sup className="text-pink-200">&nbsp;&nbsp;*</sup>
            </p>

            <input
              className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              type="email"
              placeholder="Enter Email Address "
              onChange={changeHandler}
              required
              name="email"
              value={data.email}
            />
          </label>
        </div>

        {/* create and confirm password */}
        <div className="flex gap-x-4 w-full mt-[20px]">
          <label className="relative w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password:<sup className="text-pink-200">&nbsp;&nbsp;*</sup>
            </p>

            <input
              className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              onChange={changeHandler}
              required
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
          </label>

          <label className="relative w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password:
              <sup className="text-pink-200"> &nbsp;*</sup>
            </p>

            <input
              className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={changeHandler}
              required
              name="confirmPassword"
              value={data.confirmPassword}
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[40px] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button className="bg-yellow-50 rounded-[8px] font-medium mt-6 text-richblack-900 py-[8px] px-[12px] w-full">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
