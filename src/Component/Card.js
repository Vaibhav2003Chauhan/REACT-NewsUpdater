import React from 'react'

function Card(props) {
    const urlToImage = props.curr.urlToImage;
    const title = props.curr.title;
    const description = props.curr.description;

    if (!title || !description || title == '[Removed]') {
        return null;
    }
    return (
        <>
            <div class="max-w-sm bg-${ rgb(29, 29, 77)} text-white border border-blue-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-1  my-3 text-ellipsis object-contain" style={{ height: '480px' }}>
                <img
                    className="rounded-t-lg w-{240 px} h-{250 px}"
                    src={
                        props.curr.urlToImage
                            ? props.curr.urlToImage
                            : "https://image.pngaaa.com/700/5273700-middle.png"
                    }
                    alt="News Thumbnail"
                />

                <div class="p-5 text-white">
                    <h5 class="mb-2 text-base font-bold tracking-tight text-white">{props.curr.title}</h5>
                    <p class="mb-3 text-sm text-white dark:text-gray-400">{props.curr.description}</p>
                    <a href="" class="inline-flex items-center px-3 py-2 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>

        </>
    )
}

export default Card