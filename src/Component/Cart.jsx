import React from 'react';
import emptyCart from '../assets/images/emptyCart.png';
import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, incrementQuantity, productQuantity, decrementQuantity, removeProduct, totalBill } = useCart();

  return (
    <section className='p-4 space-y-5'>
      {/* Cart Title */}
      <h1 className='text-5xl tracking-wide font-extrabold'>Cart</h1>

      {/* Conditional Rendering for Cart Items */}
      {cart && cart.length > 0 ? (
        <div className='space-y-5'>
          {/* Cart Headers */}
          <ul className='hidden md:flex justify-between items-center py-5 px-6 bg-slate-200 rounded-lg shadow-md'>
            <li className='font-semibold text-xl text-zinc-700 tracking-wide'>Product</li>
            <li className='font-semibold text-xl text-zinc-700 tracking-wide'>Price</li>
            <li className='font-semibold text-xl text-zinc-700 tracking-wide'>Quantity</li>
            <li className='font-semibold text-xl text-zinc-700 tracking-wide'>Sub Total</li>
          </ul>

          {/* Cart Products */}
          <div className='space-y-2'>
            {cart.map((item) => (
              <div
                key={item._id}
                className='space-y-4 bg-slate-100 py-4 px-2 rounded-lg shadow-md md:flex md:justify-between justify-center items-center'
              >
                {/* Product Info */}
                  <button
                    className='text-xl font-semibold text-red-600'
                    onClick={() => removeProduct(item._id)}
                  >
                    &times;
                  </button>
                <div className='flex flex-col md:flex-row items-start  gap-3 pl-2'>
                  <img
                    src={item.img || 'https://via.placeholder.com/150'}
                    className='md:w-20 w-60 bg-slate-300 p-1 rounded'
                    alt={item.productName || 'Product Image'}
                  />
                  <h4 className='text-xl font-semibold tracking-wide'>{item.productName || 'Product Name'}</h4>
                </div>

                {/* Product Price */}
                <p className='text-xl font-semibold tracking-wide sm:mt-2 md:mt-0'>${item.price}</p>

                {/* Quantity Controls */}
                <div className='flex space-x-4 items-center mt-4 md:mt-0'>
                  <button
                    className='bg-zinc-700 text-white w-10 h-10 font-semibold text-lg'
                    onClick={() => decrementQuantity(item._id)}
                  >
                    -
                  </button>
                  <span className='text-lg'>{item.quantity}</span>
                  <button
                    className='bg-zinc-700 text-white w-10 h-10 font-semibold text-lg'
                    onClick={() => incrementQuantity(item._id)}
                  >
                    +
                  </button>
                </div>

                {/* Subtotal */}
                <p className='text-xl font-semibold tracking-wide sm:mt-2 md:mt-0'>
                  ${(item.price * item.quantity)}
                </p>
              </div>
            ))}
          </div>

          {/* Total Bill */}
          <div className="w-full md:w-[35%] justify-end border border-black py-3">
            <h4 className="text-xl font-semibold mb-3 mx-4 text-gray-800">Cart Totals</h4>
            <hr className="border-black" />
            <table className="w-full text-lg">
              <tbody>
                <tr className="border-b border-black">
                  <td className="py-4 px-2 text-gray-600 font-semibold">Subtotal</td>
                  <td className="py-4 px-2 text-right text-gray-800">${totalBill}</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="py-4 px-2 text-gray-600 font-semibold">Shipping Charge</td>
                  <td className="py-4 px-2 text-right text-gray-800">$10.00</td>
                </tr>
                <tr>
                  <td className="py-4 px-2 text-gray-600 font-semibold">Total</td>
                  <td className="py-4 px-2 text-right text-black font-bold">
                    ${(totalBill + 10.00)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <button className='bg-black text-white px-7 w-full md:w-[35%] py-2 text-xl font-semibold'>Place Order</button>
        </div>
      ) : (
        /* Empty Cart Section */
        <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
          <img src={emptyCart} className='w-[50%] md:w-[30%] mx-auto' alt='Empty Cart' />

          <div className='w-[80%] md:w-[40%] bg-red-300 p-4 rounded-lg shadow-md text-center'>
            <h1 className='text-3xl font-bold mb-4'>Empty Cart ):</h1>
            <p className='mb-6 text-gray-700'>
              Your cart is empty! Please add items to your cart to see them here.
            </p>
            <Link to={'/shop'} className='px-5 py-3 bg-black/85 text-white font-semibold hover:bg-black transition-all duration-300'>
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
