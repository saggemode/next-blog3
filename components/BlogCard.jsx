/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import UserCard from "./UserCard";
import db from '../utils/db'
import Post from '../models/Post'

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/`}>
      <div className="flex bg-white cursor-pointer dark:bg-gray-900 shadow-sm  hover:shadow-2xl transition-all duration-500 px-6 pt-4 pb-4 rounded-lg ">
        <img
          className="w-1/4 h-56 object-contain bg-cover rounded-md border-none text-white"
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80"
          alt="title"
        />
        <div className="ml-7 w-3/4 ">
          <div className="my-3">
            <p className="text-xl font-bold dark:text-gray-50 transition-all duration-500">
              eadable content of a page when looking at its layout. The point of
              using
            </p>
          </div>
          <div>
            <p className="dark:text-gray-50 transition-all duration-500">
              eadable content of a page when looking at its layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpos
            </p>
          </div>

          <UserCard />
        </div>
        <br />
      </div>
    </Link>
  );
}
