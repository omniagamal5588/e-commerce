import { CREATE_CATEGORY, GET_ALL_CATEGORY,GET_ERROR } from "../type";
import  useGetData from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";

export const getAllCategory=(limit)=>async (dispatch)=>{
    try{
        const response = await useGetData(`/api/v1/categories?limit=${limit}`)
        console.log(response)
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

export const getAllCategoryPage=(page)=>async (dispatch)=>{
    try{
        const response = await useGetData(`/api/v1/categories?limit=6&page=${page}`)
        console.log(response.data)
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

