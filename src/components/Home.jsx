import React, { useState } from 'react';
import Fa from "../assets/Kenyan-Tea-Plantations.jpg"
import { IoBarChart } from "react-icons/io5"
import Ktda from "../assets/KTDA-MS.webp"

const Home = () => {
    const [Teaweight, setTeaWeight] = useState([]);

    const displayTea = () => {
        setTeaWeight();
    }
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block w-80 bg-slate-50'>
                <div className='grid md:grid-cols-2  justify-between bg-cyan-300'>
                    <img className='w-20 h-20' src={Ktda} alt='/' />
                    <h2 className='font-bold py-8'>Farmers Portal</h2>
                </div>
                <div className='py-10 grid md:grid-cols-2'>
                    <IoBarChart />
                    <button className='font-bold bg-emerald-500 w-20 rounded-md'>Tea</button>
                </div>

            </div>
            <div className=''>

            </div>


        </div>
    );
};

export default Home;