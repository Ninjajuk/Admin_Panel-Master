import React, { useState } from "react";
import MyTable from "../../../../components/common/MyTable";
import { MdUploadFile } from "react-icons/md";
import Papa from "papaparse"; // Add this import for CSV parsing

const ScheduleManagement = () => {
  const schedule = [
    {
      id: 1,
      busName: "Express 101",
      route: "Mumbai to Pune",
      day: "Monday",
      departureTime: "08:00 AM",
      arrivalTime: "12:00 PM",
      driver: "John Doe",
    },
    {
      id: 2,
      busName: "Express 102",
      route: "Mumbai to Pune",
      day: "Wednesday",
      departureTime: "08:00 AM",
      arrivalTime: "12:00 PM",
      driver: "Samsuddin Ansari",
    },
    {
      id: 3,
      busName: "Express 103",
      route: "Mumbai to Nashik",
      day: "Tuesday",
      departureTime: "09:00 AM",
      arrivalTime: "01:00 PM",
      driver: "Alice Smith",
    },
    {
      id: 4,
      busName: "Express 104",
      route: "Pune to Nashik",
      day: "Thursday",
      departureTime: "10:00 AM",
      arrivalTime: "02:00 PM",
      driver: "Bob Johnson",
    },
    {
      id: 5,
      busName: "Express 105",
      route: "Mumbai to Goa",
      day: "Friday",
      departureTime: "06:00 AM",
      arrivalTime: "02:00 PM",
      driver: "Charlie Brown",
    },
    {
      id: 6,
      busName: "Express 106",
      route: "Pune to Goa",
      day: "Saturday",
      departureTime: "07:00 AM",
      arrivalTime: "03:00 PM",
      driver: "Daisy Green",
    },
    {
      id: 7,
      busName: "Express 107",
      route: "Nashik to Goa",
      day: "Sunday",
      departureTime: "08:00 AM",
      arrivalTime: "04:00 PM",
      driver: "Eve White",
    },
    {
      id: 8,
      busName: "Express 108",
      route: "Mumbai to Lonavala",
      day: "Monday",
      departureTime: "07:30 AM",
      arrivalTime: "09:30 AM",
      driver: "Frank Black",
    },
    {
      id: 9,
      busName: "Express 109",
      route: "Pune to Lonavala",
      day: "Tuesday",
      departureTime: "08:30 AM",
      arrivalTime: "10:30 AM",
      driver: "Grace Pink",
    },
    {
      id: 10,
      busName: "Express 110",
      route: "Mumbai to Shirdi",
      day: "Wednesday",
      departureTime: "05:00 AM",
      arrivalTime: "11:00 AM",
      driver: "Henry Blue",
    },
    {
      id: 11,
      busName: "Express 111",
      route: "Pune to Shirdi",
      day: "Thursday",
      departureTime: "06:00 AM",
      arrivalTime: "12:00 PM",
      driver: "Ivy Violet",
    },
    {
      id: 12,
      busName: "Express 112",
      route: "Nashik to Shirdi",
      day: "Friday",
      departureTime: "07:00 AM",
      arrivalTime: "09:00 AM",
      driver: "Jack Orange",
    },
    {
      id: 13,
      busName: "Express 112",
      route: "Nashik to Shirdi",
      day: "Friday",
      departureTime: "07:00 AM",
      arrivalTime: "09:00 AM",
      driver: "Jack Orange",
    },
    {
      id: 14,
      busName: "Express 112",
      route: "Nashik to Shirdi",
      day: "Friday",
      departureTime: "07:00 AM",
      arrivalTime: "09:00 AM",
      driver: "Jack Orange",
    },
  ];

  const scheduleRow = [
    "busName",
    "route",
    "day",
    "departureTime",
    "arrivalTime",
    "driver",
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [csvData, setCsvData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      complete: (result) => {
        setCsvData(result.data);
        setIsModalOpen(true);
      },
      header: true,
    });
  };

  const handleSaveCSV = () => {
    // Implement the logic to save the CSV data
    console.log("Saving CSV data:", csvData);
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-full flex flex-col p-2 lg:p-4 gap-1 lg:gap-2">
      <header className="flex flex-col lg:flex-row  gap-1  lg:justify-between items-center  w-full h-1/6  px-1 lg:px-4 py-1  bg-teal-400 rounded-md shadow-md">
        <h1 className="text-md lg:text-2xl font-bold ">Schedule Management</h1>
        <div className="flex item-center gap-1 lg:gap-2 text-xs lg:text-base">
          <button className="bg-primary text-white px-1 lg:px-4 py-1 lg:py-2 rounded">
            Manual Schedule
          </button>
          <button
            className="bg-green-500 text-white px-4 py-1 lg:py-2 rounded "
            onClick={() => handleScheduleCreation("automated")}
          >
            Automated Schedule
          </button>
          <label className="bg-gray-500 text-white px-4 py-1 lg:py-2 rounded flex items-center cursor-pointer">
            <span>
              <MdUploadFile className="w-6 h-6" />
            </span>
            <span className="ml-2">Upload</span>
            <input
              type="file"
              accept=".csv"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
        </div>
      </header>
      <div className=" h-5/6 p-4 bg-gray-100 rounded-md shadow-md ">
        <MyTable
          headerCol={scheduleRow}
          row={schedule}
          showEdit={true}
          showDelete={false}
        />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4  overflow-auto overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">CSV Preview</h2>
            <div className="w-full h-4/6">
              <MyTable
                headerCol={Object.keys(csvData[0] || {})}
                row={csvData}
              />
            </div>

            <div className="mt-4 flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={handleSaveCSV}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleManagement;
