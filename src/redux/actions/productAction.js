import { useInsertDataWithImage } from "../../hooks/useInsertData"
import { GET_ERROR , CREATE_PRODUCT ,GET_ALL_PRODUCT } from "../type"
import useGetData from "../../hooks/useGetData"



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

export const getAllProducts = ()=> async (dispatch)=>{
    try{
        const response = await useGetData('/api/v1/products')
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
