import React, { useEffect } from 'react'
import { getAllProducts } from '../../redux/actions/productAction'
import { useDispatch , useSelector } from 'react-redux'
import { getAllProductsPage } from '../../redux/actions/productAction'

const ViewSearchProductHook = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllProducts(8))
    },[])
    // get all products 
    const allProducts = useSelector((state)=> state.allproducts.allProducts)
    let searchProducts =[]
    if(allProducts.data){
        searchProducts = allProducts.data // array of object
    }else{
        searchProducts =[]
    }


    const onPress = async (page) => {
            await dispatch(getAllProductsPage(page, 8))
        }
        let pagination = [];
       
        try {
            if (allProducts.paginationResult)
                pagination = allProducts.paginationResult.numberOfPages;
            else
                pagination = []
        } catch (e) { }
    return [searchProducts,pagination,onPress]
}

export default ViewSearchProductHook
