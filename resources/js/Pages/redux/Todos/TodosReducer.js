import {
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_ERROR,
} from "./TodosTypes";

const initialState = {
    loading: false,
    data: [],
    error: "",
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS_REQUEST:
            return { ...state, loading: true };
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,  // This should be the todos data array
                error: "",
            };
        case FETCH_TODOS_ERROR:
            return {
                ...state,
                loading: false,
                data: [],  // Reset data on error
                error: action.payload,  // Show the error message
            };
        default:
            return state;
    }
};

export default todosReducer;
