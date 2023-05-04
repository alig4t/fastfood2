import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import ModalUI from '../UI/Modal/ModalUI';
import PlaceHolderUI from '../UI/PlaceHolderUI/PlaceHolderUI';

// import { TbSquareRoundedPlusFilled } from 'react-icons/tb';
import { BsFillBagPlusFill } from 'react-icons/bs';
import './ProductCards.css'

import AddToCartAnimation from '../UI/Animate/AddToCart/AddToCartAnimation';

const ProductCards = (props) => {

    /*********************  Fly To Basket Animation  *********************/
    const [showAnimate, setShowAnimate] = useState(-1);

    /*********************  Cart Data  *********************/
    const [cartItems, setCartItems] = useContext(CartContext)


    /*********************  Modal Product  *********************/
    const [showModalProduct, setShowModalProduct] = useState(false)
    const [modalDataProduct, setModalDataProduct] = useState({ imgPath: '', });
    const productModalHandler = (item) => {
        setModalDataProduct(item);
        setShowModalProduct(true);
    }

    /*********************  add Product to Cart Functions  *********************/
    const checkExistProduct = (cartArray, cartItem) => {
        for (let i = 0; i < cartArray.length; i++) {
            if (cartArray[i].id === cartArray.id) {
                return i;
            }
            return -1;
        }
    }

    const addToBasket = (item, index) => {

        const newBasket = [...cartItems];
        let indexProductDuplicated = -1;
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === item.id) {
                indexProductDuplicated = i;
            }
        }
        if (indexProductDuplicated > -1) {
            let updatedItem = newBasket[indexProductDuplicated]
            updatedItem.qty += 1;
            newBasket[indexProductDuplicated] = updatedItem
            setCartItems(newBasket);
        } else {
            setCartItems((prevState) => {
                return [...prevState, { ...item, qty: 1 }]
            })
        }

        if(showAnimate == index){
            setShowAnimate(-1);
            setTimeout(()=>{
                setShowAnimate(index);
            },100)
        }else{
            setShowAnimate(index);
        }

    }


    /********************* Sort Product by sort Value in Json  *********************/

    const sortJsonArray = (jsonArray) => {
        jsonArray.sort(function (a, b) {
            let typeA = a.sort;
            let typeB = b.sort;
            if (typeA < typeB) {
                return -1;
            }
            if (typeA > typeB) {
                return 1;
            }
            return 0;
        })
        return jsonArray
    }

    const sortedProducts = sortJsonArray(props.productList);



    /********************* Product List Elements   *********************/

    let sort = 0;
    let nextKey = 1;
    let clearfix = '';
    const productArray = sortedProducts.map((item, index) => {
        nextKey = (index < sortedProducts.length - 1) ? index + 1 : index
        if (item.sort != sortedProducts[nextKey].sort) {
            clearfix = <div className="clearfix" id={item.slug}></div>
        } else {
            clearfix = ''
        }
        let animateShow = index==showAnimate ? true : false;
        let animateActive = animateShow ? "active" : "";
        return (
            <React.Fragment key={index}>
                <div className="col-md-3 col-6 p-3">
                    <span id={item.slug}></span>
                    <div className="card shadow custom-card">
                        <img className="card-img-top position-relative cursor-pointer" src={`./assets/img/products/${item.imgPath}`}
                            role="button" onClick={() => productModalHandler(item)} />
                           <AddToCartAnimation show={animateShow} img={`./assets/img/products/${item.imgPath}`} />
                            
                        <div className="card-body text-center">
                            <h5 className="card-title">{item.title}</h5>

                            <p className="card-text mb-0"><span>{(item.price * (100 - item.offPercent)) / 100}</span> تومان</p>
                            {item.offPercent > 0 ? <p className="card-text"><span><del>{item.price}</del></span></p> : <p className="card-text"></p>}
                            <a onClick={() => addToBasket(item, index)} role="button">
                                <span className={`material-icons add-basket-icon ${animateActive}`}>
                                    {/* <TbSquareRoundedPlusFilled /> */}
                                    <BsFillBagPlusFill />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                {clearfix}
            </React.Fragment>
        )
    })

    const loadingProducts = (
        <>
            <PlaceHolderUI />
            <PlaceHolderUI />
            <PlaceHolderUI />
            <PlaceHolderUI />
            <PlaceHolderUI />
            <PlaceHolderUI />
            <PlaceHolderUI />
            <PlaceHolderUI />
        </>
    )

    return (
        <>
            <section id="product-box">
                <div className="container">
                    <div className="row p-lg-3">
                        {
                            (props.productList.length == 0) ? loadingProducts : productArray

                        }
                        <ModalUI show={showModalProduct} modalType="food" item={modalDataProduct} handleClose={() => setShowModalProduct(false)} />
                    </div>
                </div>
            </section>
        </>
    )
}
export default ProductCards