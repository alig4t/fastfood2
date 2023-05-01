import React from "react"

const AddToCart = (props) => {

    const ImgStyle = {
        opacity: "0.5",
        width:"50px",
        height:"50px",
        position:"absolute",
        top:0,
        left:0,
        right:0,
        bottom:0,
        margin:"auto",
    }
    
    return (
   
            <img src={props.img} className="align-middle" style={ImgStyle} />

    )
}
export default AddToCart