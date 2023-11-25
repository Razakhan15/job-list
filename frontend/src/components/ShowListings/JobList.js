import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import Filter from "../../partials/Filter";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../baseurl/axios";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Header from "../Header";

const JobList = () => {
  const nav = useNavigate();
  const [data, setData] = useState([]);
  console.log(data)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("role") !== "student") {
      nav("/student/login");
    }
  }, []);

  const displayData = async () => {
    try {
      const res = await axios.get("/joblists");
      setData(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  };

  useEffect(() => {
    displayData();
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ClimbingBoxLoader color="#50C878" />
        </div>
      ) : (
        <>
          <Header />
          <Link to={'/internships'} className="absolute right-10 top-20 bg-emerald-300 p-2 rounded-lg font-bold shadow-lg">Internships</Link>
          <div className="relative">
            <p className="hidden lg:block absolute right-1/3 top-5 xl:top-36 text-3xl font-medium">
              {data.length} Total Jobs
            </p>
          </div>
          <div className="lg:p-10 xl:p-52 max-w-screen-2xl flex justify-evenly 2xl:m-auto">
            <Filter />
            <div className="m-5 xl:w-3/5 space-y-10">
              {data.length > 0
                ? data.map((item) => (
                    <div
                      key={item.id}
                      className=" p-5 shadow-lg border rounded-xl "
                    >
                      <ListingCard
                        id={item.id}
                        title={item.profile}
                        company={item.cmp.name}
                        tags={item.tags}
                        type={item.type}
                        partfull={item.period}
                        duration={item.duration}
                        openings={item.openings}
                        location={item.city}
                        description={item.description}
                        stipend={item.stipend}
                        stipend_for={item.stipend_paid_for}
                        perks={item.perks}
                        availability={item.availability}
                      />
                      <div className="space-y-5">
                        <hr className=" border-gray-200 mt-5" />
                        <div className="relative h-8">
                          <Link to={"/jobs/detail/" + item.id}>
                            <button className="border p-2 border-gray-400 absolute bottom-0 right-0 transition ease-in-out delay-100 hover:bg-gray-800 hover:text-white">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default JobList;
