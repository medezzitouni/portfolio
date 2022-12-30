import React, { useState } from "react";
import { Page } from "../../types";
import Link from "next/link";
import Category from "../Category";
import CommingSoon from "../CommingSoon";


const pages: Page[] = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'About',
        href: '/about'
    },
    {
        name: 'Articles',
        href: '/articles'
    },
] 

export const MobileMenu = () => {

    const [menu, setMenu] = useState('');
  return (
    <nav className="">
      <div className="flex gap-3">
        <button
            onClick={() => setMenu('filter')}
            type="button"
            className="text-sm inline-flex items-center rounded-full text-black p-2 bg-primary lg:hidden shadow-md shadow-black 
            focus:outline-none focus:ring-2 focus:ring-gray-200 "
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>

        </button>
        <button
            onClick={() => setMenu('href')}
            type="button"
            className=" text-sm inline-flex items-center text-black rounded-full p-2 bg-primary lg:hidden shadow-md shadow-black 
                focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        id="mega-menu"
        className={`
        absolute
        ${ menu ? 'block' : 'hidden'} 
        flex flex-col justify-center items-center top-0 left-0 w-full h-[100%] bg-black bg-opacity-60 text-sm 
        `}
      >
        <div className="bg-secondary w-[80%] h-[50%] flex flex-col shadow-2xl shadow-black rounded-xl ">
            <div className="
                relative top-5 right-5
            ">
                <div 
                    onClick={() => setMenu('')}
                    className=" bg-primary bg-opacity-50 h-[35px] w-[35px] md:h-[50px] md:w-[50px]
                    grid place-items-center  
                    text-2xl text-white rounded-full
                    float-right
                    "
                >
                    X
                </div>
            </div>
           { menu == 'href' ? <ul className="flex flex-col gap-3 font-bold text-2xl  grow items-center justify-center">
                {pages.map((page, index) => (
                    <li
                        key={index}
                    >
                        <Link
                            href={page.href}
                            className="block px-6 md:py-2 text-white text-4xl md:text-7xl bg-primary bg-opacity-50 font-amatic  hover:bg-gray-800 lg:hover:bg-transparent border-l-2 text-center"
                            aria-current="page"
                        >
                            {page.name}
                        </Link>
                </li>
                ))}
            </ul>
            :
            <div className={`flex flex-col gap-3 font-bold text-2xl  grow items-center justify-center`}>
                {/* <Category filter={() => {}} /> */}
                <CommingSoon pathname={false} />
            </div>}
        </div>
      </div>
    </nav>
  );
};
