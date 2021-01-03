import {combineReducers} from "redux";
import drawerReducer from "./drawerReducer";
import categories from "./categoriesReducer";
import newsSources from "./newsSourceReducer";

export default combineReducers({
    drawer: drawerReducer,
    categories: categories,
    newsSources: newsSources
})

