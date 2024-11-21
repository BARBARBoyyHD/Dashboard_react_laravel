import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux"; // Assuming you have an action to add todo

export function CreateForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state) => state.AddTodos);

    // Initialize formData with default values (empty or based on the existing Todo data)
    const [formData, setFormData] = useState({
        todo: "",
        description: "",
        progress: "pending", // Default value to 'pending'
        completed: "No", // Default to "No"
    });

    // Handle input changes and update formData
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Map the 'completed' field from "Yes"/"No" to boolean
        const submittedData = {
            ...formData,
            completed: formData.completed === "Yes", // Convert "Yes" to true, "No" to false
        };

        // Dispatch action to add the todo
        dispatch(addTodo(submittedData));

        // Reset the form after submission
        setFormData({
            todo: "",
            description: "",
            completed: "No", // Reset to No
        });

        // Close the modal
        closeModal();
    };

    return (
        <div>
            <button
                onClick={openModal}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
                Add Todo
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-2xl font-semibold mb-4">
                            Create New Todo
                        </h2>

                        <form onSubmit={handleSubmit}>
                            {/* Todo Input */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Todo
                                </label>
                                <input
                                    type="text"
                                    name="todo"
                                    placeholder="Enter Todo"
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
                                    placeholder="Enter description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Progress Radio Buttons */}
                           

                            {/* Completed Status */}
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
                                            checked={
                                                formData.completed === "Yes"
                                            }
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
                                            checked={
                                                formData.completed === "No"
                                            }
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
                                    Submit
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
            )}
        </div>
    );
}
