import {handleActions} from "redux-actions";
import {addSource, removeSource} from "../actions/newsSourceActions";

const initialState = {
    list: []
}

export default handleActions({
    [addSource]: ((state, action) => {
        return {...state, list: [...state.list, action.payload]}
    }),
    [removeSource]: ((state, action) => {
        state.list = state.list.filter(category => category !== action.payload)
        return {...state, list: [...state.list]}
    }),
}, initialState)