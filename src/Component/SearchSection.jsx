import React from 'react';
import Category from './Category';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

const SearchSection = () => {
  let cartData = useCart();
  
  return (
    <section className='flex flex-col md:flex-row gap-y-4 py-3 justify-between px-4 items-start md:items-center bg-slate-300'>
      <Category title={'Shop by Category'} option1={'Accessories'} option2={'Electronics'} option3={'Cloths'} option4={'Bags'} option5={'Furniture'} />
      <div className='bg-white px-2 py-3 w-full md:w-[60%] flex justify-between'>
        <input 
          type="text" 
          placeholder='Search...' 
          className='font-semibold w-full outline-none border-none' 
        />
        <button><FaSearch /></button>
      </div>
      <Link to={'/cart'} className='relative  flex  justify-center items-center'>
        <FaShoppingCart className='text-2xl' />
        <span className='absolute -top-2 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full'>
          {cartData.cart? cartData.cart.length : 0}
        </span>
      </Link>
    </section>
  );
};

export default SearchSection;
