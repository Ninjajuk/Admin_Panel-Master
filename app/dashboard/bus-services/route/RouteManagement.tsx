
'use client'
import MyTable from "@/app/components/common/MyTable";
import React, { useEffect, useState } from "react";
import { MdFileDownload, MdFilterList } from "react-icons/md";



function RouteManagement() {
  const parsedRoute = [
    {
      name: "Coastal Connector",
      start: "Mumbai",
      end: "Goa",
      distance: 583,
    },
    {
      name: "Northern Express",
      start: "Delhi",
      end: "Chandigarh",
      distance: 243,
    },
    {
      name: "Eastern Horizon",
      start: "Kolkata",
      end: "Bhubaneswar",
      distance: 441,
    },
    {
      name: "Southern Sojourn",
      start: "Chennai",
      end: "Bangalore",
      distance: 346,
    },
    {
      name: "Western Wonder",
      start: "Ahmedabad",
      end: "Udaipur",
      distance: 262,
    },
    {
      name: "Central Trail",
      start: "Bhopal",
      end: "Nagpur",
      distance: 350,
    },
    {
      name: "Deccan Route",
      start: "Pune",
      end: "Hyderabad",
      distance: 561,
    },
    {
      name: "Himalayan Drive",
      start: "Dehradun",
      end: "Shimla",
      distance: 230,
    },
    {
      name: "Riverfront Journey",
      start: "Patna",
      end: "Varanasi",
      distance: 254,
    },
    
    {
      name: "Royal Rajasthan",
      start: "Jaipur",
      end: "Jodhpur",
      distance: 337,
    },
  ];
  const [routes, setRoutes] = useState(parsedRoute);

  const columnTable: Array<"name" | "start" | "end" | "distance"> = ["name", "start", "end", "distance"];


    // Handle edit route logic
  // const handleEdit = (id) => {

  // };

    // Handle delete route logic here
  // const handleDelete = (id) => {
  //   setShowModal(true);
  //   setIsDeleting(true);
  // };

  const [isDeleting, setIsDeleting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [addRoute, setAddRoute] = useState(false);
  const handleClose = () => {
    setAddRoute(!addRoute);
  };

  // loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation with setTimeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  // if (loading) {
  //   return <LoaderCircle />;
  // }

  return (
    <div className="w-full h-full flex flex-col p-2 lg:p-4 gap-1 lg:gap-2">
      <div className="w-full lg:h-1/6 flex flex-col gap-1 px-1 lg:px-4 py-1  bg-gray-100 rounded-md shadow-md">
        <header className="w-full flex justify-between items-center px-2 ">
          <h1
            // onClick={() => toast.success("Success")}
            className="text-sm lg:text-xl font-bold truncate"
          >
            Route Management
          </h1>
          <button
            // onClick={() => setAddRoute(!addRoute)}
            className="bg-primary text-white px-4 py-1 rounded truncate hover:transform hover:scale-105"
          >
            Add New Route
          </button>
        </header>
        <div className="flex items-center justify-between gap-2 px-4 py-2">
          <div
            // onClick={() => toast.success("Success")}
            className="cursor-pointer"
          >
            Click ME
          </div>
          <div className=" form-group">
            <input
              type="text"
              placeholder=""
              name="Search"
              id="Search"
              className="border p-2 rounded w-full"
            />
            <label htmlFor="Search">Search routes...</label>
          </div>
          <div className=" flex gap-2  lg:gap-4 cursor-pointer ">
            <div
              // onClick={handleFilterDrop}
              className=" flex items-center  hover:text-primary hover:font-bold  "
            >
              <span className="hidden lg:block">Filters</span>
              <span className="lg:pl-1">
                <MdFilterList className="w-6 h-6 " />
              </span>
            </div>
            {/* {filter && <DropdownFilter columns={headerCol} />} */}
            <div
              // onClick={handleExportToExcel}
              className="flex items-center cursor-pointer hover:text-primary hover:font-bold"
            >
              <span className="hidden lg:block">Export</span>
              <span className="lg:pl-1">
                <MdFileDownload className="w-6 h-6 " />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-5/6 p-4 bg-gray-100 rounded-md shadow-md">
        <MyTable headerCol={columnTable} row={routes} action={false} handleDelete={()=>{}} />
      </div>

      {/* {isDeleting && showModal && (
        <DeleteModal
          closeModal={() => setShowModal(!showModal)}
          onDelete={onDelete}
          handleDelete={handleDelete}
          title={"Delete Route"}
          message={
            "Are you sure you want to Delete this Route? All associated data will be permanently removed. This action cannot be undone."
          }
          deleteText={"Delete"}
          cancelText={"Cancel"}
          toastType={"success"}
          toastMessage={"Deleted successfully!"}
        />
      )} */}
      {/* {addRoute && <AddRoute handleClose={handleClose} routes={routes} />} */}
      {/* Pagination would go here */}
      {/* <ToastContainer /> */}
    </div>
  );
}

export default RouteManagement;
