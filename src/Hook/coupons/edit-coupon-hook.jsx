import React, { useEffect, useState } from 'react'
import { editCoupon, getOneCoupon } from '../../redux/actions/couponAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import notify from '../useNotifcation'

const EditCouponHook = (id) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [coupnName, setCoupnName] = useState('')
    const [couponDate, setCouponDate] = useState('')
    const [couponValue, setCouponValue] = useState('')
    const [loading, setLoading] = useState(true)
    const [loadingData, setLoadingData] = useState(true)

    useEffect(()=>{
        const get = async()=>{
            setLoadingData(true)
            await dispatch(getOneCoupon(id))
            setLoadingData(false)
        }
        get();
    },[])

    const oneCouponRes = useSelector(state => state.couponReducer.oneCoupon)

    // console.log("oneCouponRes", oneCouponRes)

    // format of date
     const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }
    useEffect(()=>{
        if(loadingData === false){
           if (oneCouponRes.data) {
                setCoupnName(oneCouponRes.data.name)
                setCouponDate(formatDate(oneCouponRes.data.expire))
                setCouponValue(oneCouponRes.data.discount)
            }
        }
    },[loadingData])



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

      const onSubmit = async () => {
        if (coupnName === "" || couponDate === "" || couponValue <= 0) {
            notify("من فضلك اكمل البيانات", "warn")
            return
        }
        setLoading(true)
        await dispatch(editCoupon(id, {
            name: coupnName,
            expire: couponDate,
            discount: couponValue
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.couponReducer.editCouponList)
    console.log(res)

     useEffect(() => {

        if (loading === false) {
            if (res && res.status === 200) {
                notify("تمت عملية التعديل بنجاح", "success")
                setTimeout(() => {
                    navigate('/admin/addCoupon')
                }, 1000);
            } else {
                notify("فضل عملية التعديل ", "error")
            }

        }

    }, [loading])



      return [coupnName, couponDate, couponValue, onChangeName, onChangeDate, onChangeValue,onSubmit]
}

export default EditCouponHook
