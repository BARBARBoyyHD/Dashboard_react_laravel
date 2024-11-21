import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto text-center">
                <p className="text-lg mb-4">Follow us on social media</p>
                <div className="flex justify-center space-x-6">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook className="text-2xl hover:text-blue-600 transition" />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter className="text-2xl hover:text-blue-400 transition" />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram className="text-2xl hover:text-pink-500 transition" />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="text-2xl hover:text-blue-700 transition" />
                    </a>
                </div>
                <p className="mt-4 text-sm">
                    © 2024 Muhammad Nahrul Hayat. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
