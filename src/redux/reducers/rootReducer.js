import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";


export default combineReducers({
    AllCategory:categoryReducer
}
)
