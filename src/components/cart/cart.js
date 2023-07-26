import React from 'react';
import './Cart.css';
// const Cart = ({props}) => {
// const {cart}= props
const Cart = ({cart}) => {
// console.log(cart)
    let total = 0;
    let shippingCharge =0;
    for(const product of cart){
       total = total  +  product.price ;
       shippingCharge=shippingCharge+product.shipping;
    }
    const tax = parseFloat((total* .1).toFixed(2));
    const grandTotal =total+shippingCharge+tax;
    // const grandTotal2 = parseInt(grandTOtal);
    // console.log(grandTOtal)
    return (
        <div className='cart'>
            <h2>Cart section</h2>
                <p>selected product:{cart.length}</p>
                <p>Price:${total}</p>
                <p>Shipping Charge:${shippingCharge}</p>
                <p>Tax:${tax}</p>
                <p>Grand Total:${grandTotal}</p>
        </div>
    );
};

export default Cart;