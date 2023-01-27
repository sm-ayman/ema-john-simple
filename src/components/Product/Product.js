import { faCarTunnel, faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './product.css'


const Product = ({product, handleAddToCart}) => {     // const Product = (props){}
    // const {handleAddToCart} = props;
    // const { name, img, seller, price, ratings } = props.product;
    
    
    // const {product, handleAddToCart} = props;
    const { name, img, seller, price, ratings } = product;
     
    
    return (
        <div className='product'>
            <img src={img} alt='' />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            
            <button  onClick={() => handleAddToCart(product)} className='btn-cart'>  {/* props.handleAddToCart(props.product) */}
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}/>
            </button>
        </div>
    );
};

export default Product;