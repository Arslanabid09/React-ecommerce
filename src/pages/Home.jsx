import React from 'react';
import { Carasoul, Card, Facalities } from '../Component';
import { Fa2, FaPlane, FaArrowRotateRight } from 'react-icons/fa6';
// sales image
import Sale1 from '../assets/images/sale/saleImgOne.webp';
import Sale2 from '../assets/images/sale/saleImgTwo.webp';
import Sale3 from '../assets/images/sale/saleImgThree.webp';
import { productOfTheYear } from '../assets/images'; 
// Products Data 
import { specialOffer,productItems } from '../Component/Products';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <section className="">
      {/* Carasoul */}
      <Carasoul />
      {/* facilities */}
      <div className="flex flex-col md:flex-row gap-y-4 justify-between m-7">
        <Facalities icon={<Fa2 />} title="Free Shipping" />
        <Facalities icon={<FaPlane />} title="Two years warranty" />
        <Facalities icon={<FaArrowRotateRight />} title="Return policy in 30 days" />
      </div>
      <hr className="" />
      <div className="flex flex-col md:flex-row gap-2 m-5 items-center">
        <div className=" ">
          <Link to={'/shop'}>
          <img className="object-contain" src={Sale1} alt="phone-Sale-1" />
          </Link>
        </div>
        <div className="flex flex-col gap-y-4">
          <Link to={'/shop'}>
          <img src={Sale2} className="object-contain" alt="Electronics" />
          </Link>
         <Link to={'/shop'}><img src={Sale3} className="object-contain" alt="Offers" /></Link>
        </div>
      </div>
      {/* Special offers */}
      <h3 className="font-extrabold m-10 text-4xl tracking-wider">Special Offers</h3>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 m-5">
        {specialOffer.map((item) => (
          <div key={item._id}>
            <Card _id={item._id} image={item.img} price={item.price} title={item.productName} />
          </div>
        ))}
      </div>
      {/* Product of the Year */}
      <div
        className="w-full h-auto min-h-80 my-5 bg-cover bg-no-repeat md:bg-center flex    items-center justify-end "
        style={{ backgroundImage: `url(${productOfTheYear})` }}
      >
        <div className=" p-8 w-full md:w-3/4 lg:w-2/5  mx-10">
          <h2 className="text-4xl md:text-5xl font-bold">Product of the Year</h2>
          <p className="mt-4 md:text-base text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quia architecto commodi blanditiis
            quam molestias culpa non tenetur fugit aspernatur laborum maiores, maxime ab ea.
          </p>
          <Link to={'/shop'} className="inline-block mt-8 px-4 md:px-8 py-2 bg-zinc-800 hover:bg-zinc-900 text-white font-semibold ">
            Shop Now!
          </Link>
        </div>
      </div>
      {/* new arrivals */}
      <h3 className="font-extrabold m-10 text-4xl tracking-wider">New Arrivals</h3>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 m-5">
        {productItems.map((item) => (
          <div key={item._id}>
            <Card _id={item._id} image={item.img} price={item.price} title={item.productName} />
          </div>
        )).slice(25,33)}
      </div>

    </section>
  );
};

export default Home;
