import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneUserAddress } from '../../redux/actions/userAddressAction';

const ViewAddressHook = () => {
     const disptach = useDispatch()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await disptach(getOneUserAddress());
            setLoading(false)
        }
        get();
    }, [])

    const response =useSelector(state => state.userAddressReducer.allAddressessList)
    console.log("response", response )
    return [response]
}

export default ViewAddressHook
