import React from "react";

import { CartProvider } from "../../context/CartContext";
import { SmsCodeProvider } from "../../context/SmsCodeContext";

import Footer from "../Footer/Footer"
import NavbarSection from "../NavbarSection/NavbarSection";
import { AuthProvider } from "../../context/AuthContext";
import { useEffect } from "react";

const Layout = (props) => {

    return (
        <AuthProvider>
            <CartProvider>
                <SmsCodeProvider>
                    <NavbarSection />
                </SmsCodeProvider>
                {props.children}
                <Footer />
            </CartProvider>
        </AuthProvider>
    )
}

export default Layout