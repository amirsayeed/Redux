import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const RootLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className='max-w-7xl mx-auto px-2'>
                <Outlet/>
            </div>
        </div>
    );
};

export default RootLayout;