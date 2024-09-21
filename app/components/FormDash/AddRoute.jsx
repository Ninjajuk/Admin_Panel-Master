import React from "react";
import { FaTimes } from "react-icons/fa";

const AddRoute = ({ handleClose, routes }) => {
  return (
    <div className="fixed inset-0  z-50 flex items-center justify-center">
      <div className="relative max-w-md w-full  bg-gray-50 shadow-2xl rounded-md ring-1 ring-primary">
        <div
          onClick={() => handleClose()}
          className=" absolute -top-4 -right-6 p-4 cursor-pointer flex items-center"
        >
          <FaTimes className="w-6 h-6 rounded-full bg-gray-200 text-red-800" />
        </div>
        <div className=" flex flex-col p-6">
          <div className="p-4">
            <h1 className="px-2 text-lg text-primary font-bold">
              Add New Route
            </h1>
          </div>
          <form className="px-4 space-y-4">
            <div className="form-group space-x-4 px-2">
              <input
                type="text"
                id="routename"
                name="routename"
                placeholder=""
                className="p-2"
              />
              <label htmlFor="routename">Route Name</label>
            </div>

            <div className="form-group space-x-4 px-2">
              <input
                type="text"
                id="startlocation"
                name="startlocation"
                placeholder=""
                className="p-2"
              />
              <label htmlFor="startlocation">Start Location</label>
            </div>

            <div className="form-group space-x-4 px-2">
              <input
                type="text"
                id="endlocation"
                name="endlocation"
                placeholder=""
                className="p-2"
              />
              <label htmlFor="endlocation">End Location</label>
            </div>

            <div className="flex space-x-4 px-2">
              <div className="flex-1 form-group">
                <input
                  type="text"
                  id="distance"
                  name="distance"
                  placeholder=""
                  className=" w-full"
                />
                <label htmlFor="distance">Distance</label>
              </div>

              <div className="flex-1">
                <label
                  htmlFor="isactive"
                  className="flex items-center space-x-2"
                >
                  <input
                    type="checkbox"
                    id="isactive"
                    name="isactive"
                    className="form-checkbox"
                  />
                  <span>Is Active</span>
                </label>
              </div>
            </div>

            <div className="px-2">
              <button className="w-full flex items-center justify-center p-2 text-white bg-primary rounded-md shadow-md ">
                Add Route
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRoute;
