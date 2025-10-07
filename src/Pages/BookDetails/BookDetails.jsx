import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { id } = useParams()
    const BookId = parseInt(id)

    const BookData = useLoaderData()

    const singleBook = BookData.find(book => book.bookId === BookId)

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = singleBook

    return (
        <div className="flex flex-col md:flex-row items-center bg-white rounded-xl border-1 border-[#0000001a] shadow-md p-6 max-w-[1000px] mx-auto gap-14 mt-9 md:mt-13 mb-6 md:mb-10">
            {/* Book Image */}
            <div className="flex-shrink-0 bg-[#00000009] p-12 rounded-xl">
                <img
                    src={image} 
                    alt="Book Cover"
                    className="w-64 rounded-lg shadow"
                />
            </div>

            {/* Book Details */}
            <div className="flex flex-col justify-between">
                <div>
                    <h2 className="text-3xl font-bold mb-1">{bookName}</h2>
                    <p className="text-gray-700 mb-3">By : <span className="font-medium">{author}</span></p>
                    <p className="text-gray-600 font-semibold border-b border-gray-300 pb-1 mb-3">{category}</p>

                    <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Review : </span>{review}</p>

                    <div className="flex gap-2 mb-4">
                        {
                            tags.map((tag, index) => <span key={index} className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">#{tag}</span>)
                        }
                    </div>

                    <div className="text-sm text-gray-700 space-y-1 mb-4">
                        <p><span className="font-semibold">Number of Pages:</span> {totalPages}</p>
                        <p><span className="font-semibold">Publisher:</span>{publisher}</p>
                        <p><span className="font-semibold">Year of Publishing:</span>{yearOfPublishing}</p>
                        <p><span className="font-semibold">Rating:</span>{rating}</p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                    <button className="bg-gray-200 text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition">
                       Mark as Read
                    </button>
                    <button className="bg-sky-100 text-sky-800 px-5 py-2 rounded-lg font-medium hover:bg-sky-200 transition">
                       Add to Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;