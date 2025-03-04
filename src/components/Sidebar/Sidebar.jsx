import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { IoHomeOutline, IoPersonCircleOutline } from "react-icons/io5";
import { CiViewBoard, CiEdit } from "react-icons/ci";
import { FaRegImages, FaRegComments, FaHandsHelping } from "react-icons/fa";
import { MdOutlineContactMail, MdOutlineEventNote } from "react-icons/md";

import { PiMapPinLine, PiCertificate } from "react-icons/pi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sidebarData = [
    { title: "Dashboard", icon: <IoHomeOutline />, path: "/" },
    { title: "Banner", icon: <CiViewBoard />, path: "/banner" },
    { title: "Destinations", icon: <PiMapPinLine />, path: "/destinations" },
    { title: "About Us", icon: <IoPersonCircleOutline />, path: "/aboutus" },
   
    { title: "Testimonials", icon: <FaRegComments />, path: "/testimonials" },
    {
      title: "Get Success",
      icon: <IoPersonCircleOutline />,
      path: "/getsuccess",
    },
  
    { title: "Contact Us", icon: <MdOutlineContactMail />, path: "/contactus" },
    {
      title: "Contact Inquiry",
      icon: <MdOutlineContactMail />,
      path: "/contactinquiry",
    },
   
   {
      title: "Page Layout",
      icon: <CiViewBoard />,
      subdata: [
        // { title: "Destinations", path: "/destinationst" },
        // { title: "Why Us", path: "/whyust" },
        // { title: "Our Services", path: "/ourservicest" },
        // { title: "Courses", path: "/coursest" },
        // { title: "Our Team", path: "/ourteamt" },
        // { title: "Testimonials", path: "/testimonialst" },
        // { title: "Articles", path: "/articlest" },
        // { title: "Frequently AQ", path: "/frequentlyaqt" },
        // { title: "About Us", path: "/aboutust" },
        // { title: "Booking Inquiry", path: "/bookinginquiryt" },
        // { title: "Gallery", path: "/galleryt" },
        // { title: "Our Mission", path: "/ourmissiont" },
        // { title: "Our Vision", path: "/ourvisiont" },
        // { title: "Contact Us", path: "/contactust" },
        // { title: "Contact Inquiry", path: "/contactinquiryt" },
        // { title: "Carrer Opportunities", path: "/carreropportunitiest" },
        // { title: "Events", path: "/eventst" },
        // { title: "Visas Destinations", path: "/visasdestinationst" },
        // { title: "Country Details", path: "/countrydetailst" },
        // { title: "Course Details", path: "/coursedetailst" },
        // { title: "All Course", path: "/allcourset" },
        // { title: "Articles Details", path: "/articledetailst" },
        // { title: "Events Details", path: "/eventdetailst" },
      ],
    },
  ];

  const [showDropdown, setShowDropdown] = useState(null);

  return (
    <div className="lg:flex sticky hidden flex-col gap-8 ">
      {/* Sidebar Header */}
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-[#415FF2] font-bold text-2xl">Abhyam</h1>
      </div>

      {/* Sidebar Menu */}
      <div className="flex flex-col font-ubuntu pb-10 pl-10 gap-6">
        {sidebarData.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div
              onClick={() =>
                item.subdata
                  ? setShowDropdown(showDropdown === index ? null : index)
                  : null
              }
              className={`flex items-center gap-4  hover:text-[#415FF2] hover:bg-gray-100 rounded-md d cursor-pointer ${
                item.subdata ? "justify-between" : ""
              }`}
            >
         
              <div className="shadow rounded text-lg p-2">{item.icon}</div>

             
              <Link to={item.path} className="flex-1">
                <h1 className="tracking-wider  ">{item.title}</h1>
              </Link>

          
              {item.subdata && (
                <div
                  className={`transition-transform duration-300 ${
                    showDropdown === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <MdKeyboardArrowDown className="text-xl" />
                </div>
              )}
            </div>

         
            {item.subdata && (
              <div
                className={`flex flex-col pl-12 mt-5 gap-4 text-gray-700 font-ubuntu overflow-hidden transition-all  duration-300 ${
                  showDropdown === index ? "h-full" : "max-h-0"
                }`}
              >
                {item.subdata.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subItem.path}
                    className="px-4 rounded hover:text-[#415FF2] hover:bg-gray-100  transition-transform duration-300 ease-in-out hover:translate-x-4 tracking-wider"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );``
};

export default Sidebar;
