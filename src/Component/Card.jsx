import React from 'react';
import productimage from '../assets/images/products/newArrival/newArrOne.webp';
import { Link } from 'react-router-dom';

const Card = ({
  image,
  title,price,
  _id
}) => {
  return (
      <div className="relative group"> {/* Added group class for hover effect */}
        {/* "New" badge */}
        <span className="absolute top-3 left-5 bg-black text-white px-5 py-[0.30rem] font-semibold text-lg">
          new
        </span>

        {/* Product Image */}
        <img src={image} alt="Product" className="object-contain w-full" loading='lazy' />

        {/* Text on top of the image */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/45  text-white opacity-0 translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 space-y-3">
          {/* Product details */}
          <div className="flex justify-between  ">
            <h2 className="font-semibold text-lg text-slate-950 tracking-wide ">{title}</h2>
            <span className="font-semibold text-lg text-gray-600">{price}</span>
          </div>
          <Link to={`/shop/${_id}`} className="inline-block text-center w-full   p-1 text-gray-600 cursor-pointer bg-white font-semibold px-2 ">View Detailes</Link>
        </div>
      </div>
  );
};

export default Card;
