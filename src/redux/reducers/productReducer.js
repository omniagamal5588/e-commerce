import { CREATE_PRODUCT,GET_ERROR , GET_ALL_PRODUCT } from "../type"

const initialState={
    product:[],
    loading:true,
    allProducts:[]
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