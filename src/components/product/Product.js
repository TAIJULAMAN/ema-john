import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

// const Product = (props) => {
const Product = ({product,addToCart}) =>{
    // const {product,addToCart}=props;
    const {img,name,price,seller}=product;
 
    return (
     <div className='product'>
            <img src={img} alt="" />
        <div className="product-info">
            <p className='product-name'>{name}</p>
            <p>price:${price}</p>
            <p>brand:{seller}</p>
        </div>
        {/* <button onClick={()=>props.addToCart(props.product)} className="btn"> */}
        <button onClick={()=>addToCart(product)} className="btn">
            <p className='cart-p'>add to cart</p>
            <FontAwesomeIcon icon={faShoppingCart} />

        </button>
    </div>
    );
};

export default Product;