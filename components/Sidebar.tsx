// Components is a specific folder contained objects

import Link from "next/link";
import Image from "next/image";

// objects
const Sidebar = () => {
    // return
    return (
          <div className="w-48 bg-gray-800 text-white flex flex-col">
            <div className="flex flex-col p-4">
              <Link href="/">
                <div className="p-2 hover:bg-gray-700 rounded flex items-center justify-between">
                  <span>Home</span>
                    <div className="ml-2">
                      <Image src="/building.png" width={24} height={24} alt="Home Icon" />
                    </div>
                </div>
              </Link>
              <Link href="/explore">
                <div className="p-2 hover:bg-gray-700 rounded flex items-center justify-between">
                  <span>Explore</span>
                    <div className="ml-2">
                      <Image src="/explore.png" width={24} height={24} alt="Explore Icon" />
                    </div>
                </div>
              </Link>
            
              <hr className=" mb-10 mt-5 border-yellow-400" />
              <Link href="/bookmarks-1">
                <div className="p-2 hover:bg-gray-700 rounded">收藏1</div>
              </Link>
              <Link href="/bookmarks-2">
                <div className="p-2 hover:bg-gray-700 rounded">收藏2</div>
              </Link>
            </div>
          </div>
    );
};

// export
export default Sidebar;