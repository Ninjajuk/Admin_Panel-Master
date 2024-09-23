import React, { useState, useEffect } from "react";
import { FaBusAlt } from "react-icons/fa";
import {MdOutlineDashboard,MdLogout,MdOutlineStarOutline,MdRestaurant,MdFolderOpen,MdAttachMoney,MdEngineering} from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import {
  FaAngleLeft,
  FaAngleRight,
  FaBuilding,
  FaShoppingCart,

} from "react-icons/fa";
import { BiHome } from "react-icons/bi";


const SidebarMenu = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "My Portfolio", link: "/", icon: MdEngineering },
    {
      name: "Corporate Site",
      link: "/dashboard/corporate-website",
      icon: FaBuilding, // Or MdBusiness, AiOutlineGlobal, FiGlobe
    },
    {
      name: "Bus Booking",
      link: "/dashboard/vehicle-management",
      icon: FaBusAlt,
      subMenu: [
        { name: "Add Vehicle", link: "/dashboard/vehicle-management/add" },
        { name: "View Vehicles", link: "/dashboard/vehicle-management/view" },
        {
          name: "Vehicle Reports",
          link: "/dashboard/vehicle-management/reports",
        },
      ],
    },
    { name: "Teghiya Store", link: "/admin/ecom", icon: FiShoppingCart },
    { name: "Gausiya Tyres", link: "/admin/gausiya-tyres", icon: MdFolderOpen },
    { name: "Catering", link: "/admin/catering", icon: MdRestaurant },


    { name: "Customer", link: "/admin/customers", icon: AiOutlineUser },
    { name: "analytics", link: "/", icon: TbReportAnalytics },
    { name: "File Manager", link: "/", icon: FiFolder },

    { name: "User", link: "/admin/user", icon: AiOutlineUserAdd },

  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* Desktop Sidebar */}
      <section className="hidden lg:flex  ">
        {/* Sidebar starts here bg-[#0e0e0e]*/}
        <div
          className={`bg-primary min-h-screen       ${
            open ? "w-48" : "w-16 "
          } duration-500  `}
        >
          <div className="w-full h-full flex flex-col">
            <div className="w-full h-16 bg-gray-50 ">
              <div
                onClick={() => setOpen(!open)}
                className="w-full h-full px-6 flex items-center text-sm gap-3.5 font-medium   cursor-pointer"
              >
                <span>
                  <BiHome className="h-6 w-6 text-primary" />
                </span>
                <h1
                  className={`whitespace-pre duration-500 text-2xl font-bold text-primary ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Teghiya
                </h1>
              </div>
            </div>

            <div
              className={`flex-grow h-0 px-4 bg-gray-50 inline-block  `}
            >
              <div className=" flex flex-col gap-4  ">
                {menus?.map((menu, i) => (
                  <NavLink
                    to={menu?.link}
                    key={i}
                    title={menu.name}
                    className={({ isActive }) =>
                      `${menu?.margin ? "mt-5" : ""} ${
                        isActive ? "bg-gray-200" : ""
                      } group flex items-center text-sm gap-2 font-medium p-2 hover:bg-gray-200 rounded-md`
                    }
                  >
                    <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                    <h2
                      style={{
                        transitionDelay: `${i + 3}00ms`,
                      }}
                      className={`whitespace-pre duration-500 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      {menu?.name}
                    </h2>
                    {/* <h2
                      className={`${
                        open && "hidden w-[120px] opacity-0 transition-opacity-0.3"
                      } absolute left-48  bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit group-hover:visible group-hover:opacity-1  `}
                    >
                      {menu?.name}
                    </h2> */}
                  </NavLink>
                ))}
              </div>
              {/* <Sidebar2 /> */}
            </div>

            <div className="p-6 flex items-center bg-gray-100 cursor-pointer ">
              <MdLogout className="w-6 h-6 text-red-800 font-bold" />
            </div>
          </div>
        </div>

        {/* <div
          className={`absolute bottom-2 z-10 flex items-center bg-gray-300 rounded-full w-6 h-6 p-2 ${
            open ? "left-48" : "left-16"
          }`}
        >
          {open ? (
            <FaAngleLeft
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <FaAngleRight
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          )}
        </div> */}
      </section>

      {/* Mobile Sidebar */}
      <section className="lg:hidden flex">
        {/* <button
          className="p-4 text-gray-900 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FaAngleRight size={24} />
        </button> */}

        {mobileMenuOpen && (
          <div className="fixed inset-0 flex z-40">
            <div className="fixed inset-0 bg-black opacity-50" />

            <div className="relative flex-1 flex flex-col max-w-[14rem] w-full bg-gray-50">
              <div className="absolute top-0 right-0 -mr-14 p-1">
                <button
                  className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none hover:bg-gray-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FaAngleLeft className="text-white" />
                </button>
              </div>

              <div className="h-16 flex items-center px-6 bg-gray-50">
                <BiHome className="h-6 w-6" />
                <h1 className="ml-2 text-lg font-bold text-primary">Teghiya</h1>
              </div>

              <div className="mt-5 flex-1 h-0 ">
                <nav className="px-4 space-y-1">
                  {menus.map((menu, i) => (
                    <NavLink
                      to={menu?.link}
                      key={i}
                      className={({ isActive }) =>
                        `${menu?.margin ? "mt-5" : ""} ${
                          isActive ? "bg-gray-200" : ""
                        } group flex items-center text-sm gap-2  font-medium p-2 hover:bg-gray-100 rounded-md transform hover:scale-105 hover:translate-x-2 transition-transform duration-300`
                      }
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div>
                        {React.createElement(menu?.icon, { size: "20" })}
                      </div>
                      <span className="ml-4">{menu?.name}</span>
                    </NavLink>
                  ))}
                </nav>
              </div>

              <div className="p-6 flex items-center bg-white cursor-pointer">
                <MdLogout className="w-6 h-6" />
                <span className="ml-4 text-base font-medium text-gray-900">
                  Logout
                </span>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SidebarMenu;
