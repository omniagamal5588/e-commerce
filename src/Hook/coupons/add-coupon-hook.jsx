import React, { useEffect } from 'react'
import { useState } from 'react'
import { createCoupon, getAllCoupons } from '../../redux/actions/couponAction'
import { useDispatch, useSelector } from 'react-redux'
import notify from '../useNotifcation'

const AddCouponHook = () => {
    const [coupnName, setCoupnName] = useState('')
    const [couponDate, setCouponDate] = useState('')
    const [couponValue, setCouponValue] = useState('')
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();

    const onChangeName = (event) => {
        event.persist();
        setCoupnName(event.target.value)
    }

    const onChangeDate = (event) => {
        event.persist();
        setCouponDate(event.target.value)

    }
    const onChangeValue = (event) => {
        event.persist();
        setCouponValue(event.target.value)
    }
    const onSubmit = async()=>{
         if (coupnName === "" || couponDate === "" || couponValue <= 0) {
            notify("من فضلك اكمل البيانات", "warn")
            return
        }
        setLoading(true)
       await dispatch(createCoupon({
           name:coupnName,
            expire: couponDate,
            discount: couponValue
        }))
        setLoading(false)

    }

    const couponResponse = useSelector((state) => state.couponReducer.addCouponList)
    useEffect(()=>{
        if(loading === false){
             if (couponResponse && couponResponse.status === 201) {
                notify("تمت اضافة الكوبون بنجاح", "success")
                window.location.reload(false)
            } else if (couponResponse && couponResponse.status === 400) {
                notify("هذا الكوبون موجود من قبل ", "error")
            }
            else if (couponResponse && couponResponse.status === 403) {
                notify("انتا غير مسموح لك بالاضافة", "error")
            }
        }
        
    },[loading])


    // get all coupons functionality

    useEffect(()=>{
        const get = async()=>{
            await dispatch(getAllCoupons())
        }
        get()
    },[])

    const allCouponsRes = useSelector((state)=> state.couponReducer.allCouponsList)

    let allCoupons =[]
   try{
        if(allCouponsRes && allCouponsRes.data.length >=1 )
            allCoupons = allCouponsRes.data 
   }catch(e){}

   console.log("allCouponsRes",allCouponsRes)
     return [coupnName, couponDate, couponValue, onChangeName, onChangeDate, onChangeValue, onSubmit , allCoupons]
}

export default AddCouponHook
