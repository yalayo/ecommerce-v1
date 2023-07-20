import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { runFireworks } from '../lib/util';

import { useStateContext } from '../context/StateContext';



const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext(); 

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    }, []);

    return (
        <div className="success-wrapper">
            <div className="success">
                <p className="icon">
                < BsBagCheckFill />
                </p>
                <h2>Thank you for your order!</h2>
                <p className="email-msg">Check your email inbox for the receipt</p>
                <p className="description">
                    If you have any question, please email us to: 
                    <a className="email" href="mailto:test@test.com">
                        test@test.com
                    </a> 
                </p>
                <Link href="/">
                    <button type="button" width="300px" className="btn">
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Success;