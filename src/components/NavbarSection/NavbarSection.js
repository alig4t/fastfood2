import React, { useState, useContext, useEffect, useRef } from 'react';
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

import { BsBasketFill } from 'react-icons/bs';


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



  useEffect(() => {
    console.log("NavBar..");
  })

  /*********************  Modal Login Form  *********************/
  const [showModalLoginForm, setShowModalLoginForm] = useState(props.modalLogin)
  const openLoginForm = (e) => {
    e.preventDefault();
    if (showNavbarCanvas) {
      closeNavCanvas()
    }
    setShowModalLoginForm(true);
  }


  /*********************  Counter Basket Effect  *********************/
  const [basketActiveClass, setBasketActiveClass] = useState(false)
  const handleToggleActive = () => {
    setBasketActiveClass(true);
    setTimeout(() => {
      setBasketActiveClass(false)
    }, 2500);
  };
  useEffect(() => {
    handleToggleActive()
  }, [cartItems])


  /********************* Modal Canvas Cart *********************/
  const [showCart, setShowCart] = useState(false);
  const handleCloseCart = () => setShowCart(false);  // Close Cart Modal
  const handleShowCart = () => setShowCart(true);    //  Open Cart Modal




  return (
    <>

      <Navbar key={expand} fixed='top' variant="dark" expand={expand} className="mb-3 nav-custom">
        <Container fluid>
          <Link to="/" className="brand-custom navbar-brand">فست فود اینترنتی</Link>
          <div className='d-flex'>
            <Navbar.Toggle onClick={openNavCanvas} aria-controls={`offcanvasNavbar-expand-${expand}`} className="bar-icon-container" />

            <Button className="d-block d-lg-none btn basket-container border-0 bg-none py-0"
              type="button" onClick={handleShowCart} style={{ marginLeft: '6px' }}>
              <span className={`sum-basket text-white ${basketActiveClass ? 'active' : ''}`}>{qtyAll}</span>
              <span className="material-icons basket-icon">
                <BsBasketFill />
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
            <Offcanvas.Header closeButton style={{borderBottom : "1px solid #e8e8e8"}}>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{fontWeight:"bold"}}>
                فست فود اینترنتی
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
                    <BsBasketFill />
                  </span>
                </Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

        </Container>
      </Navbar>

      <CartCanvas show={showCart} handleClose={handleCloseCart} />

      <ModalUI show={showModalLoginForm} modalType="loginform" handleClose={() => setShowModalLoginForm(false)} />

    </>
  );
}

export default NavbarSection

