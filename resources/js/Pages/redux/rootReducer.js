import { combineReducers } from "redux";
import todosReducer from "./Todos/TodosReducer";
import addTodoReducer from "./Todos/CreateReducer";
import  updateTodoReducer  from "./Todos/UpdateReducer";
import deleteTodoReducer from "./Todos/DeleteReducer";

const rootReducer = combineReducers({
    GetTodos: todosReducer,
    AddTodos: addTodoReducer,
    UpdateTodo: updateTodoReducer,
    DeleteTodo: deleteTodoReducer
});

export default rootReducer;