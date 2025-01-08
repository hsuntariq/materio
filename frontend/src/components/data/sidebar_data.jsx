import { PiBuildingApartmentLight } from "react-icons/pi";
import { CiLock } from "react-icons/ci";
import { IoIosImages } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

export const sidebar_data = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "featutes",
  },
  {
    id: 3,
    title: "team",
  },
  {
    id: 4,
    title: "FAQ",
  },
  {
    id: 5,
    title: "contact us",
  },
  {
    id: 6,
    title: "pages",
    my_icon: <RiArrowDropDownLine size={25} />,
    myList: [
      {
        id: 6,
        title: "pages",
        icon: <PiBuildingApartmentLight />,
        items: [
          {
            id: 1,
            title: "pricing",
          },
          {
            id: 2,
            title: "payment",
          },
          {
            id: 3,
            title: "checkout",
          },
          {
            id: 4,
            title: "health center",
          },
        ],
      },
      {
        id: 7,
        title: "auth demo",
        icon: <CiLock />,

        items: [
          {
            id: 1,
            title: "login (basic)",
          },
          {
            id: 2,
            title: "login (cover)",
          },
          {
            id: 3,
            title: "register (basic)",
          },
          {
            id: 4,
            title: "register (cover)",
          },
          {
            id: 5,
            title: "register (multi steps)",
          },
          {
            id: 6,
            title: "forgot password (basic)",
          },
          {
            id: 7,
            title: "forgot password (cover)",
          },
          {
            id: 8,
            title: "reset password (basic)",
          },
          {
            id: 9,
            title: "reset password (cover)",
          },
        ],
      },
      {
        id: 8,
        title: "auth demo",
        icon: <IoIosImages />,
        items: [
          {
            id: 1,
            title: "login (basic)",
          },
          {
            id: 2,
            title: "login (cover)",
          },
          {
            id: 3,
            title: "register (basic)",
          },
          {
            id: 4,
            title: "register (cover)",
          },
          {
            id: 5,
            title: "register (multi steps)",
          },
          {
            id: 6,
            title: "forgot password (basic)",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Admin",
  },
];
