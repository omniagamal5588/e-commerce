import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import brandReducer from './brandReducer'
import subcategoryReducer from "./subCategoryReducer";
import productReducer from "./productReducer";
import authReducer from './authReducer'
import reviewReducer from './reviewReducer'


export default combineReducers({
    AllCategory:categoryReducer,
    AllBrand:brandReducer,
    SubCategory: subcategoryReducer,
    allproducts: productReducer,
    authReducer: authReducer,
    reviewReducer: reviewReducer,
}
)
