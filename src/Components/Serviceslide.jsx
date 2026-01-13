import Headingelement from "./Headingelement"
import TextBox from "./TextBox"

const Serviceslide = ({img,text,highlight}) => {
  return (
    <div className="service-slider d-flex position-relative">
        <div className="service-slider-content">
            <TextBox  text="our services" color="#ffff" textc="#353642"/>
            <div className="mt-3 services-head">
                <Headingelement element={text} highlight={highlight} color="#30bd9b" size="45px" bottom="7px"/>
            </div>
                 <p>Data analysis also provides researchers with a selection of different tools, such as descriptive statistics.</p>
                <button className="fw-semibold animated-btn banner-btn">
                    <div className="inner">
                        <span className="icon-right">
                       <i class="ri-arrow-right-long-line"></i>
                        </span>

                        <span className="text">
                        Learn more
                        </span>

                        <span className="icon-left">
                       <i class="ri-arrow-right-long-line"></i>
                        </span>
                    </div>
                </button>
        </div>
        <div className="service-image">
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default Serviceslide