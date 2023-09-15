import React, { useState, useEffect } from "react";

import SpinnerLoading from "../../components/UI/SpinnerLoading/SpinnerLoading";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import MenuNav from "../../components/MenuNav/MenuNav";
import ProductCards from "../../components/ProductCards/ProductCards";

import list_products_json from './src/list-products.json'


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
        window.scrollTo({ top: 40, behavior: 'smooth' })
    }, []);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://mocki.io/v1/2cb291d5-e9a9-4e9e-b4d8-20c73fd35cc6")
            .then((resp) => {
                return resp.json();
            })
            .then((respData) => {
                setTimeout(() => {
                    let fetchedCatList = catListHandler(respData)
                    setCatListState(fetchedCatList)
                    setProductListState(respData);
                    setIsLoading(false)
                }, 500)
            })
            .catch(() => {
                let fetchedCatList = catListHandler(list_products_json)
                setCatListState(fetchedCatList)
                setProductListState(list_products_json);
                setIsLoading(false)
            })
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
            <ProductCards productList={productListState} />
        </>
    )
}
export default Products