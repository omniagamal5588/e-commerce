import { useInsertData } from "../../hooks/useInsertData";
import { CREATE_COUPON, GET_ALL_COUPONS,DELETE_COUPON, GET_ONE_COUPON, EDIT_COUPON } from "../type";
import {useGetDataToken} from '../../hooks/useGetData'
import useDeleteData from "../../hooks/useDeleteData";
import { useUpdateData } from "../../hooks/useUpdateData";
export const createCoupon=(body)=>  async(dispatch)=>{
    try{
    const response = await useInsertData(`/api/v1/coupons`,body)
   
    dispatch({
        type:CREATE_COUPON,
        payload: response,
    })
    }
    catch(e){
        dispatch({
            type:CREATE_COUPON,
            payload:e.response
        })
    }
}

export const  getAllCoupons =()=>async (dispatch)=>{
    try{
        const response = await useGetDataToken(`/api/v1/coupons`)
        dispatch({
            type:GET_ALL_COUPONS,
            payload:response
        })
    }catch(e){
        dispatch(
            {
                type:GET_ALL_COUPONS,
                payload: e.response
            }
        )

    }

}


// delete coupon action
export const deleteCoupon=(id)=> async(dispatch)=>{
    try{
        const response = await useDeleteData(`/api/v1/coupons/${id}`)
        console.log('response of delete',response)
        dispatch({
            type:DELETE_COUPON,
            payload:response
        })
        
    }catch(e){
        dispatch({
            type:DELETE_COUPON,
            payload: e.DELETE_COUPON
        })
    }

}

//get one coupon
export const getOneCoupon =(id)=> async( dispatch)=>{
    try{
        const response = await useGetDataToken(`/api/v1/coupons/${id}`)
        console.log("response of one coupon is ", response)
        dispatch({
            type:GET_ONE_COUPON,
            payload:response
        })
    }catch(e){
        dispatch({
            type:GET_ONE_COUPON,
            payload:e.response
        })

    }
}

//edit coupon action
export const editCoupon = (id, body) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/v1/coupons/${id}`, body);
       
        dispatch({
            type: EDIT_COUPON,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: EDIT_COUPON,
            payload: e.response,
        })
    }
}