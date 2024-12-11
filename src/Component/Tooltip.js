import React from "react";

function Tooltip(props) {
    function routeTOMainPage(url)
    {
        console.log ("click")
        window.open(url,"_blank")
    }
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative max-w-lg bg-white border border-gray-200 rounded-lg shadow p-5 dark:bg-gray-800 dark:border-gray-700">
                <button
                    className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full"
                    onClick={props.onClose}
                    aria-label="Close tooltip"
                >
                    ✕
                </button>
                <img
                    className="rounded-t-lg w-full"
                    src={props.data.urlToImage || "https://via.placeholder.com/150"}
                    alt="News Thumbnail"
                />
                <h5 className="mt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {props.data.title}
                </h5>
                <p className="mb-3 text-gray-700 dark:text-gray-400">{props.data.description}</p>
                <button
                    className="inline-flex items-center justify-center text-sm px-3 py-2 font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => routeTOMainPage(props.data.url)} // Pass a function reference
                >
                    View Full Article
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Tooltip;
