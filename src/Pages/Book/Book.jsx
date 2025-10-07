import React, { use } from 'react';
import SingleBook from '../SingleBook/SingleBook';

const Book = ({ bookData }) => {
    const allBooksData = use(bookData)
    return (
        <div className='max-w-[1270px] mx-auto ml-10 md:ml-0 px-4 py-10 grid grid-cols-1 md:grid-cols-3 md:gap-x-35 gap-y-10'>
            {
                allBooksData.map(singleBook => <SingleBook key={singleBook.bookId} singleBook={singleBook}></SingleBook>)
            }
        </div>
    );
};

export default Book;