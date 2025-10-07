import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';


const SingleBook = ({ singleBook }) => {
    const { bookId, bookName, author, image, rating, category, tags } = singleBook;
    return (
        <Link to={`book-details/${bookId}`}>
            <div className="w-[280px] md:w-[325px] bg-white rounded-xl shadow-sm border border-gray-200">
                {/* Book Image */}
                <div className="flex justify-center p-4 m-4 rounded-2xl bg-[#0000000e]">
                    <img
                        src={image}
                        alt="Book Cover"
                        className="h-40 object-contain"
                    />
                </div>

                {/* Tags */}
                <div className="flex gap-2 px-4 mt-2">
                    {
                        tags.map((tag, index) => <span key={index} className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                            {tag}
                        </span>)
                    }
                </div>

                {/* Book Details */}
                <div className="px-4 py-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                        {bookName}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">By : {author}</p>

                    <div className="flex justify-between items-center mt-3 border-t border-[#00000077] border-dashed pt-3">
                        <span className="text-gray-500 text-sm">{category}</span>
                        <div className="flex items-center gap-1">
                            <span className="font-medium">{rating}</span>
                            <FaStarHalfAlt />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SingleBook;