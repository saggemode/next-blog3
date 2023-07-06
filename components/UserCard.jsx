/* eslint-disable @next/next/no-img-element */
function UserCard() {
  return (
    <div className="mt-3 p-3 bg-gray-100 dark:bg-black rounded-lg flex transition-all duration-500">
      <img
        className="w-14 h-14 rounded-full"
        src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80"
      alt="new image"
      />
      <div className="ml-3 flex flex-col justify-between">
        <p className="text-lg font-semibold dark:text-white transition-all duration-500">
          umeh paul
        </p>
        <p className="text-gray-600">25 june 1991</p>
      </div>
      {/* {blog.author} */}
    </div>
  )
}

export default UserCard
