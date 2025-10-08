import { toast } from "react-toastify";

const getStoredBook = () => {
    const storeBookSTR = localStorage.getItem("readList");

    if (storeBookSTR) {
        const storeBookData = JSON.parse(storeBookSTR);
        return storeBookData;
    }
    else {
        return [];
    }
}
const addToStoreDB = (id) => {
    const storeBookData = getStoredBook();

    if (storeBookData.includes(id)) {
        toast.error("This id is already exist")
    }
    else {
        storeBookData.push(id)
        const data = JSON.stringify(storeBookData);
        localStorage.setItem("readList", data)
    }
}

const getWishListBook = () => {
    const wishListBookSTR = localStorage.getItem("wishListBook");

    if (wishListBookSTR) {
        const wishListBookData = JSON.parse(wishListBookSTR);
        return wishListBookData;
    }
    else {
        return [];
    }
}


const addWishListToStoreDB = (id) => {
    const wishListBookData = getWishListBook();

    if (wishListBookData.includes(id)) {
        toast.error("This id is already exist")
        
    }
    else {
        wishListBookData.push(id)
        const data = JSON.stringify(wishListBookData);
        localStorage.setItem("wishListBook", data)
    }
}

export { addToStoreDB, getStoredBook, getWishListBook, addWishListToStoreDB }