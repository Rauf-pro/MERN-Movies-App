import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "../pages/Movies/MovieCard";

const SliderUtil = ({data}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
          {
              breakpoint: 1024, // Medium devices (tablets, less than desktop)
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 768, // Small devices (landscape phones)
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 480, // Extra small devices (portrait phones)
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
      };
  return (
    <Slider {...settings}>
      {data?.map((movie) => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </Slider>
  )
}

export default SliderUtil