"use client"
import { ModeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { signOut, useSession } from "next-auth/react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AlignLeft } from 'lucide-react';

const Navbar = () => {
    const { data: session } = useSession()

    return (
        <header className='py-4 border-b-1 sticky z-50'>
            <nav className='flex justify-between items-center w-11/12 max-w-screen-xl mx-auto'>
                {/* left side */}
                <div className='flex space-x-2 lg:space-x-10 items-center'>
                    {/* Logo */}
                    <h2 className='font-bold text-2xl text-primary'>
                        <span className='bg-primary text-secondary px-2 rounded-sm'>H</span>
                        <p className='hidden'>ablu Shop</p>
                    </h2>
                    {/* links */}
                    <ul className='lg:flex space-x-5 hidden'>
                        <li> <Link href='/'>Home</Link></li>
                        <li> <Link href='/products'>Products</Link></li>
                        <li> <Link href='/dashboard/add-product'>Add Product</Link></li>
                    </ul>
                    <div className='lg:hidden'>
                        <DropdownMenu>
                        <DropdownMenuTrigger><AlignLeft size={24}></AlignLeft></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>
                                <Link href='/'>Home</Link>
                            </DropdownMenuLabel>
                            <DropdownMenuItem>
                                <Link href='/products'>Products</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href='/dashboard/add-product'>Add Product</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                {/* right side */}
                <div className='flex space-x-5'>
                {
                    session ? (
                        <div className="flex items-center space-x-3">
                        <p className="text-sm">{session.user?.name}</p>
                        <Button
                            onClick={() => signOut({ callbackUrl: "/login" })}>
                            Sign out
                        </Button>
                        </div>
                    ) : (
                        <Button asChild>
                        <Link href="/login">Login</Link>
                        </Button>
                    )}
                    <ModeToggle></ModeToggle>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;