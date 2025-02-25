import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteCoupon } from '../../redux/actions/couponAction'

const CouponCardHook = (coupon) => {

    
    const[show,setShow]= useState(false)
    const handleColse =()=>setShow(false)
    const handleShow =()=>setShow(true)
    const dispatch = useDispatch();

    const handleDelete = async ()=>{
        await dispatch(deleteCoupon(coupon._id))
    
        setShow(false);
        window.location.reload(false);
    }
    

     const dateString = coupon.expire;
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)}

      return [formatDate, dateString, show, handleColse, handleShow, handleDelete]
}

export default CouponCardHook
