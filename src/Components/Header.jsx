import { useState } from "react";
import MobileOffcanvas from "./MobileOffcanvas";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
    
      <div className="upper-header text-center pt-2 pb-2">
        <div className="fs-14 text-white">
          Provide data analytics solutions for startup business enterprises.
          <a
            href="/"
            className="text-white thin fw-semibold position-relative"
          >
            Explore services
            <i className="ri-arrow-right-long-line ms-2"></i>
            <span className="bg-white opacity-4 position-absolute"></span>
          </a>
        </div>
      </div>

     
      <div className="lower-header position-relative">
        <div className="container-fluid d-flex justify-content-between align-items-center">

          
          <div className="d-flex flex-wrap align-items-center lower-left-head">
            <div className="head-img">
              <a href="/">
                <img
                  src="/assets/images/Logo.webp"
                  alt=""
                  width={123}
                  height={23}
                  className="mb-1"
                />
              </a>
            </div>

            <div>
              <ul className="d-none d-xl-flex flex-wrap gap-5 mb-0 nav-bar align-items-center">
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

      
          <div className="lower-right-head">
            <div className="d-none d-xl-flex flex-wrap align-items-center gap-3">
              <div className="alt-font fw-600">
                <a
                  href="tel:1800222000"
                  className="widget-text fw-semibold text-reset text-decoration-none"
                >
                  <i className="ri-phone-line me-1"></i>1 800 222 000
                </a>
              </div>

              <div>
                <button className="btn fw-semibold animated-btn">
                  <div className="inner">
                    <span className="icon-left">
                      <i className="ri-mail-line"></i>
                    </span>

                    <span className="text">
                      Get a quote
                    </span>

                    <span className="icon-right">
                      <i className="ri-mail-line"></i>
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

   
        <button
          className="d-xl-none btn position-absolute end-0 top-50 translate-middle-y me-3"
          onClick={() => setShowMenu(true)}
        >
          <i className="ri-menu-3-line fs-3"></i>
        </button>
      </div>

      <MobileOffcanvas
        show={showMenu}
        onClose={() => setShowMenu(false)}
      />
    </div>
  );
};

export default Header;
