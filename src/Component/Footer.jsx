import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-white/40'>
      <div className='p-7 flex flex-col  md:flex-row  justify-center md:justify-between'>
        <div className='md:w-2/5 space-y-3'>
          <h2 className='text-2xl lg:text-3xl font-bold'>Know About Our Store.</h2>
          <p className='w-full md:w-[70%] text-sm text-gray-700 font-semibold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa laborum fuga temporibus perspiciatis, fugit aliquam modi consequuntur cupiditate. Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
        </div>
        <div className='flex flex-col md:flex-row md:w-3/5 justify-between items-start'>
          <div className='space-y-5 md:w-1/5'>
            <h3 className='text-2xl font-bold'>Shop</h3>
            <ul className='space-y-2'>
              <li className='text-gray-700 font-semibold tracking-wide hover:underline underline-offset-4 cursor-pointer'>Accessories</li>
              <li className='text-gray-700 font-semibold tracking-wide hover:underline underline-offset-4 cursor-pointer'>Cloths</li>
              <li className='text-gray-700 font-semibold tracking-wide hover:underline underline-offset-4 cursor-pointer capitalize'>Electronics</li>
              <li className='text-gray-700 font-semibold tracking-wide hover:underline underline-offset-4 cursor-pointer capitalize'>Special Offers</li>
              <li className='text-gray-700 font-semibold tracking-wide hover:underline underline-offset-4 cursor-pointer capitalize'>New Arrivals</li>
            </ul>
          </div>
          <div className='space-y-3 md:w-[60%]'>
            <h3 className='text-2xl font-bold'>Subscribe to our newsletter.</h3>
            <p className='text-gray-700 font-semibold tracking-wider'>Lorem ipsum dolor sit amet consectetur.</p>
            <div className='flex  '>
              <input type="email" className='p-3 outline-none w-full font-semibold ' placeholder='Enter Your Email' />
              <button className='bg-black text-white px-5 p-2 md:py-0 font-semibold capitalize'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center gap-6 p-3'>
        <FaFacebook className='text-3xl text-blue-800' />
        <FaInstagram className='text-3xl text-red-700' />
        <FaYoutube className='text-3xl text-red-800' />
        <FaTwitter className='text-3xl text-blue-600' />
      </div>
      <hr className='border-gray-500' />
      <p className='p-5 text-center italic text-gray-700 font-semibold tracking-wide capitalize'>ecommerce Store | Made with React and Tailwind CSS</p>
    </footer>
  );
}

export default Footer;
