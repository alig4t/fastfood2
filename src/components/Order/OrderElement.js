import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./OrderElement.css"

const OrderElement = (props) => {

    /*********************  User Addresses List Element  *********************/
    const userAddresses = props.userAddresses.map((adr, index) => {
        return (
            <div class="mb-2 font-sm form-check form-check-reverse address-item">
                <input name="group1" checked={index==0?true:false} type="radio" id={`reverse-radio-${index+1}`} class="form-check-input"  />
                    <label title="" for={`reverse-radio-${index+1}`} class="form-check-label">{adr}</label>
                    <span className="float-start address-delete-btn" onClick={()=>props.delAddress(index)}>حذف</span>
            </div>
        )
    })
   

    return (
        <section className="container py-4">
            <div className="row">
                <div className="col-lg-10">
                    <div className="row p-2">
                        <div className="col-lg-3 fw-bold py-3 py-lg-0">
                            اطلاعات کاربری
                        </div>
                        <div className="col-lg-9">
                            <div className="row px-4 px-md-0">
                                <div className="col-12 col-md-3">
                                    <Form.Control className="form-control-cart-custom" size="sm" type="text" placeholder="نام" />
                                </div>
                                <div className="col-12 col-md-3">
                                    <Form.Control className="form-control-cart-custom" size="sm" type="text" placeholder="نام خانوادگی" />
                                </div>
                                <div className="col-12 col-md-3">
                                    <Form.Control className="form-control-cart-custom" size="sm" type="text" placeholder="شماره همراه" />
                                </div>
                                <div className="col-12 col-md-3">
                                    <Form.Control className="form-control-cart-custom" size="sm" type="text" placeholder="ایمیل" />
                                </div>
                                <div className="col-lg-12">
                                    <button className="btn cart-update-btn text-white text-center w-100 rounded-pill shadow-sm">ویرایش اطلاعات</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="row p-2 pl-2">
                        <div className="col-lg-3 fw-bold py-3 py-lg-0">
                            آدرس تحویل سفارش
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-12">
                                    {userAddresses}
                                    {/* <Form.Check
                                        reverse
                                        label="تهران - سعادت آباد - خیابان مجد - ک 2 غربی - پ8 - و5"
                                        name="group1"
                                        type="radio"
                                        id={`reverse-radio-1`}
                                        className="mb-2 font-sm"
                                    />
                                    <Form.Check
                                        reverse
                                        label="شهرآرا - خ 17 شرقی - پلاک 41 - ط 3"
                                        name="group1"
                                        type="radio"
                                        id={`reverse-radio-2`}
                                        className="mb-2 font-sm"
                                    /> */}
                                </div>
                                <div className="col-lg-12 text-start">
                                    <button className="btn cart-update-btn text-white text-center rounded-pill shadow-sm" onClick={props.modalAddress}>ثبت آدرس جدید</button>
                                </div>

                            </div>
                        </div>

                    </div>


                    <hr />

                    <div className="row p-2">
                        <div className="col-lg-3 fw-bold py-3 py-lg-0">
                            کد تخفیف
                        </div>
                        <div className="col-lg-9">
                            <div className="row">

                                <Row className="align-items-center">
                                    <Col sm={4} xs={8} className="my-1">
                                        <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                                            Name
                                        </Form.Label>
                                        <Form.Control id="inlineFormInputName" className="form-control-cart-custom m-0" size="sm" />
                                    </Col>
                                    <Col xs={4} className="my-1">
                                        <button className="btn cart-update-btn px-4 py-2 text-white text-center rounded-pill shadow-sm m-0">ثبت کد</button>
                                    </Col>
                                    <p className="w-100 mt-3" style={{ fontSize: "14px" }}>لطفا توجه داشته باشید کد تخفیف قابل استفاده بر روی پیشنهادهای هفتگی نمی باشد.</p>

                                </Row>


                                <div className="col-lg-12 px-4 py-2">
                                </div>

                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="row py-2">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <textarea className="form-control px-3 textarea-cart-custom border border-2 mb-3" rows="4" placeholder="توضیحات سفارش"></textarea>
                            </div>
                        </div>
                        <div className="col-lg-6">

                            <div className="d-flex justify-content-between factor-custom">
                                <p className="m-0">جمع سفارش</p>
                                <p className="m-0"><span className="price-factor">{props.sum}</span> تومان</p>
                            </div>

                            <div className="d-flex justify-content-between factor-custom" style={{ color: '#ec3434' }}>
                                <p className="m-0">تخفیف</p>
                                <p className="m-0">{props.discount} تومان</p>
                            </div>

                            <div className="d-flex justify-content-between factor-custom">
                                <p className="m-0">هزینه ارسال</p>
                                <p className="m-0">0 تومان</p>
                            </div>

                            <div className="d-flex justify-content-between factor-custom">
                                <p className="m-0">مالیات</p>
                                <p className="m-0"><span className="price-factor">{props.tax}</span> تومان</p>
                            </div>

                            <div className="d-flex justify-content-between factor-custom">
                                <p className="m-0">مبلغ کل</p>
                                <p className="m-0"><span className="price-factor">{props.finalPrice}</span> تومان</p>
                            </div>

                            <div className="d-flex justify-content-between factor-custom sum-factor">
                                <p className="m-0">جمع مبلغ قابل پرداخت</p>
                                <p className="m-0"><span className="price-factor">{props.finalPrice}</span> تومان</p>
                            </div>

                            <div className="w-100 mt-3">
                                <label className="w-100 mb-2 type-cart-label">نحوه پرداخت</label>
                                <Form.Check
                                    inline
                                    reverse
                                    label="پرداخت اینترنتی"
                                    name="group1"
                                    type="radio"
                                    id={`reverse-radio-3`}
                                    className="mb-2 font-sm"
                                />
                                <Form.Check
                                    inline
                                    reverse
                                    label="پرداخت در محل"
                                    name="group1"
                                    type="radio"
                                    id={`reverse-radio-4`}
                                    className="mb-2 font-sm"
                                />
                                <div className="w-100 text-start">
                                    <button className="btn cart-update-btn text-white text-center rounded-pill shadow-sm">پرداخت سفارش</button>
                                </div>
                            </div>



                        </div>
                    </div>

                </div>
            </div>

        </section>

    )
}
export default OrderElement;