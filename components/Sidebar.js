import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import Image from 'next/image';
import logo from '../public/logo.png'
const SideBar = () => {
  return (
    <div className="h-[95vh] w-20 rounded-xl flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
        

        <Image draggable={false} className="mx-auto my-8 select-none" src={logo} width={40} />
        <Divider />
        <SideBarIcon icon={<FaFire size="28" />} />
        <SideBarIcon icon={<BsPlus size="32" />} />
        <SideBarIcon icon={<BsFillLightningFill size="20" />} />
        <SideBarIcon icon={<FaPoo size="20" />} />
        <Divider />
        <SideBarIcon icon={<BsGearFill size="22" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon rounded-2xl group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;