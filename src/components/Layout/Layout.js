import React, { useEffect, useState } from "react";

import { CartProvider } from "../../context/cartContext";

import Footer from "../Footer/Footer"
import NavbarSection from "../NavbarSection/NavbarSection";

const Layout = (props) => {
    let cart = [];
    useEffect(()=>{
        console.log("App started..");
    })

    return (
        <CartProvider>
            <NavbarSection />
            {props.children}
            <Footer />
        </CartProvider>
    )
}

export default Layout