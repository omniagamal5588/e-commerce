import { ADD_FAV_PRODUCT,REMOVE_FAV_PRODUCT,USER_WISHLIST } from "../type";

const initialState ={
    loading:true,
    addFavProductList:[],
    removeFavProductList:[],
    allWishList: [],
}

export const wishListReducer =(state=initialState, action)=>{
    switch(action.type){
        case ADD_FAV_PRODUCT:
            return {
                ...state,
                loading:false,
              addFavProductList: action.payload
            }
            case REMOVE_FAV_PRODUCT:
                return{
                    ...state,
                    loading:false,
                    removeFavProductList:action.payload
                }
            case USER_WISHLIST:
                return {
                    ...state,
                    allWishList: action.payload,
                }    
            default:
                return state
    }

}