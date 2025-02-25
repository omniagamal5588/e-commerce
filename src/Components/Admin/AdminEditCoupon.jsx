import React from 'react'
import { Row, Col, Spinner, NavItem } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import EditCouponHook from '../../Hook/coupons/edit-coupon-hook';

const AdminEditCoupon = () => {
    const {id} = useParams();
    const [coupnName, couponDate, couponValue, onChangeName, onChangeDate, onChangeValue , onSubmit] = EditCouponHook(id);
    const dateRef = useRef();
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">تعديل الكوبون</div>
                <Col sm="8">
                    <input 
                        value={coupnName}
                        onChange={onChangeName}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم الكوبون"
                    />
                    <input
                        ref={dateRef}
                        type="date"
                        onChange={onChangeDate}
                        value={couponDate}
                        className="input-form d-block mt-3 px-3"
                        placeholder="تاريخ الانتهاء"
                        onFocus={()=> dateRef.current.type ="date"}
                        onBlur={()=> dateRef.current.type ="text"}
                     
                    />
                    <input
                       value={couponValue}
                        onChange={onChangeValue}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="نسبة خصم الكوبون"

                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button  className="btn-save d-inline mt-2" onClick={onSubmit} >حفظ التعديل  </button>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    )
}

export default AdminEditCoupon
