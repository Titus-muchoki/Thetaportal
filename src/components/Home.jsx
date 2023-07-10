import React from 'react';
import Fa from "../assets/Kenyan-Tea-Plantations.jpg"
import { IoBarChart } from "react-icons/io5"
import Ktda from "../assets/KTDA-MS.webp"
import Navbar from './Navbar';
import Teaweights from './Teaweights';
const Home = () => {
const handleClick = ({teaWeight}) => {
console.log(teaWeight);
}
    return (
        <div className='grid grid-cols-2 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block w-80 bg-slate-50'>
                <div className='grid md:grid-cols-2  justify-between bg-cyan-300'>
                    <img className='w-20 h-20 rounded-full' src={Ktda} alt='/' />
                    <h2 className='font-bold py-8'>Farmers Portal</h2>
                    
                </div>
                <div className='py-10 grid md:grid-cols-2'>
                    <IoBarChart />
                    <button onClick={handleClick} className='font-bold bg-emerald-500 w-20 rounded-md'>
                       tea
                    </button>
                </div>
            </div>
            <div className=' flex flex-col'>
            <Navbar />
            </div>
        </div>
    );
};

export default Home;