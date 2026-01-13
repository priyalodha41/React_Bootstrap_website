import Headingelement from "./Headingelement"
import Paraelement from "./Paraelement"
import TextBox from "./TextBox"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';

const Benefits = () => {
  return (
   <section className="benefits">
       <div className="container">
        <div className="position-absolute benefits-bg">
          <img src="/assets/images/benefitsbg.webp" alt="" />
        </div>
        <div className="row align-items-center position-relative">
            <div className="col-lg-6">
              <div>
                <img src="/assets/images/benefits.webp" alt="" className="w-100"/>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="benefits-content">
                    <div className="box">
                        <TextBox text="effective benefits" color="#30bd9b" textc="#ffff"/>
                    </div>
                    <div className="mt-3 mb-3 benefit-headingelement">
                      <Headingelement element="Target audience for your business"
                    highlight="business"color="#30bd9b" size="55px"  bottom="2px"/>
                    </div>
                    <Paraelement paragraph="Data analysis also provides researchers with a selection of different tools, such as descriptive statistics, inferential analysis and quantitative analysis."/>

                    <div>
                        <div className="d-flex align-items-center benefits-feature mb-3">
                          <div className="benefits-icon me-2 d-flex justify-content-center align-items-center">
                            <i class="ri-check-line"></i>
                          </div>
                          <div>
                            <span>Personalization of products and services.</span>
                          </div>
                      </div>
                        <div className="d-flex align-items-center benefits-feature mb-3">
                          <div className="benefits-icon me-2 d-flex justify-content-center align-items-center">
                            <i class="ri-check-line"></i>
                          </div>
                          <div>
                            <span>Improving quality of products and services.</span>
                          </div>
                      </div>
                        <div className="d-flex align-items-center benefits-feature">
                          <div className="benefits-icon me-2 d-flex justify-content-center align-items-center">
                            <i class="ri-check-line"></i>
                          </div>
                          <div>
                            <span>Increase the efficiency of the work.</span>
                          </div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-4 flex-wrap benefits-btn">
                        <button className="fw-semibold animated-btn banner-btn">
                            <div className="inner">
                                <span className="icon-left">
                                <i class="ri-youtube-line"></i>
                                </span>

                                <span className="text">
                                How it works
                                </span>

                                <span className="icon-right">
                                <i class="ri-youtube-line"></i>
                                </span>
                            </div>
                            </button>
                            <button className="fw-semibold animated-btn email-btn">
                            <div className="inner">
                                <span className="icon-left">
                              <i class="ri-briefcase-3-line"></i>
                                </span>

                                <span className="text">
                                    Explore services
                                </span>

                                <span className="icon-right">
                             <i class="ri-briefcase-3-line"></i>
                                </span>
                            </div>
                            </button>
                        </div>
              </div>
            </div>
      </div>


    </div>

    
     
      <div className="swiper-benefits">
      <Swiper
        slidesPerView="auto"         
        spaceBetween={40}
        loop={true}                
        speed={7000}               
        autoplay={{
          delay: 0,              
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper continuous-swiper"
      >
        <SwiperSlide className="auto-slide">
          <div className="benefits-slide">
            <span></span>
            data engineers
          </div>
        </SwiperSlide>

        <SwiperSlide className="auto-slide">
          <div className="benefits-slide">
            <span></span>
            data scientists
          </div>
        </SwiperSlide>

        <SwiperSlide className="auto-slide">
          <div className="benefits-slide">
            <span></span>
            predictive analytics
          </div>
        </SwiperSlide>
         <SwiperSlide className="auto-slide">
          <div className="benefits-slide">
            <span></span>
            statistical modelling
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
   </section>
  )
}

export default Benefits