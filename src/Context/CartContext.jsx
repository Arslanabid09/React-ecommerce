import { createContext, useContext, useEffect, useState } from "react";
import { productItems, specialOffer } from "../Component/Products";

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider component
export const CartProvider = ({ children }) => {
  // State for cart, total bill, and product quantity
  const [cart, setCart] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);

  // Function for adding a product to the cart
  const AddToCart = (id) => {
    // Find the product from productItems or specialOffer
    const productToAdd = productItems.find((product) => product._id == id);

    // Check if the product is already in the cart
    const isInCart = cart.find((item) => item._id == id);

    if (isInCart) {
      // If the product is already in the cart
      alert("Product already in cart, please check your cart.");
    } else {
      // If the product is not in the cart, add it with an initial quantity of 1
      const updatedCart = [...cart, { ...productToAdd, quantity: productQuantity }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  // Function to increment product quantity
  const incrementQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item._id == id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Function to decrement product quantity
  const decrementQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item._id == id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Function to remove a single product
  const removeProduct = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // UseEffect to recalculate total bill whenever the cart changes
  useEffect(() => {
    const newTotalBill = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalBill(newTotalBill);
  }, [cart]);

  // UseEffect to get stored data from localStorage on initial render
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("cart"));
    if (storedData) {
      setCart(storedData);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        AddToCart,
        incrementQuantity,
        decrementQuantity,
        removeProduct,
        cart,
        totalBill,
        productQuantity,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
