import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook, getWishListBook } from '../../Utilities/Utilities';
import WishListBook from '../WishListBook/WishListBook';
import WishListBook2 from '../WishListBook2/WishListBook2';
import '../../Components/Dropdown/Dropdown.css'

const ListedBooks = () => {
    const [readList, setReadList] = useState([])
    const [wishList, setWishList] = useState([])
    const [sort, setSort] = useState("")

    const data = useLoaderData()
    // console.log(data)

    useEffect(() => {
        const storedBookData = getStoredBook()
        const convertedBookData = storedBookData.map(id => parseInt(id))
        // console.log(convertedBookData)
        const myReadList = data.filter(book => convertedBookData.includes(book.bookId))
        setReadList(myReadList)
    }, [])

    useEffect(() => {
        const wishListBookSTR = getWishListBook()
        const convertedWishListData = wishListBookSTR.map(id => parseInt(id))
        console.log(convertedWishListData)
        const myWishList = data.filter(book => convertedWishListData.includes(book.bookId))
        setWishList(myWishList)
    }, [])

    const handelSort = (type) => {
        setSort(type)
        if(type === "Pages"){
            const sortedByPage =[...readList].sort((a,b) =>a.totalPages-b.totalPages)
            setReadList(sortedByPage)
        }
        if(type === "Pages"){
            const sortedByPage =[...wishList].sort((a,b) =>a.totalPages-b.totalPages)
            setWishList(sortedByPage)
        }
        if(type === "Rating"){
            const sortedByRating =[...readList].sort((a,b) =>a.rating-b.rating)
            setReadList(sortedByRating)
        }
        if(type === "Rating"){
            const sortedByRating =[...wishList].sort((a,b) =>a.rating-b.rating)
            setWishList(sortedByRating)
        }
    }

    return (
        <div>
            <h1 className='mt-4 md:mt-6 mb-4 md:mb-6 p-8 rounded-2xl bg-[#00000010] text-center font-bold text-4xl'>Books</h1>

            <div className='flex justify-center mb-30 md:mb-25'>
                <div className="paste-button">
                    <button className="button">Sort by {sort ? sort : ""} &nbsp; ▼</button>
                    <div className="dropdown-content">
                        <a onClick={() => handelSort("Pages")} id="top" href="#">Pages</a>
                        <a onClick={() => handelSort("Rating")} id="middle" href="#">Rating</a>

                    </div>
                </div>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wishlist</Tab>
                </TabList>

                <TabPanel>
                    {
                        readList.map(book => <WishListBook key={book.bookId} book={book}></WishListBook>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        wishList.map(book => <WishListBook2 key={book.bookId} book={book}></WishListBook2>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;