
import { CREATE_NEW_USER,LOGIN_USER,FOREGT_PASSWORD,VERIFY_PASSWORD,RESET_PASSWORD,GET_CURERNT_USER} from '../type'

const inital = {
    createUser: [],
    loading: true,
    loginUserList:[],
    forgetPassword: [],
    verifyPassword:[],
    resetPassword: [],
    currentUser: [],
}
const authReducer = (state = inital, action) => {
    switch (action.type) {
        case CREATE_NEW_USER:
            return {
                ...state,
                createUser: action.payload,
            }
        case LOGIN_USER:
            return{
                ...state,
                loginUserList:action.payload
            }
        case GET_CURERNT_USER:
            return {
                ...state,
                currentUser: action.payload,
            }    
        case FOREGT_PASSWORD:
            return {
                ...state,
                forgetPassword: action.payload,
            }
        case VERIFY_PASSWORD:
            return {
                ...state,
                verifyPassword: action.payload,
            }
        case RESET_PASSWORD:
            return {
                ...state,
                resetPassword: action.payload,
            }  
        default:
            return state;
    }
}
export default authReducer