import React, { useState, useEffect } from "react";
import '../../css/roomDetail.css';
const Checkout = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h4>BOOKING NOW!</h4>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label>CHECK IN DAY</label>
                                            {/* onChange={handleInput} value={checkoutInput.firstname}  */}
                                            <input type="date" name="firstname" className="checkinday form-control" />
                                            {/* <small className="text-danger">{error.firstname}</small> */}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label>CHECK IN DAY</label>
                                            {/* onChange={handleInput} value={checkoutInput.firstname}  */}
                                            <input type="date" name="firstname" className="checkoutday form-control" />
                                            {/* <small className="text-danger">{error.firstname}</small> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label> Email Address</label>
                                            {/* onChange={handleInput} value={checkoutInput.email} */}
                                            <input type="email" name="email" className="form-control" />
                                            {/* <small className="text-danger">{error.email}</small> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group mb-3">
                                        <label>City</label>
                                        {/* onChange={handleInput} value={checkoutInput.city} */}
                                        <input type="text" name="city" className="form-control" />
                                        {/* <small className="text-danger">{error.city}</small> */}
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group text-end">
                                        {/* onClick={(e) => submitOrder(e, 'cod')} */}
                                        {/* onClick={(e) => submitOrder(e, 'razorpay')} */}
                                        {/* onClick={(e) => submitOrder(e, 'payonline')} */}

                                        <button
                                            type="button" className="nutdat dir dir-ltr">Pay Online</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
