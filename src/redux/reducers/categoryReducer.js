import { GET_ALL_CATEGORY,CREATE_CATEGORY,GET_ERROR,GET_ONE_CATEGORY } from "../type"

const initialState={
    category:[],
    loading:true,
    oneCategory:[]
}
const categoryReducer = (state=initialState,action)=>{
    switch(action.type){
        case GET_ALL_CATEGORY:
            return{
                ...state,
                category:action.payload,
                loading:false
            }
        case CREATE_CATEGORY:
            return {
                category: action.payload,
                loading: false
            }
        case GET_ONE_CATEGORY:
           return{
            ...state,
            oneCategory:action.payload,
            loading:false
           }
        case GET_ERROR:
            return {
                loading: true,
                category: action.payload,
            }
        default:
            return state;
    
    }

}
export default categoryReducer;