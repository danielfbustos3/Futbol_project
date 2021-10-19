import { FiGrid, FiUser } from "react-icons/fi";
import { RiUserStarLine } from "react-icons/ri";
import { BiCart, BiHeart, BiCog } from "react-icons/bi";
import { IoAnalytics } from "react-icons/io5";
import { FaRegFolder } from "react-icons/fa";

export const linksObj = [
  {
    title: "Dashboard",
    icon: <FiGrid />,
    listItems: [
      { title: "Fetch1", link: "allplayers" },
      { title: "browse1", link: "allplayers" },
    ],
  },
  {
    title: "User",
    icon: <FiUser />,
    listItems: [
      { title: "Fetch2", link: "allplayers" },
      { title: "browse2", link: "allplayers" },
    ],
  },
  {
    title: "Scout",
    icon: <RiUserStarLine />,
    listItems: [
      { title: "Encuentra un jugador", link: "scout" },
      { title: "browse2.56", link: "allplayers" },
    ],
  },
  {
    title: "Analytics",
    icon: <IoAnalytics />,
    listItems: [
      { title: "Fetch3", link: "allplayers" },
      { title: "browse3", link: "allplayers" },
    ],
  },
  {
    title: "Files",
    icon: <FaRegFolder />,
    listItems: [
      { title: "Fetch4", link: "allplayers" },
      { title: "browse4", link: "allplayers" },
    ],
  },
  {
    title: "Order",
    icon: <BiCart />,
    listItems: [
      { title: "Fetch5", link: "allplayers" },
      { title: "browse5", link: "allplayers" },
    ],
  },
  {
    title: "Saved",
    icon: <BiHeart />,
    listItems: [
      { title: "Fetch6", link: "allplayers" },
      { title: "browse6", link: "allplayers" },
    ],
  },
  {
    title: "Settings",
    icon: <BiCog />,
    listItems: [
      { title: "Fetch7", link: "allplayers" },
      { title: "browse7", link: "allplayers" },
    ],
  },
];