import {
  ArrowTopRightOnSquareIcon,
  CalendarDaysIcon,
  UserPlusIcon,
  UsersIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const CmpProvidedDtls = ({
  name,
  description,
  responsibilites,
  created_at,
  skills,
  perks,
  openings,
}) => {
  const skillarr = skills.split(",");
  const perkarr = perks.split(",");
  const date = new Date(created_at);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  return (
    <>
      <div className="space-y-5 mt-10">
        <div className="flex items-center space-x-3 text-gray-400">
          <UsersIcon className="h-8 w-8" />
          <span className="text-xl">234 applicants</span>
        </div>
        <hr />
        <div className="space-y-3 ">
          <h1 className="text-xl font-bold">About {name}</h1>
          <a className="flex gap-1 text-emerald-400 hover:text-emerald-700 w-fit">
            Website <ArrowTopRightOnSquareIcon className="h-5 w-5" />
          </a>
          <p>{description}</p>
          <div className="border p-3">
            <h1 className="font-bold">Activity on Internshala</h1>
            <div className="flex justify-between w-3/4 mt-3">
              <div className="flex items-center space-x-1">
                <CalendarDaysIcon className="h-5 w-5" />
                <span>
                  Hiring since {month} {year}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <WalletIcon className="h-5 w-5" />
                <span>95 opportunities posted</span>
              </div>
              <div className="flex items-center space-x-1">
                <UserPlusIcon className="h-5 w-5" />
                <span>8 candidates hired</span>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-lg">About the internship</h1>
            <p className="whitespace-pre-line">{responsibilites}</p>
          </div>
          <div>
            <span className="text-lg font-bold">Skill(s) required</span>
            <div className="flex flex-wrap ">
              {skillarr.map((item) => (
                <span key={item.id} className="ml-3">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-md font-bold">
              Earn certifications in these skills
            </h1>
            <div className="flex flex-wrap mt-2">
              <div className="ml-4">Learn Social Media Marketing</div>
              <div className="ml-4">Learn Business Communication</div>
              <div className="ml-4">Learn Business Communication</div>
              <div className="ml-4">Learn Business Communication</div>
              <div className="ml-4">Learn Business Communication</div>
              <div className="ml-4">Learn Business Communication</div>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-lg">Who can apply</h1>
            <p className="mt-2 whitespace-pre-line">
              Only those candidates can apply who: 1. are available for full
              time (in-office) internship 2. can start the internship between
              15th Sep'23 and 20th Oct'23 3. are available for duration of 3
              months 4. have relevant skills and interests
            </p>
            <p>* Women wanting to start/restart their career can also apply.</p>
          </div>
          <div>
            <h1 className="text-lg font-bold">Perks</h1>
            <div className="flex ">
              {perkarr.map((item) => (
                <span key={item.id} className="ml-8">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-lg font-bold">Number of openings</h1>
            <span>{openings}</span>
          </div>
          <div className="text-center">
            <button className="p-4 bg-gray-700 text-white font-bold rounded-md transition-all delay-100 ease-in-out hover:bg-gray-800">Apply</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CmpProvidedDtls;
