import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div className='max-w-[1270px] mx-auto'>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;