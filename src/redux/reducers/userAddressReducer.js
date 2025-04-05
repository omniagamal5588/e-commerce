import { act } from 'react'
import { ADD_USER_ADDRESS , GET_ONE_ADDRESS , DELETE_USER_ADDRESS,GET_ONE_USER_ADDRESS, EDIT_USER_ADDRESS } from '../type'

const inital = {
    addUserAddress: [],
    allAddressessList:[],
    deleteAddress:[],
    oneUserAddresslist:[],
    editUserAddressList:[]
    
}
const userAddressReducer = (state = inital, action) => {
    switch (action.type) {
        case ADD_USER_ADDRESS:
            return {
                ...state,
                addUserAddress: action.payload,
            }
        case GET_ONE_ADDRESS:
          return{
                ...state,
                allAddressessList: action.payload
            }  
        case DELETE_USER_ADDRESS:
            return{
                ...state,
                deleteAddress:action.payload
            }
        case GET_ONE_USER_ADDRESS:
            return{
                ...state,
                oneUserAddresslist:action.payload
            }
        case EDIT_USER_ADDRESS:
            return{
                ...state,
                editUserAddressList:action.payload                
            }           
        default: 
            return state;
    }
}
export default userAddressReducer