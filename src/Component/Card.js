import React from 'react';

function Card({ curr, index, show_tooltip }) {
    const { urlToImage, title, description } = curr;

    if (!title || !description || title === '[Removed]') {
        return null; // Skip rendering invalid articles
    }

    return (
        <div
            className="max-w-sm bg-slate-900 text-white border border-blue-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-1 my-3 mx-auto text-ellipsis object-contain"
            style={{ height: '480px' }}
        >
            <img
                className="rounded-t-lg w-full h-[260px] object-cover mx-auto"
                src={urlToImage || "https://image.pngaaa.com/700/5273700-middle.png"}
                alt="News Thumbnail"
            />
            <div className="p-5 text-white">
                <h5 className="mb-2 text-base font-bold tracking-tight text-white line-clamp-2">
                    {title}
                </h5>
                <p className="mb-3 text-sm text-white dark:text-gray-400 line-clamp-4">
                    {description}
                </p>
                <button
                    className="inline-flex items-center justify-center text-sm px-3 py-2 font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => show_tooltip(index)} // Pass a function reference
                >
                    Read more
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

export default Card;
