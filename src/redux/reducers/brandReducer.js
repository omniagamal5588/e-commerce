import { GET_ALL_BRAND,GET_ERROR,CREATE_BRAND,GET_ONE_BRAND } from "../type";

const initialState={
    brand:[],
    loading:true,
    oneBrand:[]
}

const brandReducer =(state=initialState,action)=>{
    switch(action.type){
        case GET_ALL_BRAND:
            return{
                ...state,
                brand:action.payload,
                loading:false
            }
        case CREATE_BRAND:
            return {
                brand: action.payload,
                loading: false
            }
        case GET_ONE_BRAND:
            return{
                oneBrand:action.payload,
                loading:false
            }    
        case GET_ERROR:
          return{
                loading:true,
                brand:action.payload,
               
            }
        default:
            return state;    
    }

}

export default brandReducer