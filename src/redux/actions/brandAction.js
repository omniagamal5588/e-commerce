// import { GET_ALL_BRAND,CREATE_BRAND,GET_ERROR } from "../type";
// import useGetData from "../../hooks/useGetData";
// import { useInsertDataWithImage } from "../../hooks/useInsertData";

// export const getAllBrand=(limit)=> async(dispatch)=>{
//     try{
//         const response = await useGetData(`/api/v1/brands?limit=${limit}`)
//         console.log(response)
//         dispatch({
//             type:GET_ALL_BRAND,
//             payload:response.data
//         })
//     }catch(e){
//         dispatch(
//             {
//                 type:GET_ERROR,
//                 payload:e.message
//             }
//         )
//     }

// }

// export const getAllBrandPage=(page)=> async (dispatch)=>{
//     try{
//         const response = await useGetData(`/api/v1/categories?limit=3&page=${page}`)
//         console.log(response)
//         dispatch({
//             type:GET_ALL_BRAND,
//             payload:response
//         })
//     }catch(e){
//         dispatch({
//             type:GET_ERROR,
//             payload:e.message
//         })
//     }
// }

// //create category action
// export const  creatCategory =(formData)=> async (dispatch)=>{
// try{
//     const response = await useInsertDataWithImage(`/api/v1/brands`,formData)
//     dispatch({
//         type:CREATE_BRAND,
//         payload:response,
//         loading:true
//     })
// }catch(e){
//         dispatch({
//             type:GET_ERROR,
//             payload:e
//         })

//     }

// }

import { GET_ALL_BRAND, GET_ERROR, CREATE_BRAND } from '../type'
import useGetData from '../../hooks/useGetData'
import { useInsertDataWithImage } from '../../hooks/useInsertData'

//get all Brand
export const getAllBrand = (limit) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/brands?limit=${limit}`);

        dispatch({
            type: GET_ALL_BRAND,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

//get all Brand with pagination
export const getAllBrandPage = (page) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/brands?limit=4&page=${page}`);
        dispatch({
            type: GET_ALL_BRAND,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

//insert brand with pagination
export const creatBrand = (formData) => async (dispatch) => {
    try {
        const response = await useInsertDataWithImage(`/api/v1/brands`, formData);
        dispatch({
            type: CREATE_BRAND,
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