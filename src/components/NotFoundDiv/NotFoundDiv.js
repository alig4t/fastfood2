import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundDiv = () => {
    return ( 


        <section className="container-fluid head-products">
            <div className="row">
                <div className="col-lg-6 py-2 text-center text-md-right">
                    <h2 className="section-title">صفحه مورد نظر یافت نشد</h2>
                </div>
                <div className="col-lg-6 text-center py-2">

                    <span className="badge custom-bread">
                        <Link to="/">فست فود اینترنتی</Link>
                        <span className="mx-2">/</span>
                        صفحه مورد نظر یافت نشد
                    </span>
                </div>
            </div>
            <div className='d-flex text-center justify-content-center head-products-404'>
            <img src={process.env.PUBLIC_URL + "./assets/img/pizza-404.png"} className='img-fluid'/>
        </div>
        </section>


        
     );
}
 
export default NotFoundDiv;