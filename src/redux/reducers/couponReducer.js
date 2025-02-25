import { CREATE_COUPON ,DELETE_COUPON,GET_ALL_COUPONS,GET_ONE_COUPON,EDIT_COUPON } from "../type";

const initialState ={
    addCouponList:[],
    allCouponsList:[],
    deleteCouponList:[],
    editCouponList:[],
    oneCoupon:[],
    loading:true
}
export const couponReducer=(state = initialState, action)=>{
    switch(action.type){
        case CREATE_COUPON:
            return({
                ...state,
                addCouponList:action.payload,
                loading:false
            })
        case GET_ALL_COUPONS:
            return({
                ...state,
                allCouponsList:action.payload,
                loading:false
            }) 
        case DELETE_COUPON:
            return({
                ...state,
                deleteCouponList:action.payload,
                loading:false
            })
        case GET_ONE_COUPON:
            return({
                ...state,
                oneCoupon:action.payload
            })
         case EDIT_COUPON:
            return {
                ...state,
                editCouponList: action.payload,
            }               
            default:
               return state    
    }
}