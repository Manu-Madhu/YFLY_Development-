import { RxDashboard } from "react-icons/rx";
import { MdOutlinePeople } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { TbBrowserCheck } from "react-icons/tb";
import { AiOutlineLogin } from "react-icons/ai";

export const Sidebar = [
    {
        id: 1,
        name: "Dashboard",
        path: "/admin/dashboard",
        icon: <RxDashboard size={25}/>
    },
    {
        id: 2,
        name: "Manage Team",
        path: "/admin/employee",
        icon: <MdOutlinePeople size={25}/>
    },
    {
        id: 3,
        name: "Applications",
        path: "/admin/applications",
        icon: <PiStudentFill size={25}/>
    },
    {
        id: 4,
        name: "Track Student",
        path: "/admin/student",
        icon: <TbBrowserCheck size={25}/>
    },
    {
        id: 5,
        name: "Log Out",
        path: "/logout",
        icon: <AiOutlineLogin size={25}/>
    },
]

export const SidebarE = [
    {
        id: 1,
        name: "Dashboard",
        path: "/employee/dashboard",
        icon: <RxDashboard size={25}/>
    },
    {
        id: 2,
        name: "Applications",
        path: "/employee/application" || "/employee/application/6591b74a3b1ed41707ee2930",
        icon: <MdOutlinePeople size={25}/>
    },
    {
        id: 5,
        name: "Log Out",
        path: "/logout",
        icon: <AiOutlineLogin size={25}/>
    },
]
