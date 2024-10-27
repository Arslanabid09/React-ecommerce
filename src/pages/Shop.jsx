import React, { useState } from 'react';
import { productItems } from '../Component/Products'; // Product array
import { Card, Category } from '../Component'; // Reusable components

const Shop = () => {
  const [filteredItems, setFilteredItems] = useState(productItems); // Store filtered products

  // Function to handle filtering by price range
  const handleFilterChange = (range) => {
    const [min, max] = range;
    
    // Filter products based on price range
    const filtered = productItems.filter((item) => {
      const price = parseFloat(item.price.replace('$', '')); // Convert price to number
      return price >= min && price <= max;
    });

    setFilteredItems(filtered); // Update state with filtered products
  };

  return (
    <section className='m-5 space-y-10'>
      <h1 className='font-extrabold text-3xl md:text-5xl tracking-wide'>Products</h1>

      {/* Category Component for filtering */}
      <div>
        <Category
          title={'Shop By Price'}
          option1={'$0.00 - $50.00'}
          option2={'$60.99 - $100.99'}
          option3={'$101.00 - $199.99'}
          option4={'$200.99 - $399.00'}
          option5={'$400.00 - $600.00'}
          onChange={handleFilterChange} // Pass function to handle filter change
        />
      </div>

      {/* Product List */}
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
        {filteredItems.map((item) => (
          <Card key={item._id} image={item.img} price={item.price} title={item.productName} _id={item._id} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
