import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import { Cart } from '.';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();
    return (
        <div className="navbar-container">
            <p className="logo">
                <Link href="/">StartsUp Nikky Store</Link>
            </p>
            <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
                <AiOutlineShopping/>
                <spam className="cart-item-qty">{totalQuantities}</spam>
            </button>
            {showCart && < Cart />}
        </div> 
    )
}

export default Navbar;