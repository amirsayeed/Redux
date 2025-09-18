import React from 'react';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto px-2'>
                <Outlet/>
            </div>
        </div>
    );
};

export default RootLayout;