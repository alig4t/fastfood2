import React from "react";
import { Link } from "react-router-dom";
import './Breadcrumb.css';

const Breadcrumb = (props) => {
    return(
        <section className="container-fluid head-products">
        <div className="row">
            <div className="col-lg-6 py-2 text-center text-md-right">
                <h2 className="section-title">{props.title}</h2>
            </div>
            <div className="col-lg-6 text-center py-2">

                <span className="badge custom-bread">
                    <Link to="/">فست فود اینترنتی</Link>
                    <span className="mx-2">/</span>
                    {props.title}
                </span>
            </div>
        </div>
    </section>
    )
}

export default Breadcrumb