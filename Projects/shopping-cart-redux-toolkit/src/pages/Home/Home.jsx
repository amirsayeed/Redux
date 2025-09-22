import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../Products/ProductCard';


const Home = () => {
    const products = useSelector((state) => state.products);
    console.log(products);

    return (
        <div className='grid lg:grid-cols-3 grid-cols-2'>
            <div className='col-span-2'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {
                    products.length ? products.map((product,idx)=>
                    <ProductCard key={idx} product={product}/>
                    ) : <div><p>No Products found</p></div>
                }
                </div>
            </div>
            <div>Add Product</div>
        </div>
    );
};

export default Home;