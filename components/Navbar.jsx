import { signOut, useSession } from "next-auth/react";
import Cookies from "js-cookie";
import { Menu } from "@headlessui/react";
import DropdownLink from "./DropdownLink";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";
import global from "../data/global";
import { useRouter } from "next/router";
import { Store } from "../utils/Store";

const Navbar = () => {
  const { status, data: session } = useSession();
  const router = useRouter();
  const { state, dispatch } = useContext(Store);

  const logoutClickHandler = () => {
    signOut({ callbackUrl: "/login" });
  };
  return (
    <div className="w-full bg-gray-100 border-t-4 fixed dark:bg-gray-900 border-yellow-500  dark:border-yellow-400 shadow dark:shadow-2 z-50 transition-all duration-500">
      <div className="flex flex-col justify-between px-4 mx-auto">
        <header className="flex items-center justify-between py-5">
          <div>
            <Link href="/" aria-label="Tailwind CSS Blog">
              <div className="flex items-center justify-between">
                <div className="mr-3">hello</div>

                <div className="hidden h-6 text-2xl font-semibold sm:block">
                  {global.siteName}
                </div>
              </div>
            </Link>
          </div>

          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block ">
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 sm:hidden">
                <li className=" flex">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className=" hover:bg-gray-500 ">
                  <Link href="/dashboard">
                    <a>Dashboard</a>
                  </Link>
                </li>
                <li className="">
                  <Link href="/mynft">
                    <a>My Nft</a>
                  </Link>
                </li>

                <li className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100">
                  <Link href="/nftlist">
                    <a>NFT List</a>
                  </Link>
                </li>

                {status === "loading" ? (
                  "blog"
                ) : session?.user ? (
                  <Menu as="div" className="relative inline-block">
                    <Menu.Button className="text-blue-600">
                      {session.user.name.split(" ")[0]}
                    </Menu.Button>
                    <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg dark:bg-gray-900  hover:shadow-2xl rounded-lg">
                      <Menu.Item>
                        <DropdownLink className="dropdown-link" href="/profile">
                          Profile
                        </DropdownLink>
                      </Menu.Item>
                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link"
                          href="/post"
                        >
                         New Post
                        </DropdownLink>
                      </Menu.Item>
                      {session.user.isAdmin && (
                        <Menu.Item>
                          <DropdownLink
                            className="dropdown-link"
                            href="/admin/dashboard"
                          >
                            Admin Dashboard
                          </DropdownLink>
                        </Menu.Item>
                      )}
                      <Menu.Item>
                        <a
                          className="dropdown-link"
                          href="#"
                          onClick={logoutClickHandler}
                        >
                          Logout
                        </a>
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                ) : (
                  <Link href="/login">
                    <a className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                      Login
                    </a>
                  </Link>
                )}
              </ul>
            </div>

            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
