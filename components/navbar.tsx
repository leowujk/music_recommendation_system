// Components is a specific folder contained objects

import Link from "next/link";

// objects
const Navbar = () => {
    // return
    return (
        <div className="flex space-x-4 border-b-2 border-gray-300 py-4 bg-red-200 shadow-md justify-center">
            {/* add border in the buttom, padding */}
            {/* to url : 'root' in 'app' folder*/}
            <Link href='/'>
                <div className=" text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out">
                    {/* hover: transition  ease-in-out*/}
                    Home
                </div>
            </Link>
            {/* to url : "about" folder in 'app' folder */}
            <Link href='/about'>
                <div className=" text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out">
                    About
                </div>
            </Link>
        </div>
    );
};

// export
export default Navbar;