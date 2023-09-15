import React, { useState, useContext, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import CartCanvas from '../CartCanvas/CartCanvas';
import ModalUI from '../UI/Modal/ModalUI';
import './NavbarSection.css'

import list_products_json from '../../pages/Products/src/list-products.json'
// import { BsBasketFill } from 'react-icons/bs';
import { IoCart } from 'react-icons/io5';


const NavbarSection = (props) => {

  /*********************  Basket Context  *********************/
  const [cartItems, setCartItems] = useContext(CartContext)
  let qtyAll = 0    // Total items in the Shopping Cart
  for (let item of cartItems) {
    qtyAll += item.qty
  }

  /********************* NavBar Custom *********************/
  const expand = "lg";   // Nav expand responsive size
  const [showNavbarCanvas, setShowNavbarCanvas] = useState(false);
  const openNavCanvas = () => { setShowNavbarCanvas(true) }
  const closeNavCanvas = () => { setShowNavbarCanvas(false) }


  /*********************  Modal Login Form  *********************/
  /*********************  if in Cart Page, Modal Opens as Default  *********************/  
  const location = window.location.pathname
  const [showModalLoginForm, setShowModalLoginForm] = useState(false)

  const handleModalLoginClose = useCallback(() => {
    setShowModalLoginForm(false)
  }, [])

  const openLoginForm = (e) => {
    e.preventDefault();
    if (showNavbarCanvas) {
      closeNavCanvas()
      setTimeout(() => {
        setShowModalLoginForm(true);
      }, 500);
    } else {
      setShowModalLoginForm(true);
    }
  }
  useEffect(() => {
    if (location === '/cart' && showModalLoginForm === false) {
      setShowModalLoginForm(true)
    }else{
      setShowModalLoginForm(false)
    }
  },[location])

  /*********************  Counter Basket Effect *********************/
  const [basketActiveClass, setBasketActiveClass] = useState(false)
  const handleToggleActive = () => {
    setBasketActiveClass(true);
    setTimeout(() => {
      setBasketActiveClass(false)
    }, 1000);
  };

  /*********************  save cart in browser *********************/
  useEffect(() => {
    if (cartItems.length > 0) {
      handleToggleActive()
      let cartArray = [];
      cartItems.forEach(element => {
        let itemObj = {
          id: element.id,
          qty: element.qty
        }
        cartArray.push(itemObj)
      });
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(cartArray))
    }
  }, [cartItems])


  /*********************  get cart from browser *********************/
  useEffect(() => {
    let parseCartArray = []
    if (localStorage.getItem("cart")) {
      let cartLocalStorageArray = localStorage.getItem("cart");
      parseCartArray = JSON.parse(cartLocalStorageArray)
    }

    if (parseCartArray.length > 0) {
      fetch("https://mocki.io/v1/2cb291d5-e9a9-4e9e-b4d8-20c73fd35cc6")
        .then((resp) => {
          return resp.json();
        })
        .then((respData) => {
          let getBrowserCart = [];
          parseCartArray.forEach(element => {
            let elementIndex = respData.findIndex(x => x.id === element.id);
            let newObj = {
              ...respData[elementIndex],
              qty: element.qty
            }
            getBrowserCart.push(newObj)
          });
          setCartItems(getBrowserCart)
        })
        .catch(() => {
          let getBrowserCart = [];
          parseCartArray.forEach(element => {
            let elementIndex = list_products_json.findIndex(x => x.id === element.id);
            let newObj = {
              ...list_products_json[elementIndex],
              qty: element.qty
            }
            getBrowserCart.push(newObj)
          });
          setCartItems(getBrowserCart)
        })
    }

  }, [])



  /********************* Modal Canvas Cart *********************/
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => setShowCart(true);    //  Open Cart Modal
  const handleCloseCart = useCallback(() => {  // Close Cart Modal
    setShowCart(false)
  }, []);


  return (
    <>

      <Navbar key={expand} fixed='top' variant="dark" expand={expand} className="mb-3 nav-custom">
        <Container fluid>
          <Link to="/" className="brand-custom navbar-brand" style={{ lineHeight: "43px" }}>{process.env.REACT_APP_BASE_TITLE}</Link>
          <div className='d-flex'>
            <Navbar.Toggle onClick={openNavCanvas} aria-controls={`offcanvasNavbar-expand-${expand}`} className="bar-icon-container" />

            <Button className="d-block d-lg-none btn basket-container border-0 bg-none mx-sm-2"
              type="button" onClick={handleShowCart}>
              <span className={`sum-basket text-white ${basketActiveClass ? 'active' : ''}`}>{qtyAll}</span>
              <span className="material-icons basket-icon">
                <IoCart />
              </span>
            </Button>

          </div>


          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            show={showNavbarCanvas}
            onHide={closeNavCanvas}
          >
            <Offcanvas.Header closeButton style={{ borderBottom: "1px solid #e8e8e8" }}>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{ fontWeight: "bold" }}>
                {process.env.REACT_APP_BASE_TITLE}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">

                <Link className="nav-link" to="/Products" onClick={closeNavCanvas}>سفارش اینترنتی غذا</Link>
                <Link className="nav-link" to="/branches" onClick={closeNavCanvas}>شعبه ها</Link>
                <Link className="nav-link" to="/about" onClick={closeNavCanvas}>درباره ما</Link>
                <a className="nav-link" onClick={(e) => openLoginForm(e)} style={{ cursor: 'pointer' }}>ورود</a>

                <div className='d-block d-lg-none text-center mt-5'>
                  <span className='btn-call'>تماس با پشتیبانی:  9999-021</span>
                  <div className='clearfix'></div>
                  <span className='d-block version-type'>نسخه 1.0.5</span>

                </div>

                <Button className="d-none d-lg-block btn basket-container border-0 bg-none py-0"
                  onClick={handleShowCart} style={{ marginLeft: '6px' }}>
                  <span className={`sum-basket text-white ${basketActiveClass ? 'active' : ''}`}>{qtyAll}</span>
                  <span className="material-icons basket-icon">
                    <IoCart />
                  </span>
                </Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

        </Container>
      </Navbar>

      <CartCanvas show={showCart} handleClose={handleCloseCart} />
      <ModalUI show={showModalLoginForm} modalType="loginform" handleClose={handleModalLoginClose} />
    </>
  );
}

export default React.memo(NavbarSection)

