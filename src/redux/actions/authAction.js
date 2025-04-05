import { CREATE_NEW_USER,LOGIN_USER,FOREGT_PASSWORD,VERIFY_PASSWORD , RESET_PASSWORD,GET_CURERNT_USER,UPDATE_USER_PROFILE,UPDATE_USER_PASSWORD } from '../type'
import { useInsertData } from '../../hooks/useInsertData'
import {useUpdateData} from '../../hooks/useUpdateData'

//create new user 
export const createNewUser = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/auth/signup`, data);
        console.log("response", response)
        dispatch({
            type: CREATE_NEW_USER,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: CREATE_NEW_USER,
            payload: e.response,
        })
    }
}


//login user 
export const loginUser = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/auth/login`, data);
       
        dispatch({
            type: LOGIN_USER,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: LOGIN_USER,
            payload: e.response,
        })
    }
}

//login  user 
export const getLoggedUser = () => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/users/getMe`);
        dispatch({
            type: GET_CURERNT_USER,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_CURERNT_USER,
            payload: e.response,
        })
    }
}

//1-foregt  passwrod 
export const forgetPassword = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/auth/forgotPasswords`, data);
        dispatch({
            type: FOREGT_PASSWORD,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: FOREGT_PASSWORD,
            payload: e.response,
        })
    }
}

//2-verify  passwrod 
export const verifyPassword = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/auth/verifyResetCode`, data);
        dispatch({
            type: VERIFY_PASSWORD,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: VERIFY_PASSWORD,
            payload: e.response,
        })
    }
}

//2-reset  passwrod 
export const resetPassword = (data) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/v1/auth/resetPassword`, data);
        dispatch({
            type: RESET_PASSWORD,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: RESET_PASSWORD,
            payload: e.response,
        })
    }
}
//update user profile
export const updateUserProfileData = (body) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/v1/users/updateMe`, body);
        console.log('response',response)
        dispatch({
            type: UPDATE_USER_PROFILE,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: UPDATE_USER_PROFILE,
            payload: e.response,
        })
    }
}

// update user password
 export const updateUserPassword = (body) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/v1/users/changeMyPassword`, body);
        console.log(response)
        dispatch({
            type:UPDATE_USER_PASSWORD,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: UPDATE_USER_PASSWORD,
            payload: e.response,
        })
    }
}
