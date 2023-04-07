import React from 'react';
import './Cart.css';


const Cart = ({cart,handleRemoveToCart }) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }
    else{
        message = <div>
            <h3>Thanks for wasting your money</h3>
        </div>
    }
    return (
        <div>
            <h2>Order summary: {cart.length === 1 ? 'blue' : 'red'}</h2>
            <p className={`bold ${cart.length === 3 ? 'yellow' : 'purple'}`}>SomeThings</p>
            {cart.length >2 
            ? 
            <span className='purple'>Aro kino</span>
            : 
            <span>Fokira</span>}
            {message}
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={ ()=> handleRemoveToCart(tshirt._id) }>X</button></p>)
            }
            {
                cart.length === 2 && <p>Double bones!!</p>
            }
            {
                cart.length ===3 || <h3>Tinta to hoilo na!!</h3>
            }
        </div>
    );
};

export default Cart;