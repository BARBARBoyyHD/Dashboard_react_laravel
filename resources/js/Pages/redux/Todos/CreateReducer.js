import {ADD_TODO_REQUEST , ADD_TODO_SUCCESS, ADD_TODO_ERROR} from "./CreateType";

const initialState = {
    loading: false,
    data: [],
    error: "",
};

const addTodoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO_REQUEST:
            return { ...state, loading: true };
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,  
                error: "",
        }
        case ADD_TODO_ERROR:
            return {
                ...state,
                loading: false,
                data: [],  
                error: action.payload,  
        }
        default:
            return state
    }
}

export default addTodoReducer