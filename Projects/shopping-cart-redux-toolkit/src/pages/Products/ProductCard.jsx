import React from 'react';

const ProductCard = ({product}) => {
    const {name,image, price, category} = product;

    const handleAddToCart = () =>{

    }

    return (
        <div className="card bg-base-100 shadow-md">
        <figure>
            <img
            src={image} className='h-48 w-full object-cover'
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className='text-base font-medium'>Category: {category}</p>
        <div className="card-actions items-center justify-end">
            <p className="text-xl font-semibold">${price}</p>
            <button onClick={handleAddToCart} className="btn bg-violet-500 text-white">Add to Cart
            </button>
        </div>
        </div>
        </div>
    );
};

export default ProductCard;