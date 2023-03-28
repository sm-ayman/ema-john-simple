import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import {deleteShoppingCart, removeFromDb} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const {products,initialCart} = useLoaderData();  // { products: products, initialCart: initialCart }
    const [cart, setCart] = useState(initialCart);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    return (
        <div className='shop-container'>
            {/* <h4>Orders: {products.length}</h4>
            <p>Initial Cart: {cart.length}</p> */}   
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveItem = {handleRemoveItem}
                    ></ReviewItem> )
                }
                {
                    cart.length === 0 && <h3>Ops! No items for review :'( Please <Link to={'/'}>shop here</Link>.</h3>
                }
            </div>
            
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/shipping'>
                        <button>Proceed Shipping</button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
    
};

export default Orders;