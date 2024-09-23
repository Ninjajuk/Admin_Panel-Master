import DefaultLayout from "@/app/components/common/DefaultLayout"
import RouteManagement from "../route/RouteManagement"
import BusDetails from "./BusDetails"



const BusDetail = () =>{
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
    return(
        <DefaultLayout>
            <BusDetails bus={busData}/>
        </DefaultLayout>
    )
}
export default BusDetail