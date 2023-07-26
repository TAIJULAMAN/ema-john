import React, { useEffect, useState } from 'react';
import './Products.css';
import Product from '../product/Product';
import Cart from '../cart/cart.js'

const Products = () => {
    const [products,setProduct] = useState([])
    // cart er state,value adan prodan er jnno
    const [cart,setCart] =useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
        // .then(data=>console.log(data))
    },[])
// cart er value add or remove er jnno
    const addToCart=(product)=>{
      // console.log(product);
      const newCart=[...cart,product];
      setCart(newCart)
    }

    return (
        <div>
          <h1 className='shop-header'>SHOP SECTION</h1>
          <div className='shop-container'>
          <div className="products-container">
                {/* <h2>product section:{products.length}</h2> */}
                {
                 products.map(product=><Product 
                 key={product.id}
                 product={product}
                 addToCart={addToCart}
                  //product,cart sob e pathano jay!  
               ></Product>)
               }
          </div>
          <div className="cart-container">
                <Cart cart={cart}></Cart>
          </div>
        </div>
        </div>
    );
};

export default Products;