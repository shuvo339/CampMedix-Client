import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import slide1 from '../../../assets/images/slide1.jpg'
import slide2 from '../../../assets/images/slide2.jpg'
import slide3 from '../../../assets/images/slide3.jpg'
import slide4 from '../../../assets/images/slide4.jpg'
import slide5 from '../../../assets/images/slide5.jpg'


const EngagedCamps = () => {
    return (
        <div className="md:mt-24 mt-12">
            <SectionTitle title={'Most Engaged Camps'} subTitle={'Where Participation Meets Excellence'}></SectionTitle>

            <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={40}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                // modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide className="rounded-xl overflow-hidden"
                style={{
                    'height': '550px',
                    'width': '100%',
                    'backgroundSize': 'cover',
                    backgroundImage: 'url("https://i.ibb.co/j4135z0/banner2.jpg")'
                  }}
                >
                   <div className="bg-black bg-opacity-50 bg-blend-overlay">
                   <h3 className="text-4xl uppercase text-center -mt-16">Mental health</h3>
                   </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
                </SwiperSlide>
            </Swiper>
        </div>
        </div>
    );
};

export default EngagedCamps;