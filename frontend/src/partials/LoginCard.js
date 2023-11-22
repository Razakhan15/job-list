import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "../baseurl/axios";

const LoginCard = ({ link }) => {
  const nav = useNavigate();
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState([]);

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
      const res = await axios.post("/" + link, formValues);
      if (link === "loginstudent") {
        localStorage.setItem("data", JSON.stringify(res.data.id));
        localStorage.setItem("role", "student");
        nav("/internships");
      } else {
        localStorage.setItem("data", JSON.stringify(res.data.user_id));
        localStorage.setItem("cmp_id", JSON.stringify(res.data.cmp_id));
        localStorage.setItem("role", "employer");
        nav("/employer/dashboard");
      }
    } catch (error) {
      setFormErrors(error.response);
      // console.log(error);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-emerald-300 p-10">
      <div className="lg:w-1/4 md:w-1/2 m-auto bg-gray-100 p-5 rounded-2xl shadow-lg mt-16 shadow-emerald-600">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1 text-lg">
            <label className="font-semibold">Email</label>
            <input
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded-lg"
              type="email"
              name="email"
            />
          </div>
          <div className="space-y-1 text-lg">
            <label className="font-semibold">Password</label>
            <input
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded-lg"
              type="password"
              name="password"
            />
            {formErrors && <p className="text-red-600">{formErrors.data}</p>}
          </div>
          <div>
            <button className="bg-emerald-500 w-full p-2 rounded-md transition delay-150 hover:bg-emerald-800 text-white font-bold">
              Login
            </button>
          </div>
          <div>
            <center>
              <p>New to Internshala?</p>
              <p>
                Register (
                <Link
                  to={"/student/register"}
                  className="text-emerald-600 transition delay-150 hover:text-emerald-800"
                >
                  Student
                </Link>{" "}
                /{" "}
                <Link
                  to={"/post-job"}
                  className="text-emerald-600 transition delay-150 hover:text-emerald-800"
                >
                  Company
                </Link>
                )
              </p>
            </center>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
