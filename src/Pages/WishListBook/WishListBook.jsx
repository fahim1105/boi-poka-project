import React from 'react';
import { Link } from 'react-router';

const WishListBook = ({ book }) => {
    const { bookId, bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = book
    return (
        <div className="max-w-5xl mx-auto p-4">
            <div className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-md rounded-2xl p-5 gap-6 border border-gray-200">
                {/* Book Image */}
                <div className="w-40 h-52 flex-shrink-0 flex items-center justify-center bg-gray-100 rounded-lg mx-auto md:mx-0">
                    <img
                        src={image}
                        alt="Book Cover"
                        className="w-28 object-contain drop-shadow-md"
                    />
                </div>

                {/* Book Details */}
                <div className="flex-1 space-y-3 text-center md:text-left">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                        {bookName}
                    </h2>

                    <p className="text-gray-700">
                        <span className="font-medium text-gray-800">By :</span> {author}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Publishing Info */}
                    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center md:justify-start gap-2 sm:gap-6 text-gray-600 text-sm">
                        <div className="flex items-center gap-1 justify-center md:justify-start">
                            <i className="ri-map-pin-line"></i>
                            <span>Year of Publishing: {yearOfPublishing}</span>
                        </div>
                        <div className="flex items-center gap-1 justify-center md:justify-start">
                            <i className="ri-building-line"></i>
                            <span>Publisher: {publisher}</span>
                        </div>
                        <div className="flex items-center gap-1 justify-center md:justify-start">
                            <i className="ri-file-list-line"></i>
                            <span>Page: {totalPages}</span>
                        </div>
                    </div>

                    <hr className="border-gray-200" />

                    {/* Bottom Buttons */}
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
                        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
                            Category: {category}
                        </span>
                        <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-medium">
                            Rating: {rating}
                        </span>
                        <Link to={`/book-details/${bookId}`}>
                            <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2 rounded-full transition">
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default WishListBook;