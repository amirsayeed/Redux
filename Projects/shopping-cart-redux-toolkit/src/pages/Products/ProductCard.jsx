import React from 'react';

const ProductCard = ({product}) => {
    const {name,image, price, category} = product;
    return (
        <div className="card bg-base-100 shadow-sm">
        <figure>
            <img
            src={image} className='h-[200px] w-full'
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Price: {price}</p>
            <p>Category: {category}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
    );
};

export default ProductCard;