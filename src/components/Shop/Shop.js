import React, { useEffect, useState } from 'react';
import './shop.css'
import  Product from '../Product/Product'
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(() => {
         const storedCart = getStoredCart();
         const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            // console.log(addedProduct);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // console.log(addedProduct);
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    },[products])

    const handleAddToCart = (selectedProduct) => {        
        // console.log(product.name);
        // cart.push(product);      !do not do this 
        let newCart = [];
        const exists = cart.find(product => product.id == selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id != selectedProduct.id);
            exists.quantity += 1;
            newCart = [...rest, exists];
        }
        // const newCart = [...cart, selectedProduct];
        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map((product) => <Product 
                    key={product.id}
                    product = {product}
                    handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
                {/* <h2>This is Product: {products.length} </h2> */}
            </div>
            <div className='cart-container'> 
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;