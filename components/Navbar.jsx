import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <p className="logo">
                <Link href="/">StartsUp Nikky Store</Link>
            </p>
            <button type="button" className="cart-icon" onClick="">
                <AiOutlineShopping/>
                <spam className="cart-item-qty">1</spam>
            </button>
        </div> 
    )
}

export default Navbar;