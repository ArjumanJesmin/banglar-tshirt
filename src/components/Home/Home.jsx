import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';

import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';

import './Home.css'



function Home() {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = tshirt => {
    const exists = cart.find(ts => ts._id == tshirt.id);
    if (exists) {
      toast('You have already added this t-shirt');
    }
    else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  }

  const handleRemoveToCart = id => {
    const remaining = cart.filter(ts => ts._id !== id);
    setCart(remaining)
  }
  return (
    <div className='home-container'>
      <div className='t-shirt-container'>
        {tshirts.map(tshirt => <TShirt
          tshirt={tshirt}
          key={tshirt._id}
          handleAddToCart={handleAddToCart} />)}
      </div>
      <div className="cart-container">
        <Cart handleRemoveToCart={handleRemoveToCart}
          cart={cart} />
      </div>
    </div>
  );
}

export default Home;