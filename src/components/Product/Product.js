import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { img, name, key, price, priceFraction, seller, shipping, stock, wholePrice, url, starCount } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product-container">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="details">
                <h2>{name}</h2>
                <h4>By: {seller}</h4>
                <h3><span>&#36;</span> {price}</h3>
                <p>Only {stock} left in stock - order soon</p>
                <button onClick={() => { props.handleAddToCart(props.product) }}> {element} &nbsp;&nbsp;Add To Cart</button>
                {/* <button onClick={()=> props.handleAddToCart(name)}>Add To Cart</button>  same hare..*/}
            </div>
        </div>
    );
};

export default Product;