import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { getAllBrand } from '../../redux/actions/brandAction'

const HomeBrandHook = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllBrand());
    }, [])
    //get last brand state from redux
    const brand = useSelector(state => state.AllBrand.brand)
    //get last loading state from redux
    const loading = useSelector(state => state.AllBrand.loading)
    console.log(loading)
    return [brand, loading]
};

export default HomeBrandHook;