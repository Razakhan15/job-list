import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Filter = () => {
  return (
    <div className="hidden lg:block">
    <div className="sticky top-5 w-full">
      <div className="flex flex-col border p-8 rounded-lg">
        <h1 className="text-center text-2xl font-semibold">Filter</h1>
        <div className="flex flex-col justify-start">
          <label className="text-xl font-medium">Profile</label>
          <input
            type="text"
            className="border p-3 border-gray-300"
            name=""
            id=""
          />
          <label className="text-xl font-medium">Location</label>
          <input
            type="text"
            className="border p-3 border-gray-300"
            name=""
            id=""
          />
          <div className="flex flex-col mt-5 space-y-4">
            <div className="flex items-center space-x-3 ">
              <input type="checkbox" className="w-5 h-5" name="" id="" />
              <label className="text-xl">Work From Home</label>
            </div>
            <div className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5" name="" id="" />
              <label className="text-xl">Part time</label>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-5 flex flex-col  max-w-md border p-8">
        <h1 className="text-center text-2xl font-semibold">Keyword Search</h1>
        <div className="flex mt-5">
          <input
            className="border w-full p-3 border-gray-300"
            type="text"
            name=""
            id=""
          />
          <button className="text-xl bg-black text-white p-2">
            <MagnifyingGlassIcon className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Filter