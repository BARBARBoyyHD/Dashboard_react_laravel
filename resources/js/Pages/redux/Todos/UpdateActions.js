import { UPDATE_TODO_REQUEST, UPDATE_TODO_SUCCESS, UPDATE_TODO_ERROR } from "./UpdateTypes";

const updateTodoRequest = () => ({
    type: UPDATE_TODO_REQUEST,
});

const updateTodoSuccess = (data) => ({
    type: UPDATE_TODO_SUCCESS,
    payload: data,
});

const updateTodoError = (error) => ({
    type: UPDATE_TODO_ERROR,
    payload: error,
});

export const updateTodo = (_id,updateTodo)=>{
    return (dispatch) => {
        dispatch(updateTodoRequest());
        axios
            .put(`https://api.sugity.kelola.biz/api/todo/${_id}`,updateTodo)
            .then((response) => {
                console.log("Todo updated successfully", response.data); // Debugging log
                dispatch(updateTodoSuccess(response.data.data)); // Adjust according to the response
            })
            .catch((error) => {
                console.error("Error updating todo:", error.response || error.message);
                dispatch(updateTodoError(error.response?.data?.message || error.message));
            });
    }
}