import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

import { CartProvider } from "../../context/cartContext";
import { SmsCodeProvider } from "../../context/smsCodeContext";

import Footer from "../Footer/Footer"
import NavbarSection from "../NavbarSection/NavbarSection";

const Layout = (props) => {

    const location = useLocation()
    const [modalLogin, setModalLogin] = useState(false)

    useEffect(() => {
        // console.log(window.location.pathname)
        if (location.pathname == "/cart") {
            setModalLogin(true)
        } else {
            setModalLogin(false)
        }
    })

    return (
        <CartProvider>
            <SmsCodeProvider>
                <NavbarSection modalLogin={modalLogin} />
            </SmsCodeProvider>
            {props.children}
            <Footer />
        </CartProvider>
    )
}

export default Layout