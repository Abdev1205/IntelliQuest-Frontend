import { BsGearFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { MdSpaceDashboard, MdDarkMode } from "react-icons/md";
import Image from "next/image";
import logo from "../../public/logo.png";

const courseClick = () => {
  // Redirect user to different elements
};

const SideBar = () => {
  return (
    <div
      className="h-[95vh] w-20 rounded-xl flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg"
    >
      <Image
        draggable={false}
        className="mx-auto my-8 select-none"
        src={logo}
        width={40}
      />
      <Divider />
      <div className=" h-52 flex flex-col items-center justify-center">
        <SideBarIcon text="Dashboard" icon={<MdSpaceDashboard size="28" />} />
        <SideBarIcon text="Subject List" icon={<FaBook size="24" />} />
      </div>
      <Divider />
      <div className=" flex flex-col items-center justify-center">
        <SideBarIcon text="Stats" icon={<IoIosStats size="28" />} />
        <SideBarIcon text="settings" icon={<BsGearFill size="24" />} />
      </div>
      <Divider />
      <div className=" mt-auto my-6">
        <SideBarIcon text="colorblind mode" icon={<MdDarkMode size="26" />} />
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
  <div className="sidebar-icon rounded-2xl group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr  " />;

export default SideBar;
