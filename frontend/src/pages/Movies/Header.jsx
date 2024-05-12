import SliderUtil from "../../components/SliderUtil";
import { useGetNewMoviesQuery } from "../../redux/api/movies";
import { Link } from "react-router-dom";

const Header = () => {
  const { data } = useGetNewMoviesQuery();
  return (
    <div className="flex flex-col mt-[2rem]  lg:flex-row justify-between lg:gap-[2.5rem] items-center md:items-start ">
      <nav className=" w-full mb-4 md:mb-0">
        <Link
          to="/"
          className="transition duration-300 ease-in-out hover:bg-teal-200  block p-2 rounded mb-1 md:mb-2 text-lg"
        >
          Home
        </Link>
        <Link
          to="/movies"
          className="transition duration-300 ease-in-out hover:bg-teal-200  block p-2 rounded mb-1 md:mb-2 text-lg"
        >
          Browse Movies
        </Link>
      </nav>

      <div className="w-full lg:w-[80%]">
        <SliderUtil data={data} />
      </div>
    </div>
  );
};

export default Header;
