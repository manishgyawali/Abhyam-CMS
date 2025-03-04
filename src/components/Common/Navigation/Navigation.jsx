import React from "react";
import { CiBellOn } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import { TbMessage2Plus } from "react-icons/tb";

const Navigation = () => {
  return (
    <div className="bg-[#415FF2]  px-7 py-8 lg:pb-48 rounded-b-2xl flex items-center justify-between">
     {/* mobile navigation  */}
       <div className="lg:hidden">
          <RiMenu3Fill
            className="text-2xl text-white cursor-pointer"
          />
        </div>
      {/* Search Bar */}
      <div className="relative lg:flex hidden flex-col items-center">
        <input
          type="text"
          placeholder="Search here..."
          className="w-48 p-2 pl-10 text-sm rounded-full bg-[#6280F9] text-white placeholder-white outline-none"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 absolute top-2 left-3 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35m1.35-3.15a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>
      </div>

      {/* Icons and Profile */}
      <div className="flex items-center  gap-10">
        <div className="flex items-center gap-6">
          <div>
          <span class="relative flex items-center justify-center left-5 h-3 w-3">
            <span class="animate-ping absolute  inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-gray-200"></span>
          </span>
          <CiBellOn className="text-white cursor-pointer text-2xl" />
          </div>
          <div>
          <span class="relative flex items-center justify-center left-5 h-3 w-3">
            <span class="animate-ping absolute  inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-gray-200"></span>
          </span>
          <TbMessage2Plus className="text-white cursor-pointer text-xl" />
          </div>
        </div>

        {/* Profile Image */}
        <img
          src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"
          className="h-10 w-10 object-cover cursor-pointer  rounded-full"
        />
      </div>
    </div>
  );
};

export default Navigation;
