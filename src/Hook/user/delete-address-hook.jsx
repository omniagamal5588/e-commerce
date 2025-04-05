import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserAddress } from '../../redux/actions/userAddressAction';
import notify from '../useNotifcation';
const DeleteAddressHook = (id) => {
     const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const [loading, setLoadig] = useState(true)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //const dispatch = useDispatch();

    const handelDelete = async () => {
        setLoadig(true)
        await dispatch(deleteUserAddress(id))
        setShow(false);
        setLoadig(false)
        window.location.reload(false);
    }

    const response = useSelector(state=>state.userAddressReducer.deleteAddress)
    useEffect(()=>{
        if(loading=== false){
             if (response && response.status === 200) {
                notify("تمت اضافة العنوان بنجاح", "success")


            } else {
                notify("هناك مشكله فى عملية الاضافة ", "error")
            }
        }
    },[loading])
    
    return [show, handleClose, handleShow, handelDelete]
}

export default DeleteAddressHook
