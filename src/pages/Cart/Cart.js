import React,{useEffect} from "react";
import NavbarSection from "../../components/NavbarSection/NavbarSection";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Order from "../../components/Order/Order";
import Footer from "../../components/Footer/Footer";

const Cart = (props) => {
     useEffect(() => {
        document.title = process.env.REACT_APP_BASE_TITLE + " | " + props.title;
      },[]);
    return (
    <>
        <NavbarSection modalLogin={true} />
        <Breadcrumb title="سفارش غذا" />
        <Order />
        <Footer />
    </>
    )
}
export default Cart;