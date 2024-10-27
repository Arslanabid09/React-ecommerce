import React from 'react';
import { useParams } from 'react-router-dom';
import { productItems, specialOffer } from '../Component/Products';
import { useCart } from '../Context/CartContext';

const Singlepage = () => {
  // use param to get single selected product
  const params = useParams();
  let productData = productItems.find(item => item._id == params.id) || specialOffer.find(item => item._id == params.id);
  // custom hook for add to cart
  let Cart = useCart();
  
  return (
    <section className='flex flex-col md:flex-row justify-center bg-white my-3 mx-10 p-10 gap-10 md:gap-0'>
      {/* Product Image Section */}
      <div className='w-full md:w-[50%]'>
        <img 
          src={productData.img} 
          alt="Product" 
          loading='lazy'
          className=' mx-auto object-cover rounded-md shadow-md' 
        />
      </div>

      {/* Product Details Section */}
      <div className='w-full md:w-1/2 space-y-5'>
        {/* Product Name */}
        <h1 className='md:text-5xl text-3xl text-center font-extrabold tracking-wider text-gray-800'>
          {productData.productName}
        </h1>

        {/* Product Price */}
        <p className='text-xl font-semibold'>${productData.price}</p>
        {/* Product Description */}
        <p className='text-gray-600 text-center leading-relaxed'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
          Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique.
        </p>

        {/* Color Selection */}
        <p className=' font-semibold text-lg'>Color:<span className='text-gray-600 hover:underline underline-offset-4 '>{productData.color}</span></p>


        {/* Buy Button */}
        <button onClick={() => Cart.AddToCart(productData._id)} className='mt-4 w-full bg-black text-white  py-3  text-center font-semibold'>
        Add To Cart
        </button>
      </div>
    </section>
  );
};

export default Singlepage;
