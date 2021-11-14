import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Shop.css'
const element = <FontAwesomeIcon icon={faShoppingCart} />

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    const [displayProducts, setDisplayProducts] = useState([])

    useEffect(() => {
        const URL = `./fakeData/products.JSON`;
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
                setDisplayProducts(data)
            });
    }, [])
    
    useEffect(() => {
        if (products.length > 0) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                if (Object.hasOwnProperty.call(savedCart, key)) {
                    const productKey = key;
                    const addedProduct = products.find((product) => product.key === productKey)
                    if (addedProduct) {
                        const quantity = savedCart[key];
                        addedProduct.quantity = quantity;
                        storedCart.push(addedProduct);
                    }
                }
            }
            setCart(storedCart);
        }
    }, [products])

    //this is my button handler...
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        //add to product localStorage....
        addToDb(product.key)
    }
    //this is handle serarch function
    const handleSearch = (event) => {
        const searchText = event.target.value;
        const matchedProduct = products.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProduct);
    }

    return (
        <>
            <div className="search-bar">
                <input onChange={ handleSearch } type="text" placeholder="Search Your Product"/>
                <span>{element} {cart.length}</span>
            </div>
        <div className="shop-container">
            <div className="product">
                    <h3 className="count">Total available products: {products.length}</h3>
                    
                {
                    displayProducts.map((product) => <Product
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
        </>
    );
};

export default Shop;