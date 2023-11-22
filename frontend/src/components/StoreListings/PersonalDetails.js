import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../baseurl/axios";

const PersonalDetails = () => {
  // FORM FILED VALUES IN OBJECT =>
  const initialValues = {
    user_id: "",
    fname: "",
    lname: "",
    email: "",
    contact: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  // ARRAY OF OBJECTS FOR ERRORS
  const [formerrors, setFormerrors] = useState({});

  const nav = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("data")) {
      nav("/post-job");
    }
  }, []);

  const handleChange = (e) => {
    // SELECTING INP FIELD
    const { name, value } = e.target;
    formValues.user_id = localStorage.getItem("data");
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    // AVOIDING RELOAD
    e.preventDefault();
    postData();
  };

  const postData = async () => {
    try {
      // GET BASEURL FROM axios.js
      const res = await axios.post("/addempdetails", formValues);
      nav("/employer/company");
    } catch (error) {
      setFormerrors(error.response.data.errors);
    }
  };

  // useEffect(() => {
  //   if (Object.keys(formerrors).length === 0 && isSubmit) {
  //     postData();
  //   }
  // }, [formerrors]);

  // ALTERNATE WAY TO VALIDATE FORM IF NOT USING AXIOS

  // const validate = (value) => {
  //   const errors = {};
  //   const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i;
  //   if (!value.fname) {
  //     errors.fname = "First name is required!";
  //   }
  //   if (!value.lname) {
  //     errors.lname = "Last name is required!";
  //   }
  //   if (!value.email) {
  //     errors.email = "E-mail is required!";
  //   } else if (!regex.test(value.email)) {
  //     errors.email = "This is not valid!";
  //   }
  //   if (!value.contact) {
  //     errors.contact = "Contact number is required!";
  //   }
  //   return errors;
  // };

  return (
    <div>
      <div className="lg:w-1/2 md:w-3/4 m-auto flex-col justify-center items-center p-5 md:p-0">
        <h1 className="text-3xl font-bold text-center m-10 ">Personal Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="md:flex flex-col flex-wrap border border-gray-300 p-5 justify-around space-y-3">
            <div className="md:flex justify-between gap-5">
              <div className="flex flex-col space-y-1 w-full">
                <label className="text-sm font-medium">First Name</label>
                <input
                  onChange={handleChange}
                  className="border border-gray-300 p-1"
                  type="text"
                  name="fname"
                />
                <p className="text-red-600">{formerrors.fname}</p>
              </div>
              <div className="flex flex-col space-y-1 w-full">
                <label className="text-sm font-medium">Last Name</label>
                <input
                  onChange={handleChange}
                  className="border border-gray-300 p-1 "
                  type="text"
                  name="lname"
                />
                <p className="text-red-600">{formerrors.lname}</p>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">E-mail</label>
              <input
                onChange={handleChange}
                className="border border-gray-300 p-1 w-full"
                type="text"
                name="email"
              />
              <p className="text-red-600">{formerrors.email}</p>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Mobile number</label>
              <input
                onChange={handleChange}
                className="border border-gray-300 p-1 w-full"
                type="number"
                name="contact"
              />
              <p className="text-red-600">{formerrors.contact}</p>
            </div>
          </div>
          <div className="relative mt-5">
            <button className="absolute right-0 bg-emerald-400 p-2 text-white rounded-lg font-bold hover:bg-emerald-600 transition delay-100">
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetails;
