import { useInsertDataWithImage} from "../../hooks/useInsertData"
import { GET_ERROR , CREATE_PRODUCT ,GET_ALL_PRODUCT, GET_PRODUCT_DETAILS ,GET_PRODUCTS_LIKE ,DELETE_PRODUCT, UPDATE_PRODUCT} from "../type"
import {useGetData} from "../../hooks/useGetData"
import useDeleteData from "../../hooks/useDeleteData"
import { useUpdatetDataWithImage } from "../../hooks/useUpdateData"


export const  creatProduct =(formData)=> async (dispatch)=>{
try{
    const response = await useInsertDataWithImage(`/api/v1/products`,formData)
    dispatch({
        type:CREATE_PRODUCT,
        payload:response,
        loading:true
    })
}catch(e){
        dispatch({
            type:GET_ERROR,
            payload:e
        })
    }
}




// get all product action

export const getAllProducts = (limit)=> async (dispatch)=>{
    try{
        const response = await useGetData(`/api/v1/products?limit=${limit}`)
        dispatch({
            type: GET_ALL_PRODUCT,
            payload:response,
            loading:true
        })
    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload:e,
            loading:false
        })
    }
}

// get all products page
export const getAllProductsPage = (page,limit)=> async (dispatch)=>{
    try{
        const response = await useGetData(`/api/v1/products?page=${page}&limit=${limit}`)
        dispatch({
            type: GET_ALL_PRODUCT,
            payload:response,
            loading:true
        })
    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload:e,
            loading:false
        })
    }
}

//get all product with query string
export const getAllProductSearch =(queryString)=> async (dispatch)=>{
    try{
        const response = await useGetData(`/api/v1/products?${queryString}`)
        dispatch({
            type: GET_ALL_PRODUCT,
            payload:response,
            loading:true
        })
    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload:e,
            loading:false
        })
    }
}


// get one product  detailsaction
//get one product with id
export const getOneProduct = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products/${id}`);
        console.log("response of product," ,response)
        dispatch({
            type: GET_PRODUCT_DETAILS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}


// products like
export const getProductsLike=(id)=> async (dispatch)=>{
    try{
        const response = await useGetData(`/api/v1/products?category=${id}`)
       
        dispatch({
            type:GET_PRODUCTS_LIKE,
            payload:response,
            loading:true
        })
    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload : "Error" + e
        })
    }
}

// Delete Product Action

export const deleteProduct =(id)=> async (dispatch)=>{
    try{
        const response = await useDeleteData(`/api/v1/products/${id}`)
        dispatch({
            type:DELETE_PRODUCT,
            payload:response,
            loading:true })
    }catch(e){
        dispatch(
            {
                type:GET_ERROR,
                payload:"Error" + e
            }
        )
    }
}


//update product data
export const updateProductData=(id,data)=> async(dispatch)=>{
   try{
     const response = await useUpdatetDataWithImage(`/api/v1/products/${id}`,data)
     dispatch({
        type:UPDATE_PRODUCT,
        payload:response,
        loading:true
     })
   }catch(e){
     dispatch(
            {
                type:GET_ERROR,
                payload:"Error" + e
            }
        )
   }


}