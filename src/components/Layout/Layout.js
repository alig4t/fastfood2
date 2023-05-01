import React, { useEffect, useState } from "react";

import NavbarSection from "../NavbarSection/NavbarSection";
import { CartProvider } from "../../context/cartContext";

const Layout = (props) => {
    let cart = [];
    useEffect(()=>{
        console.log("App started..");
    })

    return (
        <CartProvider>
            <NavbarSection />
            {props.children}
        </CartProvider>
    )
}

export default Layout