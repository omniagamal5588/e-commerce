import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import brandReducer from './brandReducer'


export default combineReducers({
    AllCategory:categoryReducer,
    AllBrand:brandReducer
}
)
