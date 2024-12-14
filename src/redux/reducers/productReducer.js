import { CREATE_PRODUCT,GET_ERROR , GET_ALL_PRODUCT,GET_PRODUCT_DETAILS, GET_PRODUCTS_LIKE,DELETE_PRODUCT, UPDATE_PRODUCT } from "../type"

const initialState={
    product:[],
    loading:true,
    allProducts:[],
    oneProduct:[],
    productLike:[],
    deletedProducts:[],
    updatedProducts: [],
}
const productReducer = (state=initialState,action)=>{
    switch(action.type){
        case CREATE_PRODUCT:
            return {
                ...state,
                product:action.payload,
                loading:false
            }
        case GET_ALL_PRODUCT:
            return{
                ...state,
                allProducts:action.payload,
                loading:false
            }
        case GET_PRODUCT_DETAILS:
            return{
                ...state,
                oneProduct:action.payload,
                loading:false
            }
        case GET_PRODUCTS_LIKE:
            return{
                ...state,
                productLike:action.payload,
                loading:false
            }
        case DELETE_PRODUCT:
            return{
                ...state,
                deletedProducts:action.payload,
                loading:false
            }
        case UPDATE_PRODUCT:
            return{
                ...state,
                updatedProducts:action.payload,
                loading:false
            }            
        case GET_ERROR:
            return {
                loading: true,
                product: action.payload,
            }
        default:
            return state;
    }
}
export default productReducer;