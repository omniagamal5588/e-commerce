import { CREATE_CATEGORY, GET_ALL_CATEGORY,GET_ERROR , GET_ONE_CATEGORY } from "../type";
import  useGetData from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";

export const getAllCategory=(limit)=>async (dispatch)=>{
    try{
        const response = await useGetData(`/api/v1/categories?limit=${limit}`)
       
        dispatch({
            type:GET_ALL_CATEGORY,
            payload:response
        })

    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload:e.message
        })
    }
}
//Get all categories
export const getAllCategoryPage=(page)=>async (dispatch)=>{
    try{
        const response = await useGetData(`/api/v1/categories?limit=6&page=${page}`)
        dispatch({
            type:GET_ALL_CATEGORY,
            payload:response
        })
        

    }catch(e){
        dispatch({
            type:GET_ERROR,
            payload:e.message
        })

    }
}

// //create category action
export const  creatCategory =(formData)=> async (dispatch)=>{
try{
    const response = await useInsertDataWithImage(`/api/v1/categories`,formData)
    dispatch({
        type:CREATE_CATEGORY,
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

// Get One Category

export const getOneCategory = (id)=> async (dispatch)=>{
    try{
        const response = await useGetData(`/api/v1/categories/${id}`)
        dispatch({
            type:GET_ONE_CATEGORY,
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
