import {combineReducers} from "redux";
import drawerReducer from "./drawerReducer";
import categories from "./categoriesReducer";
import carousel from "./carouselReducer";

export default combineReducers({
    drawer: drawerReducer,
    categories: categories,
    carousel: carousel
})

