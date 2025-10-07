import React from 'react';
import BannerImg from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className="bg-gray-100 rounded-2xl flex flex-col md:flex-row items-center md:pl-40 py-10 md:py-12 mt-8 md:mt-12">
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-snug md:w-[525px]">
                    Books to freshen up your bookshelf
                </h2>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md transition duration-300">
                    View The List
                </button>
            </div>
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                <img
                    src={BannerImg}
                    alt="Book Banner"
                    className="w-[220px] md:w-[280px] drop-shadow-lg"
                />
            </div>
        </div>
    );
};

export default Banner;