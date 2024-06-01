import banner1 from "../../../assets/images/banner1.jpg";
import banner2 from "../../../assets/images/banner2.jpg";
import banner3 from "../../../assets/images/banner3.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel
        showArrows={true}
        showThumbs={true}
        showStatus={false}
      >
        <div className='img-div'>
          <img src={banner1} alt="" />
        </div>
        <div className="img-div">
          <img src={banner2} alt="" />
        </div>
        <div className="img-div">
          <img src={banner3} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
