import {combineReducers} from "redux";
import drawerReducer from "./drawerReducer";
import categories from "./categoriesReducer";
import collections from "./collectionsReducer";

export default combineReducers({
    drawer: drawerReducer,
    categories: categories,
    collections: collections
})

