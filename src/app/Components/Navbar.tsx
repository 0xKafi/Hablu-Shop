import Link from 'next/link';
import React from 'react';
import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button"

const Navbar = () => {
    return (
        <header className='py-4 border-b-1 sticky z-50'>
            <nav className='flex justify-between items-center w-11/12 max-w-screen-xl mx-auto'>
                {/* left side */}
                <div className='flex space-x-10 items-center'>
                    {/* Logo */}
                    <h2 className='font-bold text-2xl text-gray-700'>
                        <span className='bg-gray-700 text-secondary px-2 rounded-sm'>H</span>
                        ablu Shop
                    </h2>
                    <ul className='flex space-x-5'>
                        <li> <Link href='/'>Home</Link></li>
                        <li> <Link href='/'>Categories</Link></li>
                        <li> <Link href='/'>Shop</Link></li>
                    </ul>
                </div>

                {/* right side */}
                <div className='flex space-x-5'>
                    {/* search */}
                    <div className='flex items-center bg-accent rounded-md'>
                        <input type="text" placeholder='Search here'
                            className='outline-none py-1 px-4 text-sm' />
                        <button className='border-l border-base-300 p-2 px-3 rounded-r-sm cursor-pointer'>
                            <CiSearch />
                        </button>
                    </div>
                    {/* account and cart */}
                    <div className='flex space-x-5 items-center'>
                        <div className='flex items-center cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            <p className='text-sm pl-1'>Cart</p>
                        </div>
                        <div className='flex items-center cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <p className='text-sm pl-1'>Account</p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;