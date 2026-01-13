import Headingelement from "./Headingelement"
import TextBox from "./TextBox"
import Paraelement from "./Paraelement"

const Banner = () => {
  return (
    <div className="main-banner">
        <div className="container h-100">
           <div className="position-absolute coin-rotation">
                 <img src="/assets/images/coin-1.webp" alt=""  className="img-fluid"/>
           </div>
           <div className="position-absolute purple-coin-rotation">
                <img src="/assets/images/coin-2.webp" alt=""  className="img-fluid"/>
           </div>
             <div className="position-absolute arrow">
                <img src="/assets/images/arrow.webp" alt=""  className="img-fluid"/>
           </div>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="banner-firstpart">
                        <div className="d-flex align-items-center gap-1 banner-left flex-wrap">
                            <TextBox text="get started" color="#d94f6f" textc="#ffff"/>
                            <span className="fw-semibold ms-2">Real-time data analysis</span>
                        </div>
                        <div className="mt-4">
                            <Headingelement element="Analytics solutions for new business." highlight="business."
                            color="#d94f6f" size="70px" bottom="0px"/>
                        </div>
                        <div>
                           <Paraelement  paragraph="Data analytics is the set of qualitative and quantitative approach to derive valuable insights of data."/>
                        </div>
                        <div className="d-flex align-items-center gap-4 flex-wrap">
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
                              <i class="ri-mail-line"></i>
                                </span>

                                <span className="text">
                                    start@domain.com
                                </span>

                                <span className="icon-right">
                              <i class="ri-mail-line"></i>
                                </span>
                            </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="right-side-img position-relative">
                        <div className="banner-img-2 position-absolute">
                            <img src="/assets/images/banner-img-2.webp" alt=""/>
                        </div>
                        <div className="banner-img-1 position-relative">
                            <img src="/assets/images/banner-img.webp" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner