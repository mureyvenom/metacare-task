import { SidebarItemProps } from "../components/Sidebar";
import { FiUsers } from "react-icons/fi";
import { CgCheckR } from "react-icons/cg";
import { BsCalendar } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

export const sideBarData: SidebarItemProps[] = [
  {
    icon: <FiUsers />,
    title: "Admin",
  },
  {
    icon: <CgCheckR />,
    title: "Knowledge Base",
  },
  {
    icon: <CgCheckR />,
    title: "Train SAM",
  },
  {
    icon: <BsCalendar />,
    title: "Agent Inbox",
  },
  {
    icon: <AiOutlineClockCircle />,
    title: "Help Center",
  },
  {
    icon: <IoChatbubbleEllipsesOutline className="-scale-x-100 transform" />,
    title: "Analytics",
    hasDropDown: true,
    dropdownItems: [
      {
        title: "Teams",
        active: true,
      },
      {
        title: "Knowledge Base",
        active: false,
      },
      {
        title: "Training SAM",
        active: false,
      },
      {
        title: "Help Center",
        active: false,
      },
    ],
  },
];
