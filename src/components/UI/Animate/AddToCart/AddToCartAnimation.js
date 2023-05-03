import React from "react"
import "./AddToCartAnimation.css"

const AddToCartAnimation = (props) => {

    const ImgStyle = {
        opacity: "0",
        width: "50px",
        height: "50px",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: "auto",

    }
    let animateElement = ''
    if (props.show) {
        animateElement = (
            <img src={props.img} className="fly-item-bg" style={ImgStyle} />
        )
    }

    return animateElement
}
export default AddToCartAnimation