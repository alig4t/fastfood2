import React from "react";
import { Link } from "react-router-dom";
const Jumbotron = () => {

    return (
        <main className="container-fluid">
            <div className="row main-box">
                
                <div className="col-lg-6 align-items-center mx-auto p-3 my-3 text-white rounded shadow-sm">
                    <Link to="/products" className="form-control btn text-white">سفارش اینترنتی غذا</Link>
                </div>
                <h2 className="text-center">ما همه جا هستیم :)</h2>
               
            </div>
        </main>
    )
}
export default Jumbotron;