import {
  EllipsisVerticalIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

const UploadedWrk = () => {
  const [ishow, setIshow] = useState(false);
  const handleClick = (e) => {
    setIshow(!ishow);
  };
  return (
    <div>
      <div className="">
        <table className="w-11/12 m-auto border">
          <tbody>
            <tr className="uppercase text-gray-400">
              <th className="p-4 font-semibold w-2/12 ">profile</th>
              <th className="p-4 font-semibold w-2/12 ">status</th>
              <th className="p-4 font-semibold w-2/12 ">total views</th>
              <th className="p-4 font-semibold w-2/12 ">action</th>
              <th className="p-4 font-semibold w-2/12 ">share on linkedin</th>
            </tr>
            <tr className="border-t">
              <td className="text-center p-5">Web developer</td>
              <td className="text-center">
                <span className="bg-green-100 text-green-700 px-5 py-1 rounded-full inline-block">
                  Listed
                </span>
                <QuestionMarkCircleIcon className="inline-block ml-1 w-7 h-7 text-green-600" />
              </td>
              <td className="text-center">1234</td>
              <td className="text-center">Ready</td>
              <td className="text-center relative">
                <p className="inline-block">share</p>
                <button
                  onClick={handleClick}
                  className={
                    ishow
                      ? "absolute right-3 bottom-4 bg-gray-300 inline-block rounded-full p-1"
                      : "absolute p-1 right-3 bottom-4 inline-block rounded-full"
                  }
                >
                  <EllipsisVerticalIcon className=" w-5 h-5 " />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    </div>
  );
};

export default UploadedWrk;
