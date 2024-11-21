import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../redux"; // Assuming you have the action to update todo

export function UpdateForm({ todoId, isOpen, closeModal }) {
    const dispatch = useDispatch();

    // Select the todo data by ID from the Redux store or local state (if available)
    const { loading, data, error } = useSelector((state) => state.UpdateTodo);

    // Initialize formData with default values or existing todo data
    const [formData, setFormData] = useState({
        todo: "",
        description: "",
        progress: "pending", // Default value to 'pending'
    });

    useEffect(() => {
        // When the modal is opened, fetch the existing todo data (optional: fetch it via an action)
        if (todoId) {
            // Replace with an actual fetch if needed or just assume the todoId already exists in the state
            setFormData({
                todo: data?.todo || "",
                description: data?.description || "",
                progress: data?.progress || "pending",
            });
        }
    }, [todoId, data]);

    // Handle input changes and update formData
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission to update todo
    const handleSubmit = (e) => {
        e.preventDefault();

        // Dispatch action to update the todo
        dispatch(
            updateTodo({
                _id: todoId,
                ...formData,
            })
        );

        // Close the modal
        closeModal();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-4">Update Todo</h2>
                {error && <p className="text-red-500 text-sm">{error}</p>}

                <form onSubmit={handleSubmit}>
                    {/* Todo Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Todo
                        </label>
                        <input
                            type="text"
                            name="todo"
                            value={formData.todo}
                            onChange={handleChange}
                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Description Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Progress Radio Buttons */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Completed
                        </label>
                        <div className="mt-2 space-x-4">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="completed"
                                    value="Yes"
                                    checked={formData.completed === "Yes"}
                                    onChange={handleChange}
                                    className="form-radio text-green-500"
                                />
                                <span className="ml-2">Yes</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="completed"
                                    value="No"
                                    checked={formData.completed === "No"}
                                    onChange={handleChange}
                                    className="form-radio text-red-500"
                                />
                                <span className="ml-2">No</span>
                            </label>
                        </div>
                    </div>

                    {/* Submit and Cancel Buttons */}
                    <div className="flex justify-between items-center">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            {loading ? "Updating..." : "Update"}
                        </button>
                        <button
                            type="button"
                            onClick={closeModal}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
