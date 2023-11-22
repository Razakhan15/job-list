import React, { useEffect, useState } from "react";
import UploadedWrk from "./UploadedWrk";
import axios from "../../baseurl/axios";
import { useNavigate } from "react-router-dom";
import {
  EllipsisVerticalIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import Modal from "../../partials/Modal";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const UploadedInternships = ({ id }) => {
  const nav = useNavigate();
  const [store, setStore] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
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
      const res1 = await axios.get("/getinternship/" + id);
      const res2 = await axios.get("/getjob/" + id);
      if (res1.data.length >= 1 || res2.data.length >= 1) {
        setStore(res1.data);
      } else {
        nav("/jobs/form");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  };

  return (
    <div className="lg:px-14 mt-5 p-5 overflow-x-scroll md:overflow-hidden">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ClimbingBoxLoader color="#50C878" />
        </div>
      ) : (
        <div className="border rounded-md border-gray-300 w-fit md:w-full">
          <div className="flex gap-10 font-semibold uppercase text-gray-400 p-4 text-center text-xs md:text-base">
            <div className="flex-1">profile</div>
            <div className="flex-1">status</div>
            <div className="flex-1">total views</div>
            <div className="flex-1">action</div>
            <div className="flex-1">share on linkedin</div>
          </div>
          {store.map((item) => (
            <div
              key={item.id}
              className="flex border-t gap-10 border-gray-300  text-center p-4 text-xs md:text-base"
            >
              <div className="flex-1">{item.profile}</div>
              <div className="flex-1 ">
                <span className="bg-green-100 text-green-700 px-5 py-1 rounded-full inline-block">
                  Listed
                </span>
                <QuestionMarkCircleIcon className="hidden lg:inline-block ml-1 w-5 h-5 md:w-7 md:h-7 text-green-600" />
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
                      ? "absolute lg:right-3 bg-gray-300 inline-block rounded-full md:p-1 md:ml-5 lg:ml-0"
                      : "absolute md:p-1 lg:right-3 inline-block rounded-full md:ml-5 lg:ml-0"
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
      )}
    </div>
  );
};

export default UploadedInternships;
