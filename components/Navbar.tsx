import Image from "next/image"

const Navbar = () => {
  return (
    <div className=" bg-cyan-900 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white">Music Recommendation System</h1>
      <div className="flex items-center flex-grow justify-center">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 rounded-md mr-2 bg-white text-gray-900"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 hover:shadow-md transition duration-700">
          Search
        </button>
      </div>
      <div className="flex items-center ml-auto">
        <Image src="/user.png" className="w-16" width={256} height={256} alt="User Icon" />
      </div>
    </div>
  );
}

export default Navbar;