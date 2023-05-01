import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel-rtl';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './MenuNav.css'


const MenuNav = (props) => {


    /*********************  List of Categories to display in the sliderNav *********************/
    const categoryList = props.cats.map((item) => {
        return <a key={item.title} href={`#${item.href}`} className="item d-block">{item.title}</a>
    })


    return (

        <section className="container-fluid bg-white">
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-8 mx-auto box-list-menu">
                    <OwlCarousel className="owl-theme"
                        rtl={true}
                        rtlClass="owl-rtl"
                        items={8}
                        nav
                        dots={false}
                        responsive={
                            {
                                0: {
                                    items: 4,
                                    nav: true,
                                },
                                600: {
                                    items: 6,
                                    nav: true,
                                },
                                1000: {
                                    items: 8
                                }
                            }
                        }
                    >
                        {categoryList}
                    </OwlCarousel >
                </div>

                <div className="col-lg-3 text-center mt-3">
                    <Link className="btn submit-cart" to="/cart">نهایی کردن سفارش</Link>
                </div>
            </div>
        </section>

    )
}
export default MenuNav