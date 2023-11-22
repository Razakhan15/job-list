import React, { useState } from "react";
import axios from "../../baseurl/axios";
import { useNavigate } from "react-router-dom";
const Jobs = () => {
  const initialValues = {
    user_id: "",
    profile: "",
    skills: "",
    type: "",
    period: "",
    city: "",
    no_openings: "",
    description: "",
    preference: "",
    salary: "",
    perks: "",
    assessment1: "",
    assessment2: "",
  };
  const nav = useNavigate();
  const [formValues, setFormValues] = useState(initialValues);
  const [status, setStatus] = useState(false);
  const [presentPerks, setPresentPerks] = useState([]);
  const [formerrors, setFormerrors] = useState({});

  function radioHandler(state) {
    setStatus(state);
  }

  const handleChange = (e, state) => {
    const { name, value } = e.target;
    if (name === "type") {
      radioHandler(state);
      if (value === "Remote") formValues.city = null;
    } else if (name === "perk") {
      let newArray = [...presentPerks, e.target.value];
      if (presentPerks.includes(e.target.value)) {
        newArray = newArray.filter((item) => item !== e.target.value);
      }
      setPresentPerks(newArray);
      formValues.perks = newArray.toString();
    }
    formValues.cmp_id = localStorage.getItem("cmp_id");
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  const postData = async () => {
    try {
      await axios.post("/postjob", formValues);
      nav("/employer/dashboard");
    } catch (error) {
      setFormerrors(error.response.data.errors);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mt-5">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Job details</h2>
            <div className="p-5 flex flex-col border border-gray-300 space-y-3">
              <label htmlFor="profile" className="font-semibold">
                Job profile
              </label>
              <input
                onChange={handleChange}
                className="p-2 border border-gray-300"
                type="text"
                name="profile"
              />
              {formerrors && (
                <p className="text-red-600">{formerrors.profile}</p>
              )}
              <label htmlFor="skills" className="font-semibold">
                Skills required
              </label>
              <input
                onChange={handleChange}
                className="p-2 border border-gray-300"
                type="text"
                name="skills"
              />
              {formerrors && (
                <p className="text-red-600">{formerrors.skills}</p>
              )}

              <label
                htmlFor="InternType"
                className="font-semibold items-center"
              >
                Job type
              </label>
              <div className="flex gap-2">
                <input
                  onChange={(e) => handleChange(e, true)}
                  type="radio"
                  name="type"
                  value="InOffice"
                />
                <label htmlFor="inOffice">In-office/Hybrid</label>
                <input
                  onChange={(e) => handleChange(e, false)}
                  type="radio"
                  name="type"
                  value="Remote"
                />
                <label htmlFor="remote">Remote</label>
              </div>
              {formerrors && <p className="text-red-600">{formerrors.type}</p>}

              <label className="font-semibold">Part-time/Full-time</label>
              <div className="flex gap-2 items-center">
                <input
                  onChange={handleChange}
                  type="radio"
                  name="period"
                  value="Part-time"
                />
                <label htmlFor="parttime">Part-time</label>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="period"
                  value="Full-time"
                />
                <label htmlFor="fulltime">Full-time</label>
              </div>
              {formerrors && (
                <p className="text-red-600">{formerrors.period}</p>
              )}
              {status && (
                <>
                  <label className="font-semibold" htmlFor="city">
                    City/Cities
                  </label>
                  <input
                    onChange={handleChange}
                    className="p-2 border border-gray-300"
                    type="text"
                    name="city"
                    required
                  />
                  {formerrors && (
                    <p className="text-red-600">{formerrors.city}</p>
                  )}
                </>
              )}
              <label htmlFor="openings" className="font-semibold">
                Number of openings
              </label>
              <input
                onChange={handleChange}
                className="p-2 border border-gray-300"
                min={1}
                max={100}
                type="number"
                name="no_openings"
              />
              {formerrors && (
                <p className="text-red-600">{formerrors.no_openings}</p>
              )}

              <label htmlFor="res" className="font-semibold">
                Job description
              </label>
              <textarea
                onChange={handleChange}
                name="description"
                className="border border-gray-300 p-2"
                cols="30"
                rows="5"
                defaultValue="Key responsibilities:
                              1.
                              2.
                              3."
              ></textarea>
              {formerrors && (
                <p className="text-red-600">{formerrors.description}</p>
              )}

              <label htmlFor="res" className="font-semibold">
                Do you have any candidate preferences?{" "}
                <span className="text-sm text-gray-400 font-normal">
                  (Optional)
                </span>
              </label>
              <textarea
                onChange={handleChange}
                name="preference"
                className="border border-gray-300 p-2"
                cols="30"
                rows="5"
                placeholder="e.g. Only CS graduates preferred"
              ></textarea>
              {formerrors && (
                <p className="text-red-600">{formerrors.preference}</p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-5 space-y-2">
          <h1 className="text-xl font-semibold">Salary & perks</h1>
          <div className="border border-gray-300 p-5 space-y-5">
            <label className="font-semibold" htmlFor="">
              CTC
            </label>
            <div className="flex gap-5 items-center">
              <input
                onChange={handleChange}
                min={100000}
                max={10000000}
                className="border border-gray-300 p-2"
                type="number"
                name="salary"
              />
              <span>per year</span>
            </div>
            {formerrors && <p className="text-red-600">{formerrors.salary}</p>}

            <h1 className="font-semibold">
              Perks{" "}
              <span className="text-gray-400 font-normal ">(optional)</span>
            </h1>
            <div className="flex items-center gap-5 flex-wrap">
              <div className="flex gap-2">
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="perk"
                  value="Certificate"
                />
                <label htmlFor="certificate">Certificate</label>
              </div>
              <div className="flex gap-2">
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="perk"
                  value="Letter of recommendation"
                />
                <label htmlFor="recom">Letter of recommendation</label>
              </div>
              <div className="flex gap-2">
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="perk"
                  value="Flexible work hours"
                />
                <label htmlFor="wrkHrs">Flexible work hours</label>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <button className="bg-emerald-400 p-2 absolute top-5 right-0 rounded-lg text-white hover:bg-emerald-600 transition delay-100">
            Post Job
          </button>
        </div>
      </form>
    </>
  );
};

export default Jobs;
