import {
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_ERROR,
} from "./TodosTypes";
import axios from "axios";

const fetchTodosRequest = () => {
    return {
        type: FETCH_TODOS_REQUEST,
    };
};

const fetchTodosSuccess = (data) => {
    return {
        type: FETCH_TODOS_SUCCESS,
        payload: data,
    };
};

const fetchTodosError = (error) => {
    return {
        type: FETCH_TODOS_ERROR,
        payload: error,
    };
};

export const fetchTodos = () => {
    return (dispatch) => {
        dispatch(fetchTodosRequest());

        axios
            .get("https://api.sugity.kelola.biz/api/todo")
            .then((response) => {
                dispatch(fetchTodosSuccess(response.data.data)); 
            })
            .catch((error) => {
                // Log the error for debugging
                console.error("Axios Error:", error); 
                dispatch(fetchTodosError(error.message));
            });
    };
};
