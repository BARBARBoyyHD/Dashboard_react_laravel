import {DELETE_TODO_REQUEST,DELETE_TODO_SUCCESS, DELETE_TODO_ERROR} from "./DeleteType";

const initialState = {
    loading: false,
    data: [],
    error: null,
};

const deleteTodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_TODO_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case DELETE_TODO_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null,
            };

        case DELETE_TODO_ERROR:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload,
            };

        default:
            return state;
        }
    };

export default deleteTodoReducer