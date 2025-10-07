import React, { Suspense } from 'react';
import Loader from '../Loader/Loader';
import Book from '../Book/Book';

const Books = () => {
    const bookData = fetch("/BookData.json")
        .then(res => res.json())
    return (
        <div>
            <h1 className='font-bold mt-10 md:mt-20 pb-0 md:pb-7 text-center text-3xl md:text-5xl'>Books</h1>
            <Suspense fallback={<Loader></Loader>}>
                <div>
                    {
                        <Book bookData={bookData}></Book>
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;