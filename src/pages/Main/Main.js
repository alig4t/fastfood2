import React,{useEffect} from "react";

import SliderSection from "../../components/SliderSection/SliderSection";
import Jumbotron from "../../components/Jumbotron/Jumbotron";

// Main Page of App

const Main = () => {
    useEffect(() => {
        console.log(document.title);
        document.title = process.env.REACT_APP_BASE_TITLE;
      },[]);

    return (
        <div>
            <SliderSection />
            <Jumbotron />
        </div>
    )
}

export default Main
