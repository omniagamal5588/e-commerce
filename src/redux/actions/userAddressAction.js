import { useInsertData } from '../../hooks/useInsertData';
import {useGetDataToken} from '../../hooks/useGetData';
import { ADD_USER_ADDRESS,GET_ONE_ADDRESS, DELETE_USER_ADDRESS,GET_ONE_USER_ADDRESS, EDIT_USER_ADDRESS } from '../type'
import useDeleteData from '../../hooks/useDeleteData';
import {useUpdateData} from '../../hooks/useUpdateData'


//add user Address
export const addUserAddress = (body) => async (dispatch) => {
    try {
        const response = await useInsertData("/api/v1/addresses", body);
        console.log(response)
        dispatch({
            type: ADD_USER_ADDRESS,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: ADD_USER_ADDRESS,
            payload: e.response,
        })
    }
}

//get one userAddress

export const getOneUserAddress =()=>  async (dispatch)=>{
    const response = await useGetDataToken(`/api/v1/addresses`)
    try{
        dispatch({
            type:GET_ONE_ADDRESS,
            payload:response
        })
    }catch(e){
        dispatch(
            {
                type:GET_ONE_ADDRESS,
                payload:e.response
            }
        )

    }
}

// delete user address action
export const deleteUserAddress = (id)=> async(dispacth)=>{
    try{
        const response = await useDeleteData(`/api/v1/addresses/${id}`)
        dispacth({
            type:DELETE_USER_ADDRESS,
            payload:response
        })
        
    } catch(e){
        dispacth(
             {
             type:DELETE_USER_ADDRESS,
            payload:e.response
        }
        )
    }
}

export const getOneAddress = (id) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/addresses/${id}`);

        dispatch({
            type: GET_ONE_USER_ADDRESS,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ONE_USER_ADDRESS,
            payload: e.response,
        })
    }
}

export const editUserAddress = (id, body) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/v1/addresses/${id}`, body);
        console.log('response',response)

        dispatch({
            type:EDIT_USER_ADDRESS,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type:EDIT_USER_ADDRESS,
            payload: e.response,
        })
    }
}
