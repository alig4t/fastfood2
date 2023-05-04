import React,{useEffect} from "react";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import About from "../../components/About/About";

const AboutUs = (props) => {
    useEffect(() => {
        document.title = process.env.REACT_APP_BASE_TITLE + " | " + props.title;
      },[]);

    return (
        <>
            <Breadcrumb title='درباره ما' />
            <About />
        </>
    )
}

export default AboutUs