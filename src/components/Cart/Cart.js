import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let totalPrice = 0
    let shipping = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice += product.price;
        shipping += product.shipping;
    }

    return (
        <div>
            <h2>Product's Order Summary</h2>
            <p>Items Ordered: {props.cart.length}</p>
            <p>Product Price: {parseFloat(totalPrice).toFixed(2)}</p>
            <p>Shipping <span>&#38;</span> Handling: {parseFloat((shipping * 20 / 100).toFixed(2))}</p>
            <p>Total Before Tax: {parseFloat((shipping * 10 / 100).toFixed(2))}</p>
            <p>Estimated Tax: {parseFloat((shipping * 15 / 100).toFixed(2))}</p>
            <h2 className="total">Total Price: {parseFloat(parseFloat(totalPrice).toFixed(2) + parseFloat((shipping * 20 / 100).toFixed(2)) + parseFloat((shipping * 10 / 100).toFixed(2)) + parseFloat((shipping * 15 / 100).toFixed(2))).toFixed(2)}</h2>
            <button className="review">Review Your Order</button>
        </div>
    );
};

export default Cart;