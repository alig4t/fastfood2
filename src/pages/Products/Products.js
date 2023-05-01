import React, { useState, useEffect } from "react";

import SpinnerLoading from "../../components/UI/SpinnerLoading/SpinnerLoading";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import MenuNav from "../../components/MenuNav/MenuNav";
import ProductCards from "../../components/ProductCards/ProductCards";
import Footer from "../../components/Footer/Footer"
// import list_products_json from './src/list-products.json'


const Products = (props) => {

    /*********************  Products and Cateories States  *********************/
    /** They are initially an empty array until the data is received from the server ***/
    const [productListState, setProductListState] = useState([]);
    const [catListState, setCatListState] = useState([]);


    /*********************  Loading mode  *********************/
    const [isLoading, setIsLoading] = useState(false); //As long as the information is received from the server


    /*********************  Fetch Products from Server  *********************/
    /** Products with all details such as categories are received in a file in Json format ***/
    useEffect(() => {
        document.title = process.env.REACT_APP_BASE_TITLE + " | " + props.title;
        console.log('منو');
      },[]);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://mocki.io/v1/de9d66b7-9b3a-417b-851c-818712e62d07")
            .then((resp) => {
                return resp.json();
            })
            .then((respData) => {
                setTimeout(() => {
                    let fetchedCatList = catListHandler(respData)
                    setCatListState(fetchedCatList)
                    setProductListState(respData);
                    setIsLoading(false)
                }, 2000)
            });
        // setTimeout(() => {
        //     let fetchedCatList = catListHandler(list_products_json)
        //     setCatListState(fetchedCatList)
        //     setProductListState(list_products_json);
        //     setIsLoading(false)
        // }, 2000)
    }, [])


    /*********************  Make Category List From Resp *********************/
    /**** Avoid creating duplicate categories ****/
    const checkExistCat = (list, slug) => {
        for (let i = 0; i < list.length; i++) {
            if (list[i].href == slug) {
                return true
            }
        }
        return false
    }

    /**** Create Category List ****/
    const catListHandler = (respData) => {
        let catLists = []
        for (let item of respData) {
            if (checkExistCat(catLists, item.slug)) {
            } else {
                catLists.push({
                    id: item.id,
                    title: item.typePer,
                    href: item.slug
                })
            }
        }
        return catLists;
    }

    return (
        <>
            {isLoading ? <SpinnerLoading /> : ''}
            <Breadcrumb title='سفارش اینترنتی غذا' />
            {(catListState.length > 0) ? <MenuNav cats={catListState} /> : ''}
            {/* {(productListState.length > 0) ? <ProductCards productList={productListState} /> : ''} */}
            <ProductCards productList={productListState} />
            <Footer />
        </>
    )
}
export default Products