import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="-translate-y-10 flex h-screen fixed mt-10 left-0 border-r-2 border-[#242424]">
      <aside className="text-white w-[200px] flex-shrink-0">
        <ul className="py-4">
          <li className="text-lg  bg-gradient-to-b from-green-500 to-lime-400 rounded-full">
            <Link
              to="/admin/movies/dashboard"
              className="block p-2  mb-10"
            >
              Dashboard
            </Link>
          </li>
          <li className="text-lg  hover:bg-gradient-to-b from-green-500 to-lime-400 rounded-full">
            <Link to="/admin/movies/create" className="block p-2  mb-10">
              Create Movie
            </Link>
          </li>
          <li className="text-lg  hover:bg-gradient-to-b from-green-500 to-lime-400 rounded-full">
            <Link to="/admin/movies/genre" className="block p-2 mb-10">
              Create Genre
            </Link>
          </li>
          <li className="text-lg  hover:bg-gradient-to-b from-green-500 to-lime-400 rounded-full">
            <Link to="/admin/movies-list" className="block p-2  mb-10">
              Update Movie
            </Link>
          </li>
          <li className="text-lg  hover:bg-gradient-to-b from-green-500 to-lime-400 rounded-full">
            <Link to="/admin/movies/comments" className="block p-2  mb-10">
              Comments
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;