import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import menu from '../assets/menu.svg';
import x from '../assets/x.svg';

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    return (
        <div className='Navbar sticky top-0 z-20 w-full flex px-6 md:px-[6%] py-5 justify-between bg-black shadow shadow-primary-500'>

            <p className='flex font-title font-bold text-primary-100 text-md'>✦✦✦</p>

            <ul className='list-none hidden space-x-8 sm:flex font-sub text-primary-100 text-base'>
                <Link to='/' className='cursor-pointer hover:underline hover:text-primary-300'
                    onClick={() => {setActive(''); window.scrollTo({top:0, behavior:'smooth'})}}>HOME
                </Link>
                {navLinks.map((link) => (
                    <li key={link.id}
                        className={`${active === link.title ? 'text-primary-300' : 'text-primary-100'} cursor-pointer hover:underline hover:text-primary-300`}
                        onClick={() => setActive(link.title)}>
                        <a href={`#${link.id}`}>{`${link.title}`}</a>
                    </li>
                ))}
            </ul>
            
            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img src={toggle ? x : menu}
                    alt='menu'
                    className='w-[28px] h-[28px] object-contain'
                    onClick={() => {setToggle(!toggle)}}>
                </img>
            </div>

            <div className={`${toggle ? 'flex' : 'hidden'} absolute top-20 right-2 bg-black shadow shadow-primary-500 p-5 min-w-[140px] z-10 rounded-md`}>
                <ul className='list-none flex flex-1 flex-col justify-end space-y-2'>
                    <Link to='/' className='font-sub text-primary-100 text-sm'
                        onClick={() => {setToggle(!toggle); setActive('')}}>HOME
                    </Link>
                    {navLinks.map((link) => (
                        <li key={link.id}
                            className={`font-sub text-primary-100 text-sm ${active === link.title ? 'text-primary-300' : 'text-primary-100'}`}
                            onClick={() => {setToggle(!toggle); setActive(link.title)}}>
                            <a href={`#${link.id}`}>{`${link.title}`}</a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Navbar