import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import './camps.css'

const EngagedCamps = () => {
    return (
        <div className="md:mt-24 mt-12">
            <SectionTitle title={'Most Engaged Camps'} subTitle={'Where Participation Meets Excellence'}></SectionTitle>

            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    // modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className="slideCard"
                       style={{
                        backgroundImage: "url('https://i.ibb.co/vJmfDzm/heart.jpg')"
                    }}
                    >
                            <div className="card-camp">
                                <h3 className="text-lg md:text-2xl mb-4 font-semibold">Camp Name: <br /> Heart Health Camp</h3>
                              <div className="space-y-2">
                              <p className="mb-3">Professional: <span className="font-semibold">Dr. John Smith</span></p>
                                    <p className="font-semibold">Participants: 90</p>
                                    <p>Fess: $10</p>
                                    <p className="pb-4">Date: 05/05/24</p>
                              </div>
                            </div>
                        {/* </div> */}

                    </SwiperSlide>

                    <SwiperSlide className="slideCard"
                        style={{
                            backgroundImage: "url('https://i.ibb.co/nRwvyGS/Why-Pediatric.jpg')"
                        }}
                    >
                         <div className="card-camp">
                                <h3 className="text-lg md:text-2xl mb-4 font-semibold">Camp Name: <br /> Pediatric Care Camp</h3>
                              <div className="space-y-2">
                              <p className="mb-3">Professional: <span className="font-semibold">Dr. Emily Johnson</span></p>
                                    <p className="font-semibold">Participants: 150</p>
                                    <p>Fess: $8</p>
                                    <p className="pb-4">Date: 15/05/24</p>
                              </div>
                            </div>
                        {/* </div> */}
                    </SwiperSlide>
                    <SwiperSlide className="slideCard"
                        style={{
                            backgroundImage: "url('https://i.ibb.co/mv4VRzg/slide4.jpg')"
                        }}
                    >
                       
                         <div className="card-camp">
                                <h3 className="text-lg md:text-2xl mb-4 font-semibold">Camp Name: <br />Diabetes Check Camp</h3>
                              <div className="space-y-2">
                              <p className="mb-3">Professional: <span className="font-semibold">Dr. Michael Brown</span></p>
                                    <p className="font-semibold">Participants: 110</p>
                                    <p>Fess: $12</p>
                                    <p className="pb-4">Date: 08/03/24</p>
                              </div>
                            </div>
                        {/* </div> */}
                    </SwiperSlide>
                    <SwiperSlide className="slideCard"
                        style={{
                            backgroundImage: "url('https://i.ibb.co/59zhXVh/women-services.jpg')"
                        }}
                    >
                      
                         <div className="card-camp">
                                <h3 className="text-lg md:text-2xl mb-4 font-semibold">Camp Name: <br /> Women's Health Camp</h3>
                              <div className="space-y-2">
                              <p className="mb-3">Professional: <span className="font-semibold">Dr. Sarah Davis</span></p>
                                    <p className="font-semibold">Participants: 100</p>
                                    <p>Fess: $15</p>
                                    <p className="pb-4">Date: 12/02/24</p>
                              </div>
                            </div>
                        {/* </div> */}
                    </SwiperSlide>
                    <SwiperSlide className="slideCard"
                        style={{
                            backgroundImage: "url('https://i.ibb.co/gDGb76z/dental-health.png')"
                        }}
                    >
                         
                         <div className="card-camp">
                                <h3 className="text-lg md:text-2xl mb-4 font-semibold">Camp Name: <br /> Dental Checkup Camp</h3>
                              <div className="space-y-2">
                              <p className="mb-3">Professional: <span className="font-semibold">Dr. Jennifer Moore</span></p>
                                    <p className="font-semibold">Participants: 80</p>
                                    <p>Fess: $18</p>
                                    <p className="pb-4">Date: 09/04/24</p>
                              </div>
                            </div>
                        {/* </div> */}
                    </SwiperSlide>
                    <SwiperSlide className="slideCard"
                        style={{
                            backgroundImage: "url('https://i.ibb.co/zP0bnP0/slide5.jpg')"
                        }}
                    >
                        
                         <div className="card-camp">
                                <h3 className="text-lg md:text-2xl mb-4 font-semibold">Camp Name: <br /> Eye Care Camp</h3>
                              <div className="space-y-2">
                              <p className="mb-3">Professional: <span className="font-semibold">Dr. William Taylo</span></p>
                                    <p className="font-semibold">Participants: 70</p>
                                    <p>Fess: $20</p>
                                    <p className="pb-4">Date: 07/01/24</p>
                              </div>
                            </div>
                   
                    </SwiperSlide>
                   

                </Swiper>
            </div>
        </div>
    );
};

export default EngagedCamps;