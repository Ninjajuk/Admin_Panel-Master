import React, { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import PaginationComponent from "../../../components/common/Pagination";
import { datatableUsers } from "../../../components/common/data";
import MyTable from "../../../components/common/MyTable";
import { MdFileDownload, MdFilterList } from "react-icons/md";
import DropdownFilter from "../components/common/DropdownFilter";
import InputDashboard from "../components/common/InputDashboard";
import LoaderCircle from "../../../components/common/Loader";

const Customer = () => {
  const headerCol = [
    "id",
    "name",
    "position",
    "gender",
    "office",
    "email",
    "phone",
    "salary",
  ];
  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalItems = datatableUsers.length; // Total number of items in your data

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setItemsPerPage(pageSize);
    // Fetch data for the new page here
  };

  const handleItemsPerPageChange = (pageSize) => {
    setItemsPerPage(pageSize);
    // Fetch data with the new items per page here
  };

  // filter dropdown
  const [filter, setFilter] = useState(false);
  const handleFilterDrop = () => {
    setFilter(!filter);
  };

  //Loading later manage with redux or contex
  const isLoading = false;
  return (
    <DefaultLayout>
      <div
        className=" w-full  flex flex-col bg-gray-300"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <div className="w-full h-full flex-flex-col  bg-white ">
          <div className="w-full h-1/6  flex-col  p-2 ">
            <div className="flex justify-between py-2 px-4">
              <h2 className="text-xl font-bold">Manage Customers</h2>
              <button
                // onClick={handleSaveVehicle}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-800"
              >
                {/* {editing ? "Update Vehicle" : "Add Vehicle"}Add Vehicle */}
                Add Customer
              </button>
            </div>
            {/* Filters Section */}
            <div className=" flex justify-between items-center px-4">
              <select
                name="vehicleType"
                // value={filters.vehicleType}
                // onChange={handleFilterChange}
                className="p-2 border rounded"
              >
                <option value="All">All Types</option>
                <option value="Car">Car</option>
                <option value="Bus">Bus</option>
                <option value="Truck">Truck</option>
              </select>

              {/* <input
              type="text"
              name="search"
              // value={filters.search}
              // onChange={handleFilterChange}
              placeholder="Search..."
              className="p-2 border rounded "
            /> */}
              <div className="">
                <InputDashboard
                  type="text"
                  name="search"
                  id="search"
                  placeholder=""
                  htmlFor="search"
                  label="Search..."
                />
              </div>

              <div className="  flex gap-2  lg:gap-4 cursor-pointer ">
                <div
                  onClick={handleFilterDrop}
                  className=" flex items-center  hover:text-primary hover:font-semibold transition duration-700 ease-in-out "
                >
                  <span className="hidden lg:block">Filters</span>
                  <span className="lg:pl-1">
                    <MdFilterList className="w-6 h-6 " />
                  </span>
                </div>
                {filter && <DropdownFilter columns={headerCol} />}
                <div
                  //   onClick={handleExportToExcel}
                  className="flex items-center cursor-pointer hover:text-primary hover:font-bold"
                >
                  <span className="hidden lg:block">Export</span>
                  <span className="lg:pl-1">
                    <MdFileDownload className="w-6 h-6 " />
                  </span>
                </div>
              </div>

              {/* <div className="flex items-center cursor-pointer hover:text-primary">
              <span>Refresh</span>
              <span className="pl-2">
                <MdRefresh className="w-6 h-6 text-primary" />
              </span>
            </div> */}
            </div>
          </div>
          {/* Content area with flex-grow */}
          <div className="h-4/6 overflow-y-auto flex-grow p-2">
            {isLoading ? (
              <LoaderCircle />
            ) : (
              <MyTable headerCol={headerCol} row={datatableUsers} />
            )}
          </div>

          <div className="w-full  h-1/6">
            <PaginationComponent
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              onItemsPerPageChange={handleItemsPerPageChange}
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Customer;
