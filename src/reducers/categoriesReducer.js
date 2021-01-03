import {handleActions} from "redux-actions";
import {setCategories} from "../actions/categoriesActions";

const initialState = {
    list: []
}

export default handleActions({
    [setCategories]: ((state, action) => {
        return {...state, list: action.payload}
    }),
}, initialState)