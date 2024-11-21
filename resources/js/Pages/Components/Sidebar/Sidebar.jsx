import React, { useState } from "react";

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`${
                    isOpen ? "w-64" : "w-16"
                } bg-gray-800 text-white h-full transition-all duration-300`}
            >
                <div className="p-4 flex justify-between items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none text-gray-300"
                    >
                        {isOpen ? "Close" : "Open"}
                    </button>
                </div>

                <nav className="mt-4">
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#"
                                className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
                            >
                                <span>🏠</span>
                                {isOpen && <span>Dashboard</span>}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
                            >
                                <span>📄</span>
                                {isOpen && <span>Reports</span>}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
                            >
                                <span>📦</span>
                                {isOpen && <span>Products</span>}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
                            >
                                <span>⚙️</span>
                                {isOpen && <span>Settings</span>}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    );
}
