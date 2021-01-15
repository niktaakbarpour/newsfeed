import {handleActions} from "redux-actions";
import {addCarouselItem} from "../actions/carouselActions";

const initialState = {
    list: [],
}

export default handleActions({
    [addCarouselItem]: ((state, action) => {
        const newItem = action.payload
        if (state.list.find((item) => item.id === newItem.id) === undefined) {
            return {...state, list: [...state.list, newItem]}
        }
        return state
    })
}, initialState)