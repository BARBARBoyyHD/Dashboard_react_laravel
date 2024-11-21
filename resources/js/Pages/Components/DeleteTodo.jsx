import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux";
import { useState } from "react";

export function DeleteTodo(props) {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.DeleteTodo);

    // Local state to manage success/error notifications
    const [notification, setNotification] = useState("");

    const handleDelete = async () => {
        try {
            // Dispatch deleteTodo action
            await dispatch(deleteTodo(props.id));

            // If deletion is successful, show success notification
            setNotification("Todo deleted successfully!");
        } catch (err) {
            // If deletion fails, show error notification
            setNotification("Failed to delete todo. Please try again.");
        }
    };

    return (
        <div>
            {/* Notification */}
            {notification && (
                <div
                    className={`p-2 mb-4 text-white rounded-md ${
                        notification.includes("success")
                            ? "bg-green-500"
                            : "bg-red-500"
                    }`}
                >
                    {notification}
                </div>
            )}

            {/* Delete Button */}
            <button
                onClick={handleDelete}
                disabled={loading} // Disable button if action is in progress
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
                {loading ? "Deleting..." : "Delete"}
            </button>
        </div>
    );
}
