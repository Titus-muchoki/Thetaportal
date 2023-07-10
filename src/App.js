import { useState } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import {AiFillEnvironment} from "react-icons/ai";


const App = () => {
  const [open, setOpen] = useState(true)
  return (
    <div className="flex">
      <div className={`h-screen bg-slate-500 p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300  relative`}>
        <BsFillArrowLeftSquareFill className={`bg-white text-dark-purple text-3xl rounded-full 
        absolute -right-3 top-9 border border-slate-500 cursor-pointer ${!open && "rotate-180"}`} 
        onClick={() => setOpen(!open)} />
         <div className='inline-flex'>
        <AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500
        ${open && "rotate-[360deg]"}`} />
        <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>Tailwind</h1>
      </div>
      <div className='p-7'><h1 className="text-2xl font-semibold">Home page</h1></div>
    </div>
      </div>
     
  );
};

export default App;