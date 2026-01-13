import TextBox from "./TextBox"
import Headingelement from "./Headingelement"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Customer from "./Customer";

const Testimonials = () => {
  return (
   <section className="testi">
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center text-center">
                <div className="col-lg-6">
                    <div>
                        <TextBox text="TESTIMONIALS" color="#30bd9b" textc="#ffff" />
                    <div className="mt-2">
                        <Headingelement element="Happy customers" highlight="customers" size="55px"
                        color="#30bd9b" bottom="2px"/>
                    </div>
                    </div>
                </div>
                <div className="swiper-sliders">
                      <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                        0: {
                        slidesPerView: 1,
                        },
                        480: {
                        slidesPerView: 1.2,
                        },
                        520: {
                        slidesPerView: 1.4,
                        },
                        620: {
                        slidesPerView: 1.7,
                        },
                        820: {
                        slidesPerView: 2.2,
                        },
                        920: {
                        slidesPerView: 2.5,
                        },
                        1350: {
                        slidesPerView: 3,
                        },
                        1400: {
                        slidesPerView: 4,
                        },
                        }}
                        className="mySwiper"
                >
                    <SwiperSlide>
                    <Customer  title="Nickie coombs" />
                    </SwiperSlide>
                     <SwiperSlide>
                    <Customer  title="Lesley simms" />
                    </SwiperSlide>
                     <SwiperSlide>
                    <Customer  title="Emma causer" />
                    </SwiperSlide>
                     <SwiperSlide>
                    <Customer  title="Bella roberts" />
                    </SwiperSlide>
                    <SwiperSlide>
                    <Customer  title="Nickie coombs" />
                    </SwiperSlide>
                     <SwiperSlide>
                    <Customer  title="Lesley simms" />
                    </SwiperSlide>
                     <SwiperSlide>
                    <Customer  title="Emma causer" />
                    </SwiperSlide>
                     <SwiperSlide>
                    <Customer  title="Bella roberts" />
                    </SwiperSlide>
                    
                    
                </Swiper>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row mb-4">
                <div className="col-lg-2 col-sm-3 col-6"> 
                    <div className="client-img">
                        <img src="assets/images/client-1.jpg" alt="" />
                    </div>
                </div>
                  <div className="col-lg-2 col-sm-3 col-6"> 
                    <div className="client-img">
                        <img src="assets/images/client-2.jpg" alt="" />
                    </div>
                </div>
                  <div className="col-lg-2 col-sm-3 col-6 mt-sm-0 mt-3"> 
                    <div className="client-img">
                        <img src="assets/images/client-3.jpg" alt="" />
                    </div>
                </div>
                  <div className="col-lg-2 col-sm-3 col-6 mt-sm-0 mt-3"> 
                    <div className="client-img">
                        <img src="assets/images/client-4.jpg" alt="" />
                    </div>
                </div>
                  <div className="col-lg-2 col-sm-3 col-6 mt-lg-0 mt-3"> 
                    <div className="client-img">
                        <img src="assets/images/client-6.jpg" alt="" />
                    </div>
                </div>
                  <div className="col-lg-2 col-sm-3 col-6 mt-lg-0 mt-3"> 
                    <div className="client-img">
                        <img src="assets/images/client-5.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-center testi-content">
                <div>
                    <img src="assets/images/thumbsup.webp" alt="" />
                </div>
               <div class="testi-text">
                World-class <span>30,000+ companies</span> are already work with crafto.</div>
            </div>
        </div>
   </section>
  )
}

export default Testimonials