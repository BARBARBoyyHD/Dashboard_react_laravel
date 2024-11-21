// UpdateReducer.js
import { 
    UPDATE_TODO_REQUEST, 
    UPDATE_TODO_SUCCESS, 
    UPDATE_TODO_ERROR 
} from './UpdateTypes';

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const updateTodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TODO_REQUEST:
            return {
                ...state,
                loading: true,  
            };

        case UPDATE_TODO_SUCCESS:
            return {
                ...state,
                loading: false,  
                data: action.payload,  
                error: null,  
            };

        case UPDATE_TODO_ERROR:
            return {
                ...state,
                loading: false,  
                data: null,  
                error: action.payload,  
            };

        default:
            return state;
    }
};

export default updateTodoReducer; 