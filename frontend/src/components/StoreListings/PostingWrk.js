import React, { useState } from "react";
import Intern from "./Intern";
import Jobs from "./Jobs";
import Header from "../Header";

const PostingWrk = () => {
  const [status, setStatus] = useState(1);

  function radioHandler(state) {
    setStatus(state);
  }

  return (
    <>
    <Header/>
      <div className="md:w-1/2 m-auto p-5">
        <h1 className="text-center mt-5 text-3xl font-semibold">
          Post internship/job
        </h1>
        <h2 className="font-semibold text-xl mt-5">Opportunity type</h2>
        <div className="border border-gray-300 flex gap-4 p-5 mt-2">
          <div className="flex items-center justify-center space-x-2">
            <input
              type="radio"
              onChange={(e) => radioHandler(1)}
              name="jb"
              id=""
              checked={status === 1}
            />
            <label htmlFor="">Internship</label>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <input
              type="radio"
              onChange={(e) => radioHandler(2)}
              name="jb"
              id=""
              checked={status === 2}
            />
            <label htmlFor="">Jobs</label>
          </div>
        </div>
        {status === 1 && <Intern />}
        {status === 2 && <Jobs />}
      </div>
    </>
  );
};

export default PostingWrk;
