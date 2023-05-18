import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slider } from "../../data/dataTest";

export const HeaderSlider = () => {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    
    <Slider {...settings}>
      {slider.map((item) => (
      <div key={item.id}>
        <img className="w-100" src={item.img} alt="" />
      </div>
      ))}
    </Slider>
  )
}
