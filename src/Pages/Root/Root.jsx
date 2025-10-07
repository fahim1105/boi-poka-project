import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-[1270px] mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;