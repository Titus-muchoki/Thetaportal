import { useState } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";


const App = () => {
  const [open, setOpen] = useState(true)
  return (
    <div className="flex">
      <div className={`h-screen bg-slate-500 p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300  relative`}>
        <BsFillArrowLeftSquareFill className={`bg-white text-dark-purple text-3xl rounded-full 
        absolute -right-3 top-9 border border-slate-500 cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
      </div>
      <div className='p-7'><h1 className="text-2xl font-semibold">Home page</h1></div>
    </div>
  );
};

export default App;