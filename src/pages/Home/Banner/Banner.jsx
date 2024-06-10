
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Banner = () => {
  return (
    <div className="App">
    <Carousel showArrows={true}
        showStatus={false}
        infiniteLoop={true}
        swipeable={true}
        >
      <div data-aos="zoom-out"
     data-aos-duration="3000" className="bg-black bg-opacity-40 bg-blend-overlay bg-center relative"
        style={{
          'height': '550px',
          'width': '100%',
          'backgroundSize': 'cover',
          backgroundImage: 'url("https://i.ibb.co/2nFHkwD/banner1.jpg")'
        }}
      >
        <div className="absolute top-20 md:top-40 left-0 md:left-20 px-3 space-y-6">
        <h2 className="text-3xl md:text-5xl text-gray-100 font-bold" data-aos="fade-right"
     data-aos-duration="3000">Transforming Lives Through <br /><span className="text-teal-400"> Medical </span>Camps</h2>
        <p className="text-xl pb-6 max-w-[600px] text-gray-200 font-bold" data-aos="fade-left"
     data-aos-duration="3000">A heartwarming journey of a young child who regained health and hope through our medical intervention.</p>
        <Link to="available-camps"><button className="btn btn-outline btn-accent text-[17px]">Explore Available Camps</button></Link>
        </div>
      </div>
      <div className="bg-black bg-opacity-40 bg-blend-overlay bg-center relative"
        style={{
          'height': '550px',
          'width': '100%',
          'backgroundSize': 'cover',
          backgroundImage: 'url("https://i.ibb.co/j4135z0/banner2.jpg")'
        }}
      >
        <div className="absolute top-20 md:top-40 left-0 md:left-20 px-3 space-y-6">
        <h2 className="text-3xl md:text-5xl text-gray-100 font-bold">Empowering Communities With <br /><span className="text-teal-400">Healthcare</span> Initiatives</h2>
<p className="text-xl pb-6 max-w-[600px] text-gray-200 font-bold">How a small village transformed its healthcare system with the support and resources provided by CampMedix.</p>
        <Link to="available-camps"><button className="btn btn-outline btn-accent text-[17px]">Explore Available Camps</button></Link>
        </div>
      </div>
      <div className="bg-black bg-opacity-40 bg-blend-overlay bg-center relative"
        style={{
          'height': '550px',
          'width': '100%',
          'backgroundSize': 'cover',
          backgroundImage: 'url("https://i.ibb.co/SxZNFXg/banner3.jpg")'
        }}
      >
        <div className="absolute top-20 md:top-40 left-0 md:left-20 px-3 space-y-6">
        <h2 className="text-3xl md:text-5xl text-gray-100 font-bold">Promoting Health Through <br /><span className="text-teal-400">Dental</span> Care</h2>
<p className="text-xl pb-6 max-w-[600px] text-gray-200 font-bold">Bringing dental care to underserved communities, addressing urgent dental issues and promoting oral health education.</p>
        <Link to="available-camps"><button className="btn btn-outline btn-accent text-[17px]">Explore Available Camps</button></Link>
        </div>
      </div>
     
      
    </Carousel>
  </div>
  );
};

export default Banner;
