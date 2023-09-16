import React from "react"
import "./AddToCartAnimation.css"

const AddToCartAnimation = (props) => {
    
    const ImgStyle = {
        opacity: "0",
        width: "80px",
        height: "80px",
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
            <img src={props.img} className="drop-item-basket" style={ImgStyle} />
        )
    }

    return animateElement
}
export default AddToCartAnimation