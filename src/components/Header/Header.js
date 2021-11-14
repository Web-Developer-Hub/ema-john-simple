import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" src={logo} alt="logo"/>
            </div>
            <div className="navbar">
                <nav>
                    <a href="/home">Home</a>
                    <a href="/shope">Shope</a>
                    <a href="/order">Order</a>
                    <a href="/inventory">Manage Inventory</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;