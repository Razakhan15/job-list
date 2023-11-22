import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../baseurl/axios";

const CmpDetails = () => {
  const initialValues = {
    user_id: "",
    name: "",
    description: "",
    city: "",
    industry: "",
    employee_cnt: "",
    personal_web: "",
    social_media: "",
    business_license: "",
  };
  const nav = useNavigate();
  const [checkedWeb, setCheckedWeb] = useState(false);
  const [checkedSocials, setCheckedSocials] = useState(false);
  const [checkedLicense, setCheckedLicense] = useState(false);
  const [formerrors, setFormerrors] = useState({});
  const [formValues, setFormValues] = useState(initialValues);

  useEffect(() => {
    if (!localStorage.getItem("data")) {
      nav("/post-job");
    }
  }, []);

  const handleChange = (e) => {
    formValues.user_id = localStorage.getItem("data");
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  const postData = async () => {
    try {
      const res = await axios.post("/addcmpdetails", formValues);
      localStorage.setItem("cmp_id", res.data.id);
      nav("/jobs/form");
    } catch (error) {
      //ERROR HANDLING
      setFormerrors(error.response.data.errors);
    }
  };
  return (
    <>
      {formerrors && (
        <p className="text-center text-red-600">{formerrors.user_id}</p>
      )}
      <form onSubmit={handleSubmit} className="p-5">
        <div className="space-y-10">
          <h1 className="text-center text-3xl font-semibold mt-10">
            Organization details
          </h1>
          <div className="m-auto border p-5 md:w-1/2 space-y-5">
            <div className="flex flex-col ">
              <label>Name</label>
              <input
                className="m-2 border border-gray-300 p-2"
                type="text"
                name="name"
                id=""
                onChange={handleChange}
              />
              {formerrors && <p className="text-red-600">{formerrors.name}</p>}
            </div>
            <div className="flex flex-col">
              <label>About yourself and what you do</label>
              <textarea
                onChange={handleChange}
                name="description"
                id=""
                cols="30"
                rows="7"
                className="m-2 border border-gray-300 p-2"
              ></textarea>
              {formerrors && (
                <p className="text-red-600">{formerrors.description}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label>City</label>
              <input
                className="m-2 border border-gray-300 p-2"
                type="text"
                name="city"
                id=""
                onChange={handleChange}
              />
              {formerrors && <p className="text-red-600">{formerrors.city}</p>}
            </div>
            <div className="flex flex-col">
              <label>Industry</label>
              <input
                className="m-2 border border-gray-300 p-2"
                type="text"
                name="industry"
                id=""
                onChange={handleChange}
              />
              {formerrors && (
                <p className="text-red-600">{formerrors.industry}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label>No. of employees</label>
              <select
                name="employee_cnt"
                onChange={handleChange}
                className="w-1/2 border border-gray-300 m-2 p-2"
                autoFocus={true}
              >
                <option value="">Select an option</option>
                <option value="0-50">0-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="501-1000">501-1000</option>
              </select>
              {formerrors && (
                <p className="text-red-600">{formerrors.employee_cnt}</p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-3xl font-semibold text-center">
            Account Verification
          </h1>
          <div className="border md:w-1/2 m-auto mt-10 p-5">
            <p>
              Using any one of the options below, get your account verified and
              start posting internships/jobs
            </p>
            {!checkedWeb && !checkedLicense && !checkedSocials ? (
              <p className="text-red-600 mt-4">
                Select Atleast one of the bellow options
              </p>
            ) : null}
            <div className="flex items-baseline space-x-2 space-y-5">
              <input
                type="checkbox"
                name=""
                id=""
                onChange={(e) => setCheckedWeb(!checkedWeb)}
              />
              <div className="flex flex-col items-start">
                <label htmlFor="">
                  I have an active and functional website
                </label>
                <span className="text-gray-400">
                  Verify using your active & functional website
                </span>
                {checkedWeb ? (
                  <>
                    <div className="mt-5 font-bold">Enter website URL</div>{" "}
                    <input
                      type="url"
                      name="personal_web"
                      id=""
                      onChange={handleChange}
                      placeholder="Enter your Url"
                      className="border border-gray-300 p-1 m-4"
                    />
                  </>
                ) : null}
              </div>
            </div>
            <div className="flex items-baseline space-x-2 space-y-5">
              <input
                type="checkbox"
                name=""
                id=""
                onChange={(e) => setCheckedSocials(!checkedSocials)}
              />
              <div className="flex flex-col items-start">
                <label htmlFor="">I have an active social media page</label>
                <span className="text-gray-400">
                  Connect your most active social media profile of which you are
                  an admin with minimum 900-1100 likes/followers
                </span>
                {checkedSocials ? (
                  <>
                    <div className="mt-5 font-bold">Enter social media URL</div>{" "}
                    <input
                      type="url"
                      name="social_media"
                      id=""
                      onChange={handleChange}
                      placeholder="Enter your Url"
                      className="border border-gray-300 p-1 m-4"
                    />
                  </>
                ) : null}
              </div>
            </div>
            <div className="flex items-baseline space-x-2 space-y-5">
              <input
                type="checkbox"
                name=""
                id=""
                onChange={(e) => setCheckedLicense(!checkedLicense)}
              />
              <div className="flex flex-col items-start">
                <label htmlFor="">I have a business/practice license</label>
                <span className="text-gray-400">
                  Verify using any govt. issued document
                </span>
                {checkedLicense ? (
                  <>
                    <div className="mt-5 font-bold">Enter license URL</div>{" "}
                    <input
                      type="url"
                      name="business_license"
                      id=""
                      onChange={handleChange}
                      placeholder="Enter your Url"
                      className="border border-gray-300 p-1 m-4"
                    />
                  </>
                ) : null}
              </div>
            </div>
          </div>
          <div className="relative w-1/2 m-auto">
            <button
              disabled={!checkedWeb && !checkedLicense && !checkedSocials}
              className={
                !checkedWeb && !checkedLicense && !checkedSocials
                  ? "bg-gray-400 p-2 absolute right-0 top-5 text-white font-bold rounded-lg cursor-not-allowed"
                  : "bg-emerald-400 p-2 absolute right-0 top-5 text-white font-bold rounded-lg hover:bg-emerald-600 transition delay-100"
              }
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CmpDetails;
