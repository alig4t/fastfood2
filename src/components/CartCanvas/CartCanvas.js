import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

import Offcanvas from 'react-bootstrap/Offcanvas';
import './CartCanvas.css'

import { HiMinusCircle } from 'react-icons/hi';
import { HiPlusCircle } from 'react-icons/hi';

const CartCanvas = (props) => {

  /*********************  Basket Context  *********************/
  const [cartItems, setCartItems] = useContext(CartContext)
  let sum = 0;   // The total price of the entire shopping cart
  let qtys = 0;   // The total number of items in the basket

  /*********************  Functions of reducing and increasing products  *********************/
  /****** To increase one unit ******/
  const plusProduct = (item, index) => {
    const newBasket = [...cartItems];
    let newQty = item.qty + 1;
    let updatedItem = newBasket[index]
    updatedItem.qty = newQty;
    newBasket[index] = updatedItem
    setCartItems(newBasket)
  }

  /****** To decrease one unit ******/
  const minesProduct = (item, index) => {
    const newBasket = [...cartItems];
    let newQty = item.qty - 1;
    if (newQty == 0) {     //Remove the product if the number is zero
      newBasket.splice(index, 1);
    } else {
      let updatedItem = newBasket[index]
      updatedItem.qty = newQty;
      newBasket[index] = updatedItem
    }
    setCartItems(newBasket)
    if(newBasket.length==0){
      localStorage.removeItem("cart");
    }
  }

  
  /*********************  List of products in the basket  *********************/

  const itemsList = cartItems.map((item, index) => {
    sum += ((item.price * (100 - item.offPercent)) / 100) * item.qty;  // Add the price of this product to the total price of the basket
    qtys += item.qty;  // Add the number of this product to the total number in the basket
    return (
      <li key={index}>
        <p className="h5">{item.title}</p>
        <div className="d-flex justify-content-between pt-2 font-sm">
          <p className="my-0 pt-1"> {(item.price * (100 - item.offPercent)) / 100} تومان</p>
          <div className="quantity-box d-flex justify-content-between">
            <span className="qty-control" onClick={() => plusProduct(item, index)}>
              <HiPlusCircle />
            </span>
            <span className="qty-current">{item.qty}</span>
            <span className="qty-control" onClick={() => minesProduct(item, index)}>
              <HiMinusCircle/>
            </span>
          </div>
        </div>
      </li>
    )
  })




  return (
    <>
      <Offcanvas show={props.show} onHide={props.handleClose} scroll={true}>
        <Offcanvas.Header closeButton closeVariant='white'>
          <Offcanvas.Title className="canvas-title">سبد خرید</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <ul className="cart-items">
              {itemsList}
            </ul>
          </div>
          <div className="w-100">
            <h5>تعداد آیتم : {qtys} </h5>
            <h5>مجموع خرید : {sum} تومان</h5>
          </div>
          <div className="dropdown mt-3 text-center">
            <Link to='/cart' onClick={props.handleClose} className="btn px-4 btn-canvas border-0 text-white" type="button">
              نهایی کردن سفارش
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>

  );
}


export default React.memo(CartCanvas)
