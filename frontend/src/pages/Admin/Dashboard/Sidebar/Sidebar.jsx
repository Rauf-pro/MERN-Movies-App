import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {
    setToggle(!toggle);
  }
  return (
    <div className="-translate-y-10 flex h-screen fixed z-10 mt-10  left-0 border-r-2 border-[#242424]  ">
      <aside className={`text-white w-[200px] flex-shrink-0  xl:mt-0 mt-10 xl:block bg-black ${toggle ? "block" : "hidden"}`}>
        <ul className="py-4">
          <li className="text-lg  bg-gradient-to-b from-green-500 to-lime-400 rounded-full ">
            <Link
              to="/admin/movies/dashboard"
              className="p-2  mb-10 flex items-center justify-center"
            >
              Dashboard
            </Link>
          </li>
          <li className="text-lg  hover:bg-gradient-to-b from-green-500 to-lime-400 rounded-full">
            <Link to="/admin/movies/create" className="p-2  mb-10 flex items-center justify-center">
              Create Movie
            </Link>
          </li>
          <li className="text-lg  hover:bg-gradient-to-b from-green-500 to-lime-400 rounded-full">
            <Link to="/admin/movies/genre" className="p-2 mb-10 flex items-center justify-center">
              Create Genre
            </Link>
          </li>
          <li className="text-lg  hover:bg-gradient-to-b from-green-500 to-lime-400 rounded-full">
            <Link to="/admin/movies-list" className="p-2  mb-10 flex items-center justify-center">
              Update Movie
            </Link>
          </li>
          <li className="text-lg  hover:bg-gradient-to-b from-green-500 to-lime-400 rounded-full">
            <Link to="/admin/movies/comments" className="p-2  mb-10 flex items-center justify-center">
              Comments
            </Link>
          </li>
        </ul>
      </aside>
      <button id="toggleButton" className="xl:hidden fixed top-0 z-20" onClick={toggleNav}>Toggle</button>
    </div>
  );
};

export default Sidebar;