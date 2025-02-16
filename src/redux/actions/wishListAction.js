import {useInsertData} from '../../hooks/useInsertData'
import useDeleteData from '../../hooks/useDeleteData'
import {useGetDataToken} from '../../hooks/useGetData'
import { ADD_FAV_PRODUCT,REMOVE_FAV_PRODUCT,USER_WISHLIST } from '../type'
// add fav product action

export const addFavProductAction = (body) =>async (dispatch)=>{
   try{
     const response = await useInsertData(`/api/v1/wishlist`,body)
     dispatch({
        type:ADD_FAV_PRODUCT,
        payload:response,
     })
   }catch(e){
    dispatch({
        type:ADD_FAV_PRODUCT,
        payload:e.response
    })
   }

}

export const removeFavProductAction = (prodID) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/wishlist/${prodID}`);
        dispatch({
            type:REMOVE_FAV_PRODUCT ,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type:REMOVE_FAV_PRODUCT,
            payload: e.response,
        })
    }
}


//get wishlist product 
export const getProductWishList = () => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/wishlist`);
        dispatch({
            type: USER_WISHLIST,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: USER_WISHLIST,
            payload: e.response,
        })
    }
}

