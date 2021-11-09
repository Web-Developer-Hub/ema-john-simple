import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        const URL = `./fakeData/products.JSON`;
        fetch(URL)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [])
    
    //this is my button handler...
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product">
                <h3 className="count">Total available products: {products.length}</h3>
                {
                    products.map((product) => <Product
                    key={product.key}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    >
                    </Product>)
                }
            </div>

            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;