import React, { useState, useEffect, useRef } from 'react';

const Category = ({
  title,
  option1,
  option2,
  option3,
  option4,
  option5,
  onChange
}) => {
  const [Toggle, setToggle] = useState(false);
  const menuRef = useRef(null);

  // Handle click outside to close the category box
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false); // Close the menu if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  // Function to handle price selection
  const handleSelect = (range) => {
    onChange(range); // Pass the selected range back to the parent component
    setToggle(false); // Close the menu after selection
  };

  return (
    <section className="py-6">
      {/* Category Header */}
      <div
        className="flex gap-2 items-center cursor-pointer"
        onClick={() => setToggle(!Toggle)}
      >
        {/* Two bars icon */}
        <span className="text-3xl font-semibold text-neutral-600">=</span>
        <p className="text-lg font-semibold tracking-wider ">{title}</p>
      </div>

      {/* Category List */}
      <ul
        ref={menuRef} // Attach ref to the menu
        className={`absolute z-20 left-0 w-auto min-w-[15%] text-center bg-white shadow-lg transition-transform duration-500 ease-in-out   
          ${Toggle ? 'translate-x-0 mx-5' : '-translate-x-full'} flex flex-col gap-6 p-6 `}
      >
        <li 
          className="cursor-pointer hover:scale-110 duration-300 text-gray-700 font-semibold border-b-2 border-gray-500 tracking-wider text-lg"
          onClick={() => handleSelect([0, 50])} // Update range
        >
          {option1}
        </li>
        <li 
          className="cursor-pointer hover:scale-110 duration-300 text-gray-700 font-semibold border-b-2 border-gray-500 tracking-wider text-lg"
          onClick={() => handleSelect([60.99, 100.99])}
        >
          {option2}
        </li>
        <li 
          className="cursor-pointer hover:scale-110 duration-300 text-gray-700 font-semibold border-b-2 border-gray-500 tracking-wider text-lg"
          onClick={() => handleSelect([101.00, 199.99])}
        >
          {option3}
        </li>
        <li 
          className="cursor-pointer hover:scale-110 duration-300 text-gray-700 font-semibold border-b-2 border-gray-500 tracking-wider text-lg"
          onClick={() => handleSelect([200.99, 399.00])}
        >
          {option4}
        </li>
        <li 
          className="cursor-pointer hover:scale-110 duration-300 text-gray-700 font-semibold border-b-2 border-gray-500 tracking-wider text-lg"
          onClick={() => handleSelect([400.00, 600.00])}
        >
          {option5}
        </li>
      </ul>
    </section>
  );
};

export default Category;
