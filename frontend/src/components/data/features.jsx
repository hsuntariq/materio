import { FaLaptopCode } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { RiCameraLensLine } from "react-icons/ri";
import { IoCubeOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { MdOutlineFileUpload } from "react-icons/md";

export const features = [
  {
    id: 1,
    title: "Quality Code",
    icon: <FaLaptopCode size={30} color="#9A71F6" fontWeight={"bolder"} />,
    desc: "Code structure that all developers will easily understand and fall in love with.",
  },
  {
    id: 2,
    title: "Contineous Updates",
    icon: (
      <MdOutlineFileUpload size={30} color="#9A71F6" fontWeight={"bolder"} />
    ),
    desc: "Free updates for the next 12 months, including new demos and features.",
  },
  {
    id: 3,
    title: "Stater-Kit",
    icon: <CiEdit size={30} color="#9A71F6" fontWeight={"bolder"} />,
    desc: "Start your project quickly without having to remove unnecessary features.",
  },
  {
    id: 4,
    title: "API Ready",
    icon: <IoCubeOutline size={30} color="#9A71F6" fontWeight={"bolder"} />,
    desc: "Just change the endpoint and see your own data loaded within seconds.",
  },
  {
    id: 5,
    title: "Excellent Support",
    icon: <RiCameraLensLine size={30} color="#9A71F6" fontWeight={"bolder"} />,
    desc: "An easy-to-follow doc with lots of references and code examples.",
  },
  {
    id: 6,
    title: "Well Documented",
    icon: <FaRegFileAlt size={30} color="#9A71F6" fontWeight={"bolder"} />,
    desc: "An easy-to-follow doc with lots of references and code examples.",
  },
];
