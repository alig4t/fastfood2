import React,{useEffect} from "react";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";


const AboutUs = (props) => {
    useEffect(() => {
        document.title = process.env.REACT_APP_BASE_TITLE + " | " + props.title;
        console.log('درباره ما');
      },[]);

    return (
        <>
            <Breadcrumb title='درباره ما' />
            <About />
            <Footer />
        </>
    )
}

export default AboutUs