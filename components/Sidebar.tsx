// Components is a specific folder contained objects

import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faCogs, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';


// objects
const Sidebar = () => {
    // return
    return (
        <div className="flex h-screen">
          <div className="w-64 bg-gray-800 text-white flex flex-col">
            <div className="p-4">
              <h1 className="text-lg font-bold">My Sidebar</h1>
            </div>
            <div className="flex flex-col p-4">
                {/* turn a link into div */}
              <Link href="/">
                <div className="p-2 hover:bg-gray-700 rounded">Home</div>
              </Link>
              <Link href="/Explore">
                <div className="p-2 hover:bg-gray-700 rounded">
                  <FontAwesomeIcon icon={faBars} className="mr-2" />
                  Explore
                </div>
              </Link>
            </div>
          </div>
          <div className="flex-1 p-6 bg-gray-100">
            {/* Main content goes here */}
          </div>
        </div>
    );
};

// export
export default Sidebar;