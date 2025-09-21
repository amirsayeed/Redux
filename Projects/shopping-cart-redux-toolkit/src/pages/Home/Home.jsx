import React from 'react';

const Home = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-2'>
            <div className='col-span-2'>
                Display Products
            </div>
            <div>Add Product</div>
        </div>
    );
};

export default Home;