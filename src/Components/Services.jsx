import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
import Serviceslide from './Serviceslide';

const Services = () => {
  return (
   <div className='overflow-hidden service-section'>
        <div className='container'>
        <div className="row">
                <div className="col-12">
                    <div className='outside-service'>
                        <Swiper
                            slidesPerView="2"         
                            spaceBetween={80}
                            loop={true}                
                            speed={500}               
                            autoplay={{
                            delay: 3000,              
                            disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                           breakpoints={{
                                0: {
                                slidesPerView: 1,
                                spaceBetween: 15,
                                },
                                768: {
                                spaceBetween: 30,
                                },
                                1100: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                                },
                                1400: {
                                spaceBetween: 70,
                                },
                                }}
                            className="mySwiper"
                            
                        >
                            <SwiperSlide  className='service'>
                                <Serviceslide img="/assets/images/service-1.webp"
                                text="Data mining" highlight="mining"/>
                            </SwiperSlide>
                            <SwiperSlide className='service' >
                                <Serviceslide img="/assets/images/service-2.webp"
                                text="Data engineers" highlight="engineers"/>
                            </SwiperSlide>
                             <SwiperSlide className='service' >
                                <Serviceslide img="/assets/images/service-3.webp"
                                text="Data analysis" highlight="analysis"/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
        </div>
        </div>
   </div>
  )
}

export default Services