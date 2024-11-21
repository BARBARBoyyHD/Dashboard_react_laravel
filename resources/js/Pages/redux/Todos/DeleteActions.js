import {DELETE_TODO_REQUEST,DELETE_TODO_SUCCESS, DELETE_TODO_ERROR} from "./DeleteType";

const deleteTodoRequest = ()=>{
    return {
        type: DELETE_TODO_REQUEST
    }
}

const deleteTodoSuccess = (data)=>{
    return {
        type: DELETE_TODO_SUCCESS,
        payload: data
    }
}

const deleteTodoError = (error)=>{
    return {
        type: DELETE_TODO_ERROR,
        payload: error
    }
}

export const deleteTodo = (id)=>{
    return (dispatch)=>{
        dispatch(deleteTodoRequest())
        axios.delete(`https://api.sugity.kelola.biz/api/todo/${id}`)
        .then((response)=>{
            dispatch(deleteTodoSuccess(response.data))
            console.log(response.data)
        })
        .catch((error)=>{
            dispatch(deleteTodoError(error))
        })
    }
}