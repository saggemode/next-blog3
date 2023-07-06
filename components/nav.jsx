import React, { useState } from "react";

import Image from "next/image";
// import Logo from "../public/full_logo.png";
import Link from "next/link";

import Logo from "../data/logo.svg";
import MobileNav from "./MobileNav";
import SectionContainer from "./SectionContainer";
import ThemeSwitch from "./ThemeSwitch";
import global from "../data/global";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
 
  return (
    <nav className="w-full bg-gray-800 shadow fixed">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <h2 className="text-2xl text-white font-bold">{global.siteName}</h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="text-white hover:bg-gray-500 ">
                <Link href="/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li className="text-white">
                <Link href="/mynft">
                  <a>My Nft</a>
                </Link>
              </li>

              <li className="text-white">
                <Link href="/nftlist">
                  <a>NFT List</a>
                </Link>
              </li>

              <li className="text-white">
                <Link href="/create">
                  <a className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Create
                  </a>
                </Link>
              </li>
              <ThemeSwitch />
          
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
