import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux";
import { CreateForm } from "./CreateForm";
import { UpdateForm } from "./UpdateForm";
import { DeleteTodo } from "./DeleteTodo";

export function GetAllTodos() {
    const dispatch = useDispatch();
    const { loading, error, data } = useSelector((state) => state.GetTodos);
    const [isModalOpen, setIsModalOpen] = useState(false);  // State to control modal visibility
    const [currentTodoId, setCurrentTodoId] = useState(null); // State to store the current todoId to update

    const handleOpenModal = (todoId) => {
        setCurrentTodoId(todoId);  // Set the todoId for the item to be updated
        setIsModalOpen(true);       // Open the modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);  // Close the modal
    };

    // State for pagination and search
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    // Filter todos by search term
    const filteredTodos = Array.isArray(data)
        ? data.filter((todo) =>
              todo.todo.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : [];

    // Pagination logic
    const indexOfLastTodo = currentPage * itemsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
    const currentTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);
    const totalPages = Math.ceil(filteredTodos.length / itemsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Get All Todos</h1>

            {/* Search Input */}
            <div className="mb-4 flex gap-4">
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1); // Reset to page 1 when search changes
                    }}
                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                />
                <CreateForm />
            </div>

            {loading && <p className="text-blue-500">Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}

            {filteredTodos.length > 0 ? (
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    {/* Table container with overflow-x-auto */}
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                            <tr>
                                <th className="px-6 py-3">User ID</th>
                                <th className="px-6 py-3">Todo</th>
                                <th className="px-6 py-3">Completed</th>
                                <th className="px-6 py-3">Edit</th>
                                <th className="px-6 py-3">Created At</th>
                                <th className="px-6 py-3">Updated At</th>
                                <th className="px-6 py-3">Delete Todos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentTodos.map((todo) => (
                                <tr
                                    key={todo._id}
                                    className="bg-white border-b hover:bg-gray-50"
                                >
                                    <td className="px-6 py-4">{todo.userId}</td>
                                    <td className="px-6 py-4">{todo.todo}</td>
                                    <td className="px-6 py-4">
                                        {todo.completed ? "Yes" : "No"}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleOpenModal(todo._id)}  // Open modal with selected todoId
                                            className="text-blue-500 hover:text-blue-700 underline"
                                        >
                                            Update
                                        </button>
                                    </td>
                                    <td className="px-6 py-4">{todo.created_at}</td>
                                    <td className="px-6 py-4">{todo.updated_at}</td>
                                    <td className="px-6 py-4"><DeleteTodo/></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination Controls */}
                    <div className="flex justify-between items-center mt-4">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:bg-gray-200"
                        >
                            Prev
                        </button>
                        <div className="flex space-x-2">
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => paginate(index + 1)}
                                    className={`px-4 py-2 rounded-md ${
                                        currentPage === index + 1
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                                    }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:bg-gray-200"
                        >
                            Next
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-gray-500">No todos available.</p>
            )}

            {/* Modal for updating todo */}
            <UpdateForm
                todoId={currentTodoId} // Pass the todoId to UpdateForm
                isOpen={isModalOpen}   // Modal visibility state
                closeModal={handleCloseModal} // Function to close the modal
            />
        </div>
    );
}
