import React, { useState } from "react";
import axios from "../../baseurl/axios";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

const Intern = () => {
  const initialValues = {
    cmp_id: "",
    profile: "",
    skills: "",
    type: "",
    period: "",
    city: "",
    no_openings: "",
    duration: "",
    responsibilites: "",
    stipend_type: "",
    stipend: "",
    stipend_paid_for: "",
    perks: "",
    ppo: "",
  };
  const nav = useNavigate();
  const [formValues, setFormValues] = useState(initialValues);
  const [status, setStatus] = useState(false);
  const [stipendRadio, setStipendRadio] = useState(false);
  const [presentPerks, setPresentPerks] = useState([]);
  const [dur, setDur] = useState("Month");
  const [durationValue, setDurationValue] = useState("1");
  const [formerrors, setFormerrors] = useState([]);
  const [checkbox, setCheckbox] = useState(false);
  function stipendRadioHandler(state) {
    setStipendRadio(state);
  }

  function radioHandler(state) {
    setStatus(state);
  }

  const handleChange = (e, state) => {
    const { name, value } = e.target;
    //IF TYPE IS REMOTE THEN WE DONT WANT USER TO ENTER CITY
    if (name === "type") {
      radioHandler(state);
      if (value === "Remote") formValues.city = null;
    }
    //IF STIPEND IS UNPAID THEN WE DONT WANT USER TO ENTER AMOUNT
    else if (name === "stipend_type") {
      stipendRadioHandler(state);
      if (value === "Unpaid") formValues.stipend = null;
    }
    //ADDING AND UPDATING VALUE OF ARRAY
    else if (name === "perk") {
      let newArray = [...presentPerks, e.target.value];
      if (presentPerks.includes(e.target.value)) {
        newArray = newArray.filter((item) => item !== e.target.value);
      }
      setPresentPerks(newArray);
      formValues.perks = newArray.toString();
    } else if (name === "ppo") {
      if (e.target.checked) {
        setCheckbox(true);
      } else {
        setCheckbox(false);
      }
    }
    formValues.cmp_id = localStorage.getItem("cmp_id");
    formValues.duration = durationValue + " " + dur;
    formValues.ppo = checkbox;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  const postData = async () => {
    try {
      await axios.post("/postinternship", formValues);
    } catch (error) {
      setFormerrors(error.response.data.errors);
      // console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} >
        <div className="mt-5">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Internship details</h2>
            <div className="p-5 flex flex-col border border-gray-300 space-y-1.5">
              <label htmlFor="profile" className="font-semibold">
                Internship profile
              </label>
              <input
                onChange={handleChange}
                className="p-2 border border-gray-300"
                type="text"
                name="profile"
                id="profile"
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
                id="skills"
              />
              {formerrors && (
                <p className="text-red-600">{formerrors.skills}</p>
              )}
              <label
                htmlFor="InternType"
                className="font-semibold items-center"
              >
                Internship type
              </label>
              <div className="flex gap-2">
                <input
                  type="radio"
                  onChange={(e) => handleChange(e, true)}
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
                </>
              )}
              <label htmlFor="openings" className="font-semibold">
                Number of openings
              </label>
              <input
                onChange={handleChange}
                min={1}
                max={100}
                className="p-2 border border-gray-300"
                type="number"
                name="no_openings"
                id="openings"
              />
              {formerrors && (
                <p className="text-red-600">{formerrors.no_openings}</p>
              )}
              <label className="font-semibold">Internship start date</label>
              <div className="flex gap-2 items-center">
                <input type="radio" name="" id="startDate" readOnly checked />
                <label htmlFor="startDate">
                  Immediately (within next 30 days)
                </label>
              </div>
              <label htmlFor="duration" className="font-semibold">
                Internship duration
              </label>
              <div className="flex gap-3">
                <div>
                  <select
                    onChange={(e) => setDurationValue(e.target.value)}
                    className="p-2 border border-gray-300"
                    name="duration"
                  >
                    <option value="" disabled>
                      Choose duration
                    </option>
                    <option className="p-2" value="1">
                      1
                    </option>
                    <option className="p-2" value="2">
                      2
                    </option>
                    <option className="p-2" value="3">
                      3
                    </option>
                    <option className="p-2" value="4">
                      4
                    </option>
                    <option className="p-2" value="5">
                      5
                    </option>
                    <option className="p-2" value="6">
                      6
                    </option>
                  </select>
                </div>
                <div>
                  <select
                    onChange={(e) => setDur(e.target.value)}
                    className="p-2 border border-gray-300"
                    name="duration"
                    id=""
                  >
                    <option value="month">Month</option>
                    <option value="week">Week</option>
                  </select>
                </div>
              </div>
              <label htmlFor="res" className="font-semibold">
                Intern’s responsibilities
              </label>
              <textarea
                onChange={handleChange}
                name="responsibilites"
                id="res"
                className="border border-gray-300 p-2"
                minLength={500}
                cols="30"
                rows="5"
                defaultValue="Selected intern's day-to-day responsibilities include: 
                            1.
                            2.
                            3."
              ></textarea>
              {formerrors && (
                <p className="text-red-600">{formerrors.responsibilites}</p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-5 space-y-2">
          <h1 className="text-xl font-semibold">Stipend & perks</h1>
          <div className="border border-gray-300 p-5 space-y-5">
            <label className="font-semibold" htmlFor="">
              Stipend
            </label>
            <div className="flex gap-2">
              <input
                onChange={(e) => handleChange(e, true)}
                type="radio"
                name="stipend_type"
                value={"Paid"}
              />
              <label htmlFor="paid">Paid</label>
              <input
                onChange={(e) => handleChange(e, false)}
                type="radio"
                name="stipend_type"
                value={"Unpaid"}
              />
              <label htmlFor="unpaid">Unpaid</label>
            </div>
            {formerrors && (
              <p className="text-red-600">{formerrors.stipend_type}</p>
            )}
            {stipendRadio && (
              <>
                <div className="flex gap-5">
                  <div className="flex flex-col">
                    <input
                      onChange={handleChange}
                      min={1000}
                      max={100000}
                      className="border border-gray-300 p-2"
                      type="number"
                      name="stipend"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <select
                      required
                      onChange={handleChange}
                      className="border border-gray-300 p-2"
                      name="stipend_paid_for"
                      id=""
                    >
                      <option value="">Select</option>
                      <option value="/month">/month</option>
                      <option value="/week">/week</option>
                      <option value="lump-sum">lump-sum</option>
                    </select>
                  </div>
                </div>
              </>
            )}
            <h1 className="font-semibold">
              Perks{" "}
              <span className="text-gray-400 font-normal ">(optional)</span>
            </h1>
            <div className="flex gap-2 md:gap-5 flex-col md:flex-row">
              <div className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="perk"
                    onChange={handleChange}
                    value="Certificate"
                  />
                  <label htmlFor="certificate">Certificate</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="perk"
                    onChange={handleChange}
                    value="Letter of recommendation"
                  />
                  <label htmlFor="recom">Letter of recommendation</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="perk"
                    onChange={handleChange}
                    value="Flexible work hours"
                  />
                  <label htmlFor="wrkHrs">Flexible work hours</label>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="perk"
                    onChange={handleChange}
                    value="5 days a week"
                  />
                  <label htmlFor="">5 days a week</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="perk"
                    onChange={handleChange}
                    value="Informal dress code"
                  />
                  <label htmlFor="dressCd">Informal dress code</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="perk"
                    onChange={handleChange}
                    value="Free snacks & beverages"
                  />
                  <label htmlFor="snks">Free snacks & beverages</label>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <h1 className="font-semibold">
                Does this internship come with a pre-placement offer (PPO)?{" "}
                <span className="font-normal text-sm text-gray-500">
                  (Optional)
                </span>{" "}
              </h1>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  onChange={handleChange}
                  className="sr-only peer"
                  name="ppo"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-600"></div>
              </label>
            </div>
          </div>
        </div>
        <div className="relative">
          <button className="bg-emerald-400 p-2 absolute top-5 right-0 rounded-lg text-white hover:bg-emerald-600 transition delay-100">
            Post Intership
          </button>
        </div>
      </form>
    </>
  );
};

export default Intern;
