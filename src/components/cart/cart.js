import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h2>cart section</h2>
                <p>selected product:{cart.length}</p>
        </div>
    );
};

export default Cart;