import React, { useState } from "react";
import axios from '../../baseurl/axios'
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const initialValues = {
    email: "",
    password: "",
    fname: "",
    lname: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formerrors, setFormerrors] = useState({});
  const nav = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  const postData = async () => {
    try {
      await axios.post("/addnewstudent", formValues);
      nav("/student/login");
    } catch (error) {
      setFormerrors(error.response.data.errors);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-emerald-300 p-5 md:pt-10">
      <form onSubmit={handleSubmit}>
        <div className="lg:w-1/4 md:w-1/2 m-auto bg-gray-100 p-5 space-y-5 rounded-2xl shadow-lg shadow-emerald-600">
          <div className="space-y-1 text-lg">
            <label className="font-semibold">Official Email Id</label>
            <input
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded-lg"
              type="email"
              name="email"
            />
            <p className="text-red-600">{formerrors.email}</p>
          </div>
          <div className="space-y-1 text-lg">
            <label className="font-semibold">Password</label>
            <input
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded-lg"
              type="password"
              name="password"
            />
            <p className="text-red-600">{formerrors.password}</p>
          </div>
          <div className="flex gap-2 text-lg">
            <div>
              <label className="font-semibold" htmlFor="">
                First Name
              </label>
              <input
                onChange={handleChange}
                className="border border-gray-400 p-2 w-full rounded-lg mt-1"
                type="text"
                name="fname"
              />
              <p className="text-red-600">{formerrors.fname}</p>
            </div>
            <div>
              <label className="font-semibold" htmlFor="">
                Last Name
              </label>
              <input
                onChange={handleChange}
                className="border border-gray-400 p-2 w-full rounded-lg mt-1"
                type="text"
                name="lname"
              />
              <p className="text-red-600">{formerrors.lname}</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-400 font-semibold">
              By registering, you agree to our{" "}
              <span className="text-emerald-500 cursor-pointer transition delay-150 hover:text-emerald-800">
                Terms and Conditions.
              </span>
            </p>
          </div>
          <div>
            <button className="bg-emerald-500 w-full p-2 text-white font-bold transition delay-150 hover:bg-emerald-800">
              Register
            </button>
          </div>
          <center>
            <p>
              Already registered?{" "}
              <Link
                to={"/student/login"}
                className="text-emerald-500 transition delay-150 hover:text-emerald-900 cursor-pointer"
              >
                Login
              </Link>
            </p>
          </center>
        </div>
      </form>
    </div>
  );
};

export default Register;
