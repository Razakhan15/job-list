import React, { useEffect, useState } from "react";
import axios from "../../baseurl/axios";
import { useNavigate } from "react-router-dom";
import {
  EllipsisVerticalIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import Modal from "../../partials/Modal";

const UploadedJobs = ({ id }) => {
  const nav = useNavigate();
  const [store, setStore] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputs, setInputs] = useState([
    {
      label: "Internship profile",
      value: "",
      onChange: (value) => handleInputChange(0, value),
    },
    {
      label: "Skills required",
      value: "",
      onChange: (value) => handleInputChange(1, value),
    },
    {
      label: "Number of openings",
      value: "",
      onChange: (value) => handleInputChange(1, value),
    },
    // Add more input objects as needed
  ]);

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index].value = value;
    setInputs(newInputs);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [ishow, setIshow] = useState(false);
  const handleClick = (e) => {
    setIshow(!ishow);
  };
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("/getjob/" + id);
      // if (res.data.length < 1) {
      //   nav("/internship/form");
      // }
      console.log(res.data);
      setStore(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-14 mt-5 p-5 overflow-x-scroll md:overflow-hidden">
      <div className="border rounded-md border-gray-300 w-fit md:w-full">
        <div className="flex gap-10  font-semibold uppercase text-gray-400 p-4 text-center text-xs md:text-base">
          <div className="flex-1">profile</div>
          <div className="flex-1">status</div>
          <div className="flex-1">total views</div>
          <div className="flex-1">action</div>
          <div className="flex-1">share on linkedin</div>
        </div>
        {store.map((item) => (
          <div
            key={item.id}
            className="flex gap-10  border-t border-gray-300 p-4 text-center text-xs md:text-base"
          >
            <div className="flex-1">{item.profile}</div>
            <div className="flex-1">
              <span className="bg-green-100 text-green-700 px-5 py-1 rounded-full inline-block">
                Listed
              </span>
              <QuestionMarkCircleIcon className="hidden lg:inline-block ml-1 w-7 h-7 text-green-600" />
            </div>
            <div className="flex-1">1234</div>
            <div className="flex-1">ready</div>
            <div className="flex-1 relative">
              {" "}
              <span className="inline-block">share</span>
              <button
                onClick={handleClick}
                className={
                  ishow
                    ? "absolute lg:right-3 bg-gray-300 inline-block rounded-full  md:p-1 md:ml-5 lg:ml-0"
                    : "absolute   md:p-1 lg:right-3 inline-block rounded-full md:ml-5 lg:ml-0"
                }
              >
                <EllipsisVerticalIcon className=" w-5 h-5 " />
              </button>
            </div>
            {ishow ? (
              <div
                onClick={openModal}
                className="absolute right-6 md:right-9 lg:right-24 cursor-pointer border bg-white top-[17rem] md:top-[17.5rem] lg:top-64 w-28 rounded-sm shadow-lg p-2 text-center font-semibold text-emerald-500"
              >
                Edit
              </div>
            ) : null}
          </div>
        ))}
        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          inputs={inputs}
          title="My Modal"
        />
      </div>
    </div>
  );
};

export default UploadedJobs;
