import { useState, useEffect } from "react";
import { GetAllTodos } from "./Components/GetAllTodos";
import { Navbar } from "./Components/Navbar/Navbar";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import styles from "../../css/home.module.css";
import { Footer } from "./Components/Footer/Footer";
export default function Home() {
    const [isMobile, setIsMobile] = useState(false); // State for tracking mobile view

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768); // Check if screen width is 768px or less
        };

        checkScreenSize(); // Set initial value based on screen width

        window.addEventListener("resize", checkScreenSize); // Update state on resize

        return () => {
            window.removeEventListener("resize", checkScreenSize); // Cleanup listener
        };
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            {" "}
            {/* Add min-h-screen to take full screen height */}
            <header>
                <Navbar />
            </header>
            <main
                className={`${styles.container} ${isMobile ? "block" : "flex"}`}
            >
                {/* Only show Sidebar if not mobile */}
                {!isMobile && <Sidebar />}

                {/* Show GetAllTodos always */}
                <GetAllTodos />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
