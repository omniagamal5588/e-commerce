import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import{ getAllProducts} from '../../redux/actions/productAction'
import { useEffect } from 'react';
import { getAllProductsPage } from '../../redux/actions/productAction'


const ViewProductAdminHook = () => {

   const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts(6))
    }, [])


    const onPress = async (page) => {
        await dispatch(getAllProductsPage(page, 6))
    }
    let items = []; let pagination = [];
    const allProducts = useSelector((state) => state.allproducts.allProducts)
    try {

        if (allProducts.data)
            items = allProducts.data;
        else
            items = []

        if (allProducts.paginationResult)
            pagination = allProducts.paginationResult.numberOfPages;
        else
            pagination = []
    } catch (e) { }
    return [items, pagination, onPress]
}
export default ViewProductAdminHook
