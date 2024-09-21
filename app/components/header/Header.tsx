'use client'

import { FaAlignLeft } from "react-icons/fa";
import DropdownUser from "./DropDownUser";

const NavHeader = ({ mobileMenuOpen, setMobileMenuOpen }:any) => {
  return (
    <header className="sticky top-0 z-999 flex w-full h-[4rem] bg-white shadow-md dark:bg-boxdark dark:drop-shadow-none">
      <div className="h-full flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
            {/* <!-- Hamburger Toggle BTN --> */}
            <button
              aria-controls="sidebar"
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="z-99999 lg:hidden"
            >
              <span>
                <FaAlignLeft className="relative block h-6 w-6 cursor-pointer text-primary" />
              </span>
            </button>
            {/* <!-- Hamburger Toggle BTN --> */}

            {/* <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img src={LogoIcon} alt="Logo" />
            <p>Icon</p>
          </Link> */}
          </div>

          <div>
            <h1 className="font-extrabold text-sm lg:text-lg text-primary">
              Hi Samsu
            </h1>
          </div>
        </div>


        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <!-- Dark Mode Toggler --> */}
            {/* <DarkModeSwitcher /> */}
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Notification Menu Area --> */}
            {/* <DropdownNotification /> */}
            {/* <!-- Notification Menu Area --> */}

            {/* <!-- Chat Notification Area --> */}
            {/* <DropdownMessage /> */}
            {/* <!-- Chat Notification Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser/>
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default NavHeader;
