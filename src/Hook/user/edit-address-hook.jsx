import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getOneAddress ,editUserAddress } from '../../redux/actions/userAddressAction'
import notify from './../useNotifcation'
const EditAddressHook = (id) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true);
    const [loadingEdit, setLoadingEdit] = useState(true);
    const [alias, setAlias] = useState('')
    const [detalis, setDetalis] = useState('')
    const [phone, setPhone] = useState('')

    const onChangeAlias =(event)=>{
         event.persist();
        setAlias(event.target.value)
    }
    const onChangeDetalis = (event) => {
        event.persist();
        setDetalis(event.target.value)

    }
     const onChangePhone = (event) => {
        event.persist();
        setPhone(event.target.value)

    }


    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(getOneAddress(id))
            setLoading(false)
        }
        get();
    }, [])

    const resAddress = useSelector(state => state.userAddressReducer.oneUserAddresslist)
    console.log(resAddress)
    useEffect(() => {
        if (loading === false) {
            if (resAddress && resAddress.status === "success") {
                setAlias(resAddress.data.alias)
                setDetalis(resAddress.data.details)
                setPhone(resAddress.data.phone)
            }
        }
    }, [loading])


     
    const handelEdit = async () => {
        setLoadingEdit(true)
        await dispatch(editUserAddress(id, {
            alias,
            details: detalis,
            phone,
        }))
        setLoadingEdit(false)
    }
    const resEdit = useSelector(state => state.userAddressReducer.editUserAddressList)
    console.log('resEdit',resEdit)
   
    useEffect(() => {

        if (loadingEdit === false) {
            if (resEdit && resEdit.status === 200) {
                notify("تمت عملية التعديل بنجاح", "success")
                setTimeout(() => {
                    navigate('/user/addresses')
                }, 1000);
            } else {
                notify("فشل فى عملية التعديل", "error")
            }
        }
    }, [loadingEdit])

     return [handelEdit, alias, detalis, phone, onChangeAlias, onChangeDetalis, onChangePhone]
  
}

export default EditAddressHook
