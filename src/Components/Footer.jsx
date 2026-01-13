const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row">
              <div className="col-12">
                  <div className="top-footer d-flex flex-wrap align-items-center justify-content-center position-relative mb-3">
                    <div className="mb-xl-0 mb-3">
                      <h5>Let's start something awesome analytics together.</h5>
                    </div>
                    <div>
                         <button className="fw-semibold animated-btn banner-btn foot-btn">
                          <div className="inner">
                              <span className="icon-right">
                            <i class="ri-mail-line"></i>
                              </span>

                              <span className="text">
                              Get started
                              </span>

                              <span className="icon-left">
                           <i class="ri-mail-line"></i>
                              </span>
                          </div>
                        </button>
                      </div>

                      <div className="color-border position-absolute"></div>
                  </div>
              </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="d-flex flex-column flex-lg-row align-items-center justify-content-lg-between mb-3 lower-left-head w-100">
                        <div className="head-img d-flex justify-content-center justify-content-lg-start  w-lg-auto">
                            <a href="/"><img src="/assets/images/Logo.webp" alt=""  width={123} height={23} className="mb-1"/></a>
                        </div>
                    <div className="ms-lg-auto flex-shrink-0">
                    <ul className="d-flex flex-wrap flex-lg-nowrap gap-4 gap-lg-5 mb-0 nav-bar align-items-center foot-items">
                        <li>Home</li>
                        <li>About</li>
                        <li>What we do</li>
                        <li>Cases</li>
                        <li>Testimonials</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                    </ul>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row lower-foot pt-4 d-flex align-items-center justify-content-between pb-3">
                   <div className="col-lg-7">
                  <div>
                      <p>This site is protected by reCAPTCHA and the Google <a href="#" class="text-decoration-line-bottom">privacy policy</a> and <a href="#" class="text-decoration-line-bottom">terms of service</a> apply. You must not use this website if you disagree with any of these website standard terms and conditions.</p>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="footer-icons">
                      <ul className="d-flex p-0 gap-3 justify-content-lg-end justify-content-center">
                        <li><i class="ri-facebook-fill"></i></li>
                        <li><i class="ri-instagram-line"></i></li>
                        <li><i class="ri-twitter-fill"></i></li>
                        <li><i class="ri-dribbble-fill"></i></li>
                      </ul>
                  </div>
                </div>
               </div>
            </div>
    </footer>
  )
}

export default Footer