import React from 'react';
import { Outlet } from 'react-router-dom';
import Teaweights from './Teaweights';
import Navbar from './Navbar';

const Base = () => {
    return (
        <div className='flex'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Base;