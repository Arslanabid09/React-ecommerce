import React, { useState, useEffect } from 'react';
import Carasoul1 from '../assets/images/banner/Carasoul1.webp';
import Carasoul2 from '../assets/images/banner/Carasoul2.webp';
import Carasoul3 from '../assets/images/banner/Carasoul3.webp';
import { Link } from 'react-router-dom';

const Carasoul = () => {
    const SliderData = [
        { id: 0, image: Carasoul1 },
        { id: 1, image: Carasoul2 },
        { id: 2, image: Carasoul3 }
    ];
    
    const [index, setIndex] = useState(0);

    // Use effect to update index at intervals
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev === SliderData.length - 1 ? 0 : prev + 1));
        }, 2500);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [SliderData.length]);

    return (
        <div className=' w-[100%] inline-block overflow-hidden'>
            <Link to={'/shop'}>
            <div
                className='flex   transition-transform duration-700 ease-in-out'
                style={{ transform: `translateX(-${index * 100}%)` }}
                >
                {SliderData.map((slide) => (
                    <img
                    key={slide.id}
                    src={slide.image}
                    className='w-full object-contain'
                    alt={`Slide ${slide.id + 1}`}
                    />
                ))}
            </div>
                </Link>
        </div>
    );
};

export default Carasoul;
