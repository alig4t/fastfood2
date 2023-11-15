import React, { useEffect, useContext, useState } from "react";

import { CartContext } from "../../context/CartContext";
import ModalUI from "../UI/Modal/ModalUI"
import OrderElement from "./OrderElement";
import SpinnerLoading from "../UI/SpinnerLoading/SpinnerLoading";


const Order = () => {

    /*********************  Basket Context  *********************/
    const [cartItems, setCartItems] = useContext(CartContext)

    /*********************  Initial States  *********************/
    const [isLoading, setIsLoading] = useState(true);
    const [cartFactor, setCartFactor] = useState({ "sum": 0, "discount": 0, "tax": 0, "finalPrice": 0 });
    const [userAddresses, setUserAddresses] = useState([{}])
    const [modalAddress, setModalAddress] = useState(false)

    /*********************  Calculate Factor using Cart Context  *********************/
    useEffect(() => {
        let sum = 0;
        let discount = 0;
        cartItems.map((item) => {
            sum += item.price * item.qty;
            discount += ((item.price * item.offPercent) / 100) * item.qty
        })
        let tax = sum * 0.10;
        let finalPrice = (sum - discount + tax);
        setCartFactor({
            "sum": sum,
            "discount": discount,
            "tax": tax,
            "finalPrice": finalPrice,
        })
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [cartItems])

    /*********************  User Addresses  *********************/

    useEffect(() => {
        let listOfAddress = [{ id: 254, address: 'شهرک غرب خ دوم پلاک 4' }]
        setUserAddresses(listOfAddress)
    }, [])

    const setUserAddressHandler = (newAddress) => {
        let addr = [...userAddresses];
        addr.unshift(newAddress);
        setUserAddresses(addr);
        setModalAddress(false)
    }
    const deleteUserAddressHandler = (index) => {
        let addr = [...userAddresses];
        addr.splice(index, 1)
        setUserAddresses(addr);
    }
    const openModalAddress = () => {
        console.log("address modal");
        setModalAddress(true);
    }



    return (
        <>
            {isLoading ? <SpinnerLoading /> : ''}
            <OrderElement
                sum={cartFactor.sum}
                discount={cartFactor.discount}
                tax={cartFactor.tax}
                finalPrice={cartFactor.finalPrice}
                userAddresses={userAddresses}
                modalAddress={openModalAddress}
                delAddress={deleteUserAddressHandler}
            />
            <ModalUI show={modalAddress} addAddress={setUserAddressHandler} modalType="address" handleClose={() => setModalAddress(false)} />
        </>
    )
}
export default Order;