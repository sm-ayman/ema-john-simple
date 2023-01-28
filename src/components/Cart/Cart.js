import React from 'react';
import './cart.css'

const Cart = ({ cart }) => {

    let total = 0, shipping = 0;
    for (const product of cart) {
        total += product.price;
        shipping += product.shipping;
    }
    const tax = (total* 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);


    return (
        <div className='cart'>
            <h4 className='cart-header'>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: ${total} </p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total:  ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;