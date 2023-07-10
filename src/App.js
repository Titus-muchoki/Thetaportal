import { useState } from "react";
import { BsChevronBarDown, BsFillArrowLeftSquareFill, BsSearch, BsCalendarCheckFill,
   BsBagCheckFill, BsStickiesFill, BsCreditCard2FrontFill } from "react-icons/bs";
import { RiDashboardFill, RiBox3Fill,RiUserAddFill } from "react-icons/ri";
import { AiFillSetting, AiOutlineLogout } from "react-icons/ai";

import Ktda from "./assets/KTDA-MS.webp"




const App = () => {
  const [open, setOpen] = useState(true)
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menus  = [
    {title: "Tea-Weights", icon: <BsCalendarCheckFill />},
    {title: "Fertilizers", icon: <BsBagCheckFill />},
    {title: "Credit & finance", icon: <BsCreditCard2FrontFill />,  spacing: true},
    {
      title: "Trainings", icon: <BsStickiesFill />,
      submenu: true,
      submenuItems: [
        {title: "Submenu 1"},
        {title: "Submenu 1"},
        {title: "Submenu 1"},
      ],
    },
    // {title: "Analytics"},
    {title: "Inbox", icon: <RiBox3Fill />},
    {title: "Profile", icon: <RiUserAddFill />, spacing: true},
    {title: "Setting", icon: <AiFillSetting />},
    {title: "Logout", icon: <AiOutlineLogout />}
  ];
  return (
    <div className="flex">
      <div className={` bg-slate-500 p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300  relative`}>
        <BsFillArrowLeftSquareFill className={`bg-white text-dark-purple text-3xl rounded-full 
        absolute -right-3 top-9 border border-slate-500 cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)} />

        <div className='inline-flex'>
          <img src={Ktda} alt="/" className={`text-4xl w-20 h-25 rounded cursor-pointer bg-green-300 float-left mr-2 duration-500
        ${open && "rotate-[360deg]"}`} />
          <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>
            <span className='font-semi-bold'>Farmers portal</span>
          </h1>
        </div>

        <div className={`flex items-center rounded-md bg-slate-950 mt-6 ${!open ? "px-2.5" : "px-4"}`}>
          <BsSearch className={`text-white text-lg block float-left cursor-pointer mr-2 ${open && "mr-2"}`} />
          <input type={"search"} placeholder="Search" className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`} />
        </div>
        <ul className='pt-2'>
          {Menus.map((menu, index) => (
            <>
            <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2
             hover:bg-slate-400 rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
             <span className='text-2xl block float-left'>
              <RiDashboardFill />
             </span>
              <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>
                {menu.title}
                </span>
                {menu.submenu && open && (
                  <BsChevronBarDown className={`${submenuOpen && "rotate-180"}`}  onClick={() =>
                     setSubmenuOpen(!submenuOpen)}/>
                )}
            </li>
            {menu.submenu && submenuOpen && open &&(
              <ul>
                {menu.submenuItems.map((submenuItem, index) => (
                  <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px
                  hover:bg-slate-400 rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                    {submenuItem.title}
                  </li>
                ))}
              </ul>
            )}
            </>
          ))}
        </ul>
      </div>
    </div>

  );
};

export default App; 