import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-black text-white rounded-lg shadow  dark:bg-gray-800 w-[100vw]">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm  sm:text-center dark:text-gray-400">
                    © 2023 <Link to="https://flowbite.com/" className="hover:underline">Flowbite™</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link to="/about" className="hover:text-blue-500 me-4 md:me-6">Github</Link>
                    </li>
                    <li>
                        <Link to="/privacy-policy" className="hover:text-blue-500 me-4 md:me-6">Linked In </Link>
                    </li>
                    <li>
                        <Link to="/licensing" className="hover:text-blue-500 me-4 md:me-6">GFG</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
