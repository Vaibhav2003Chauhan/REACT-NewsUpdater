import React, { useState } from "react";

function Header(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user_choice, set_user_choice] = useState("");

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const get_user_response = () => {
        console.log(user_choice + " this is the random user choice ");
    };

    return (
        <header>
            <nav className="bg-black text-white">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">React - NewsApp</span>
                    </a>
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="navbar"
                            aria-expanded={isMenuOpen}
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                                aria-hidden="true"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`w-full md:flex md:items-center md:w-auto ${isMenuOpen ? "" : "hidden"
                            }`}
                        id="navbar"
                    >
                        {/* Search bar for Hamburger Menu */}
                        <div className="relative mt-3 md:hidden">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Search..."
                                value={user_choice}
                                onChange={(e) => set_user_choice(e.target.value)}
                                onKeyDown={(e) => {
                                    e.stopPropagation();
                                    if (e.key === "Enter") props.fetch_news(user_choice);
                                }}
                            />
                        </div>
                        <ul className="flex flex-col mt-4 space-y-2 md:space-y-0 md:mt-0 md:flex-row md:space-x-8">
                            {["General", "Business", "Technology", "Entertainment", "Sports", "Health"].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className={`block py-2 px-3 text-white rounded transition-all duration-300 
                                        hover:bg-blue-500 hover:text-white 
                                        md:hover:bg-transparent md:focus:bg-blue-500 md:focus:text-white 
                                        md:hover:text-blue-500 md:focus:ring`}
                                        onClick={() => { props.fetch_news(item); }}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        {/* Search bar for Larger Screens */}
                        <div className="relative hidden md:block mx-4">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Search..."
                                value={user_choice}
                                onChange={(e) => {
                                    set_user_choice(e.target.value)
                                    console.log(e.target.value)
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") props.fetch_news(user_choice);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;


