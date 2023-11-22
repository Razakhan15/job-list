import React from "react";
import {
  ArrowTrendingUpIcon,
  PlayCircleIcon,
  CalendarIcon,
  BanknotesIcon,
  MapPinIcon,
  ClockIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

const ListingCard = ({
  title,
  company,
  partfull,
  duration,
  location,
  stipend,
  stipend_for,
  availability,
}) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="lg:space-y-3 space-y-1">
          <div className="border border-gray-400 w-fit px-2 py-1 flex items-center space-x-2 ">
            <ArrowTrendingUpIcon className="h-4 w-4 lg:h-5 lg:w-5" />
            <span className="text-xs lg:text-base">Actively hiring</span>
          </div>
          <h1 className="lg:text-2xl font-medium text-lg">{title}</h1>
          <h2 className="text-base lg:text-xl text-gray-500 font-medium">
            {company}
          </h2>
        </div>
        <div className="w-28 hidden lg:block">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/800px-Google_Chrome_icon_%28February_2022%29.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="lg:mt-8 mt-4 space-y-4 lg:space-y-8">
        {location ? (
          <div className="flex items-center space-x-2 ">
            <MapPinIcon className="h-4 w-4 lg:h-5 lg:w-5" />
            <span className="text-base lg:text-xl">{location}</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2 ">
            <HomeIcon className="h-4 w-4 lg:h-5 lg:w-5" />
            <span className="text-base lg:text-xl">Remote</span>
          </div>
        )}
        <div>
          <div className="flex flex-wrap lg:space-x-9 text-gray-400 font-medium  space-y-2 md:space-y-0 md:space-x-4  lg:uppercase">
            <div className="flex justify-center items-center space-x-2">
              <PlayCircleIcon className="h-4 w-4 lg:h-5 lg:w-5" />
              <label className="hidden lg:text-base lg:block">start date</label>
              <span className="text-sm lg:hidden">Starts Immediately</span>
            </div>
            <div className="flex justify-center items-center ml-5 md:ml-0 space-x-2">
              <CalendarIcon className="h-4 w-4 lg:h-5 lg:w-5" />
              <label className="hidden lg:text-base lg:block">duration</label>
              <span className="text-sm lg:hidden">{duration}</span>
            </div>
            {stipend && (
              <div className="flex justify-center items-center  space-x-2">
                <BanknotesIcon className="h-4 w-4 lg:h-5 lg:w-5" />
                <label className="hidden lg:text-base lg:block">stipend</label>
                <span className="text-sm lg:hidden">
                  ₹ {stipend} {stipend_for}{" "}
                </span>
              </div>
            )}
          </div>
          <div className="hidden ml-2 lg:space-x-16 lg:block">
            <span className="text-xl">Immediately</span>
            <span className="text-xl">{duration}</span>
            {stipend && (
              <span className="text-xl">
                ₹ {stipend} {stipend_for}
              </span>
            )}
          </div>
        </div>
        <div className="xl:space-y-0 lg:text-lg md:flex xl:space-x-5 flex-wrap">
          <div className="flex items-center bg-gray-300 px-1.5 py-1 rounded-md w-fit space-x-1">
            <ClockIcon className="h-4 w-4 lg:h-5 lg:w-5" />
            <span>2 weeks ago</span>
          </div>
          {availability === "1" ? (
            <div className="bg-gray-300 px-1.5 py-1 mt-3 md:mt-0 md:ml-4 rounded-md w-fit">
              <p>Internship with job offer</p>
            </div>
          ) : null}

          <div className="bg-gray-300 px-1.5 py-1 mt-3 md:mt-0 md:ml-4 rounded-md w-fit">
            <p>{partfull}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingCard;
