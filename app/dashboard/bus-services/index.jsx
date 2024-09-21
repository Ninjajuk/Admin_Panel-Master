import React, { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import VehicleManagement from "./VehicleManagement";

import ScheduleManagement from "./ScheduleManagement/ScheduleManage";
import RouteManagement from "./RouteManagement/RouteManagement";
import BusDetails from "./VehicleDetails.jsx/BusDetails";

const VehicleManagementDashboard = () => {
  const [activeTab, setActiveTab] = useState(1); // State to track the active tab
  const busData = {
    name: "Express 101",
    type: "AC Sleeper",
    registrationNumber: "MH12AB1234",
    capacity: 40,
    assignedRoute: {
      name: "Mumbai to Pune",
      startLocation: "Mumbai",
      endLocation: "Pune",
    },
    status: "Active",
    isAvailable: false,
    maintenanceRecords: [
      {
        date: "2024-06-15",
        type: "Engine Check",
        notes: "Replaced oil filter and refilled engine oil.",
      },
      {
        date: "2024-05-20",
        type: "Tire Replacement",
        notes: "Replaced front left tire.",
      },
      {
        date: "2024-04-10",
        type: "Brake Inspection",
        notes: "Checked and adjusted brake pads.",
      },
    ],
    assignmentHistory: [
      {
        routeName: "Mumbai to Pune",
        startDate: "2024-01-10",
        endDate: "2024-06-30",
      },
      {
        routeName: "Pune to Nashik",
        startDate: "2023-09-05",
        endDate: "2023-12-25",
      },
    ],
  };

  const vehicletabs = [
    { id: 1, label: "Vehicle Management", component: <VehicleManagement /> },
    { id: 2, label: "Route Management", component: <RouteManagement /> },
    { id: 3, label: "Bus Details", component: <BusDetails bus={busData} /> },
    { id: 4, label: "Schedule Management", component: <ScheduleManagement /> },
  ];

  return (
    <DefaultLayout>
      <div className="w-full h-full flex flex-col">
        {/* Tab Navigation */}
        <div className="flex   overflow-x-auto mx-2 lg:mx-4 mt-2 rounded-md shadow-md ">
          {vehicletabs.map((tab) => (
            <div
              key={tab.id}
              className={`w-full px-4 py-2 cursor-pointer   ${
                activeTab === tab.id
                  ? " text-primary font-bold text-xs lg:text-lg border-b-2 border-primary"
                  : " text-gray-700"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </div>
          ))}
        </div>

        {/* Render the active component */}
        <div className="flex-grow w-full h-0 overflow-y-auto">
          {vehicletabs.find((tab) => tab.id === activeTab)?.component}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default VehicleManagementDashboard;
