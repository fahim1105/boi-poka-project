import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const Links =
        <div className='md:gap-5 md:flex md:items-center'>
            <NavLink
                to="/"
                className={({ isActive }) => isActive ? "underline" : "no-underline"}>Home
            </NavLink>
            <NavLink
                to="/listed-books"
                className={({ isActive }) => isActive ? "underline" : "no-underline"}>Listed Books
            </NavLink>
        </div>
    return (
        <div className="navbar bg-base-100 shadow-sm z-50">
            {/* Navbar Start */}
            <div className="navbar-start">
                {/* Dropdown for mobile */}
                <div className="dropdown relative">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    {/* Dropdown menu items */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>

                {/* Brand name */}
                <Link to="/" className="btn btn-ghost normal-case text-xl font-bold">
                    Book Vibe
                </Link>
            </div>

            {/* Navbar Center (Desktop) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>

            {/* Navbar End (Buttons) */}
            <div className="navbar-end gap-3">
                <Link to="/signin" className="btn bg-[#23BE0A] rounded-xl text-white hover:bg-[#1e9908]">
                    Sign in
                </Link>
                <Link to="/signup" className="btn bg-[#59C6D2] rounded-xl text-white hover:bg-[#3db2bf]">
                    Sign up
                </Link>
            </div>
        </div>
    );
};

export default Navbar;