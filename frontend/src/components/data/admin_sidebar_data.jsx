import { FaHome } from "react-icons/fa";
import { RiHomeSmileLine  } from "react-icons/ri";
import { LuShoppingBag } from "react-icons/lu";
import { LuGraduationCap } from "react-icons/lu";
import { IoCarSportOutline } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineLock } from "react-icons/md";
import { RiGitCommitLine } from "react-icons/ri";
import { FaTv } from "react-icons/fa6";
import { RiBarChartBoxLine } from "react-icons/ri";
import { RiLayoutLeftLine } from "react-icons/ri";
import { RiLayout4Line } from "react-icons/ri";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { RiTableAltLine } from "react-icons/ri";
import { RiRadioButtonLine } from "react-icons/ri";
import { ImTable2 } from "react-icons/im";
import { RiFileCopyLine } from "react-icons/ri";
import { RiMailOpenLine } from "react-icons/ri";
import { RiWechatLine } from "react-icons/ri";
import { RiDragDropLine } from "react-icons/ri";
import { GoShieldLock } from "react-icons/go";
import { RiCalendarLine } from "react-icons/ri";
export const admin_sidebar = [
  // 1st section
  {
    name: "",
    list: [
      {
        id: 1,
        icon: <RiHomeSmileLine />,
        title: "Dashboard",
        expandable: true,
      },
      {
        id: 53353,
        icon: <RiFileCopyLine/>,
        title: "Front Pages",
        expandable: true,
      },
    ],
  },

  //   2nd section

  {
    name: "Apps & Pages",
    list: [
      {
        id: 2,
        icon: <LuShoppingBag />,
        title: "Ecommerce",
        expandable: true,
      },
      {
        id: 50223,
        icon: <LuGraduationCap />,
        title: "Academy",
        expandable: true,
      },
      {
        id: 57973,
        icon: <IoCarSportOutline />,
        title: "Logistics",
        expandable: true,
      },
      {
        id: 40668,
        icon: <RiMailOpenLine />,
        title: "Email",
      },
      {
        id: 23096,
        icon: <RiWechatLine />,
        title: "Chat",
      },
      {
        id: 85108,
        icon: <RiCalendarLine />,
        title: "calender",
      },
      {
        id: 26879,
        icon: <RiDragDropLine />,
        title: "Kanban",
      },
      {
        id: 70052,
        icon: <FaRegFileAlt />,
        title: "invoice",
        expandable: true,
      },
      {
        id: 5616,
        icon: <FaRegUser />,
        title: "user",
        expandable: true,
      },
      {
        id: 37636,
        icon: <MdOutlineLock />,
        title: "roles  & permissions",
        expandable: true,
      },
      {
        id: 27961,
        icon: <RiLayoutLeftLine />,
        title: "pages",
        expandable: true,
      },
      {
        id: 98078,
        icon: <GoShieldLock />,
        title: "auth pages",
        expandable: true,
      },
      {
        id: 79908,
        icon: <RiGitCommitLine />,
        title: "wizard examples",
        expandable: true,
      },
      {
        id: 43973,
        icon: <FaTv />,
        title: "dialog examples",
      },
      {
        id: 92041,
        icon: <RiBarChartBoxLine />,
        title: "widget examples",
        expandable: true,
      },
    ],
  },

  //   third section
  {
    id: 3,
    name: "Forms & tables",
    list: [
      {
        id: 26796,
        icon: <RiLayout4Line />,
        title: "Form layout",
      },
      {
        id: 41808,
        icon: <RiCheckboxMultipleLine />,
        title: "form validation",
      },
      {
        id: 50660,
        icon: <RiGitCommitLine />,
        title: "form wizard",
      },
      {
        id: 81897,
        icon: <RiTableAltLine />,
        title: "react tables",
      },
      {
        id: 40778,
        icon: <RiRadioButtonLine />,
        title: "Form Elements",
      },
      {
        id: 2668,
        icon: <ImTable2 />,
        title: "MUI tables",
      },
    ],
  },
];
