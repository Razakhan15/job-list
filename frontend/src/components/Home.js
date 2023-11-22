import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const Home = () => {
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-emerald-300 ">
      <div className="font-semibold p-4 flex justify-between">
        <h1 className="text-2xl">CareerForge</h1>
        <div className="flex gap-4 ">
          <Link to={"/student/login"}>
            <button className="border-2 p-2 border-white">Login</button>
          </Link>
          <Link to={"/student/register"}>
            <button className="bg-emerald-400 p-2 text-gray-100">Register</button>
          </Link>
          <Link to={"/post-job"}>
            <button className="p-2">Hire Talent</button>
          </Link>
        </div>
      </div>
      <CSSTransition
        in={isPageLoaded}
        timeout={1000}
        classNames="fade"
        unmountOnExit
      >
        <div className="flex justify-center items-center gap-10 p-5">
          <div className="w-1/2">
            <div className="text-5xl font-bold mt-20 underline">
              Make your dream career a reality
            </div>
            <p className="mt-8 text-lg font-semibold ">
              Join our dynamic team! We're seeking passionate individuals for
              internship/job opportunities. Explore exciting roles, gain
              hands-on experience, and grow your career with us. Browse
              listings, apply with ease, and embark on a journey of professional
              development. Elevate your skills in a collaborative environment
              that values innovation and fosters growth. Your future starts
              here!
            </p>
          </div>
          <div>
            <img src="/pic.png" alt="" />
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Home;
