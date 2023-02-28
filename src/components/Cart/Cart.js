import React from 'react';
import './cart.css'

const Cart = ({ cart, clearCart, children }) => {

    let total = 0, shipping = 0, quantity = 0;
    for (const product of cart) {
        quantity += product.quantity;
        total = total + product.price * product.quantity;
        shipping += product.shipping * product.quantity;
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);


    return (
        <div className='cart'>
            <h4 className='cart-header'>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total price: ${total} </p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total:  ${grandTotal.toFixed(2)}</h5>
            <button onClick={clearCart}>Clear Cart</button>
            {children}
        </div>
    );
};

export default Cart;