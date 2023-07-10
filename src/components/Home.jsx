import React from 'react';
import Tea from "../assets/gry.jpg"
const Home = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
            <img className='w-full h-full' src={Tea} alt='/' />
            </div>
            
        </div>
    );
};

export default Home;