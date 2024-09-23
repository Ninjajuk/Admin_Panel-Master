'use client'
import React, { useState } from "react";
import Link  from "next/link";
import { MdOutlineDashboard } from "react-icons/md";
import { FaBuilding, FaBusAlt } from "react-icons/fa";
import { FiShoppingCart, FiFolder } from "react-icons/fi";
import { MdRestaurant, MdOutlineStarOutline } from "react-icons/md";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { RiSettings4Line } from "react-icons/ri";
import { HiPlus, HiMinus } from "react-icons/hi";
import { BiHome } from "react-icons/bi";

const menus = [
  { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
  {
    name: "Corporate Site",
    link: "/dashboard/corporate-website",
    icon: FaBuilding,
  },
  {
    name: "Vehicle Management",
    link: "/dashboard/vehicle-management",
    icon: FaBusAlt,
    subMenu: [
      {
        name: "Bus Manage",
        link: "/dashboard/vehicle-management/add",
        subMenu: [
          { name: "Add Vehicle", link: "/dashboard/vehicle-management/add" },
          { name: "View Vehicles", link: "/dashboard/vehicle-management/view" },
          {
            name: "Vehicle Reports",
            link: "/dashboard/vehicle-management/reports",
          },
        ],
      },
      { name: "View Vehicles", link: "/dashboard/vehicle-management/view" },
      {
        name: "Vehicle Reports",
        link: "/dashboard/vehicle-management/reports",
      },
    ],
  },
  { name: "Ecom", link: "/admin/ecom", icon: FiShoppingCart },
  { name: "Catering", link: "/admin/catering", icon: MdRestaurant },
  { name: "Pandals", link: "/admin/catering", icon: MdOutlineStarOutline },
  { name: "Customer", link: "/admin/customers", icon: AiOutlineUser },
  { name: "File Manager", link: "/", icon: FiFolder },
  { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
  { name: "User", link: "/admin/user", icon: AiOutlineUserAdd },
  { name: "Setting", link: "/", icon: RiSettings4Line },
];

const Sidebar = ({ mobileMenuOpen, setMobileMenuOpen }:any) => {
  const [openMenu, setOpenMenu] = useState(null);


  const handleMenuToggle = (index:any) => {
    if (openMenu === index) {
      setOpenMenu(null); // Close the menu if it's already open
    } else {
      setOpenMenu(index); // Open the clicked menu
    }
  };

  const renderSubMenu = (subMenu:any, parentIndex:any) => (
    <ul className="space-y-2">
      {menus.map((item, index) => (
        <li key={index} className="relative">
          <Link
            href={item.link}
            className="flex items-center p-3  rounded-md"
            onClick={() => item.subMenu && handleMenuToggle(index)}
          >
            <item.icon className="w-6 h-6 mr-3" />
            {item.name}
            {item.subMenu && (
              <span className="ml-auto text-gray-400">
                {openMenu === index ? <HiMinus /> : <HiPlus />}
              </span>
            )}
          </Link>
          {item.subMenu &&
            openMenu === index &&
            renderSubMenu(item.subMenu, index)}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="hidden lg:flex flex-col  w-64 h-screen bg-gray-50    ">
      <div className="w-full h-[4rem] bg-green-500  sticky ">
        <div
          // onClick={() => setOpen(!open)}
          className="w-full h-full px-6 flex items-center text-sm gap-3.5 font-medium   cursor-pointer"
        >
          <span>
            <BiHome className="h-6 w-6 text-primary" />
          </span>
          <h1
            className={`whitespace-pre duration-500 text-2xl font-bold text-primary ${!openMenu && "opacity-0 translate-x-28 overflow-hidden"
              }`}
          >
            Teghiya
          </h1>
        </div>


      </div>
      <div className="overflow-y-auto flex-1">
        <div >
          <ul className="space-y-2">
            {menus.map((item, index) => (
              <li key={index} className="relative">
                <Link
                  href={item.link}
                  className="flex items-center p-3  rounded-md"
                  onClick={() => item.subMenu && handleMenuToggle(index)}
                >
                  <item.icon className="w-6 h-6 mr-3" />
                  {item.name}
                  {item.subMenu && (
                    <span className="ml-auto text-gray-400">
                      {openMenu === index ? <HiMinus /> : <HiPlus />}

                    </span>
                  )}
                </Link>
                {item.subMenu && renderSubMenu(item.subMenu, index)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    
  );
};

export default Sidebar;

