import React,{useEffect} from "react";

import SliderSection from "../../components/SliderSection/SliderSection";
import Jumbotron from "../../components/Jumbotron/Jumbotron";

// Main Page of App

const Main = () => {
    useEffect(() => {
        document.title = process.env.REACT_APP_BASE_TITLE;
        window.scrollTo({ top: 0, behavior: 'smooth' })
      },[]);

    return (
        <div>
            <SliderSection />
            <Jumbotron />
        </div>
    )
}

export default Main
