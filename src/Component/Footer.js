import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
       <>
            <footer class="bg-black text-white rounded-lg shadow dark:bg-gray-800 w-full">
                <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span class="text-sm sm:text-center dark:text-gray-400">
                        © 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
                    </span>
                    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="/about" class="hover:text-blue-500 me-4 md:me-6">Github</a>
                        </li>
                        <li>
                            <a href="/privacy-policy" class="hover:text-blue-500 me-4 md:me-6">Linked In</a>
                        </li>
                        <li>
                            <a href="/licensing" class="hover:text-blue-500 me-4 md:me-6">GFG</a>
                        </li>
                    </ul>
                </div>
            </footer>
       </>
    );
}

export default Footer;
