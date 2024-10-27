import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsStaggered } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [Toggle, setToggle] = useState(false);

  return (
    <header className='flex justify-between py-4 px-5 bg-white border-b border-black'>
      {/* logo */}
      <Link to={'/'} className='text-2xl md:text-3xl px-4 font-bold tracking-wider hover:tracking-widest duration-500'>ClickNBuy</Link>

      <nav className='relative'>
        <span className='cursor-pointer  md:hidden'>
          {Toggle? <FaTimes className='text-lg' onClick={() => setToggle(!Toggle)} /> : <FaBarsStaggered className='text-lg' onClick={() => setToggle(!Toggle)} />}
        </span>

        {/* nav links */}
        <ul
          className={`fixed top-0 left-0 z-50 px-5 w-[50%] h-full bg-white transition-transform duration-500 ease-in-out md:static md:flex md:flex-row md:gap-10 md:w-auto md:h-auto md:translate-x-0 
          ${Toggle ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 flex flex-col gap-6 p-4 md:p-0`}>
          <li className='cursor-pointer text-gray-400 text-lg font-semibold hover:underline underline-offset-2 hover:text-black hover:translate-x-1 duration-300 '><Link to={'/'}>Home</Link></li>
          <li className='cursor-pointer text-gray-400 text-lg font-semibold hover:underline underline-offset-2 hover:text-black hover:translate-x-1 duration-300'><Link to={'/about'}>About</Link></li>
          <li className='cursor-pointer text-gray-400 text-lg  font-semibold hover:underline underline-offset-2 hover:text-black hover:translate-x-1 duration-300'><Link to={'/shop'}>Shop</Link></li>
          <li className='cursor-pointer text-gray-400 text-lg font-semibold hover:underline underline-offset-2 hover:text-black hover:translate-x-1 duration-300'><Link to={'/contact'}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
