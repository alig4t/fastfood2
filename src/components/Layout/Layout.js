import React, { useEffect, useContext } from "react";

import { CartProvider } from "../../context/cartContext";

import { SmsCodeProvider } from "../../context/smsCodeContext";

import Footer from "../Footer/Footer"
import NavbarSection from "../NavbarSection/NavbarSection";

const Layout = (props) => {



    return (
        <CartProvider>
            <SmsCodeProvider>
                <NavbarSection />
            </SmsCodeProvider>
            {props.children}
            <Footer />
        </CartProvider>
    )
}

export default Layout