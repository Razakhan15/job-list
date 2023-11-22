import React, { useEffect, useState } from "react";
import UploadedInternships from "./UploadedInternships";
import UploadedJobs from "./UploadedJobs";
import axios from "../../baseurl/axios";
import { useNavigate } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Header from "../Header";

const EmpDashboard = () => {
  const nav = useNavigate();
  const [button, setButton] = useState(true);
  const [cmpId, setCmpId] = useState();
  const [loading, setLoading] = useState(true);
  const id = localStorage.getItem("data");
  const handleButton = (e) => {
    if (e === "jb") setButton(false);
    else setButton(true);
  };

  const ifUserExist = async () => {
    try {
      const res = await axios.get("/getempdetails/" + id);
      console.log(res);
      if (res.data.length < 1) {
        nav("/employer/profile");
      } else {
        ifCompanyExist();
      }
    } catch (error) {
      nav("/employer/login");
    }
  };

  const ifCompanyExist = async () => {
    try {
      const res = await axios.get("/getcmpdetails/" + id);
      if (res.data.length < 1) {
        nav("/employer/company");
      } else {
        console.log("hello");
        setCmpId(res.data[0].id);
        localStorage.setItem("cmp_id", res.data[0].id);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      nav("/employer/login");
    }
  };

  const check = () => {
    ifUserExist();
  };

  useEffect(() => {
    check();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ClimbingBoxLoader color="#50C878" />
        </div>
      ) : (
        <div>
          <Header />
          <div className="flex justify-center items-center">
            <button
              onClick={(e) => handleButton("int")}
              className={
                button
                  ? "border-b-2 p-2 text-emerald-500 border-emerald-500"
                  : "border-b-2 p-2 transition-all ease-in-out translate delay-200"
              }
            >
              Internships
            </button>
            <button
              onClick={(e) => handleButton("jb")}
              className={
                !button
                  ? "border-b-2 p-2 text-emerald-500 border-emerald-500 "
                  : "border-b-2 p-2 transition-all ease-in-out translate delay-200"
              }
            >
              Jobs
            </button>
          </div>
          <div>
            {button ? (
              <UploadedInternships id={cmpId} />
            ) : (
              <UploadedJobs id={cmpId} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EmpDashboard;
