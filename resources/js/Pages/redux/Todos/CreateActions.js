import axios from "axios";
import {
    ADD_TODO_REQUEST,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
} from "./CreateType";

// Request Action
const addTodoRequest = () => ({
    type: ADD_TODO_REQUEST,
});

// Success Action
const addTodoSuccess = (data) => ({
    type: ADD_TODO_SUCCESS,
    payload: data,
});

// Error Action
const addTodoError = (error) => ({
    type: ADD_TODO_ERROR,
    payload: error,
});

// Add Todo Thunk Action
export const addTodo = (data) => {
    return (dispatch) => {
        dispatch(addTodoRequest());

        // API call to add todo
        axios
            .post("https://api.sugity.kelola.biz/api/todo", data)
            .then((response) => {
                // Make sure response data is structured as expected
                console.log("Todo added successfully", response.data); // Debugging log
                dispatch(addTodoSuccess(response.data.data)); // Adjust according to the response
            })
            .catch((error) => {
                // Log the full error response
                console.error(
                    "Error adding todo:",
                    error.response || error.message
                );
                // Dispatch error with a detailed message
                dispatch(
                    addTodoError(error.response?.data?.message || error.message)
                );
            });
    };
};
