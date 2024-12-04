import React from "react";

function Tooltip(props) {
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
            </div>
        </div>
    );
}

export default Tooltip;
