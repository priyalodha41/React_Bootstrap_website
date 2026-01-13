import FeatureBox from "./FeatureBox"
import Headingelement from "./Headingelement"
import TextBox from "./TextBox"

const Company = () => {
  return (
    <div className="container mb-5">
        <div className="row d-flex justify-content-center company-head position-relative">
             <div className="feature-box-1">
                <img src="/assets/images/feature.webp" alt="" className="position-absolute" />
            </div>
            <div className="feature-box-2">
                <img src="/assets/images/featurebox.webp" alt="" className="position-absolute" />
            </div>
            <div className="col-xxl-6 col-lg-8 col-12">
                <div className="text-center">
                        <TextBox  text="about company" color="#30bd9b" textc="#ffff"/>
                        <div className="mt-3">
                             <Headingelement element="Data analytics and business model solution" highlight="Analytics"
                            color="#30bd9b" size="55px" bottom="2px"/>
                        </div>
                </div>
        </div>
        </div>
        <div className="row position-relative">
                <FeatureBox
                img="/assets/images/f1.webp"
                title="Real-time segementation"
                para="This model is idea-driven as it involves daily engagement activities with clients."
                color="#f4f6ff"
                />
                <FeatureBox
                img="/assets/images/f2.webp"
                title="Exploratory data analysis"
                para="This model is idea-driven as it involves daily engagement activities with clients."
                color="#f2fbf9"
                />
                <FeatureBox
                img="/assets/images/f3.webp"
                title="Business intelligence"
                para="This model is idea-driven as it involves daily engagement activities with clients."
                color="#fef3f5"
                />
                <FeatureBox
                img="/assets/images/f4.webp"
                title="Perscriptive analysis"
                para="This model is idea-driven as it involves daily engagement activities with clients."
                color="#f5edfc"
                />
        </div>

        <div className="d-flex align-items-center justify-content-center mt-4">
            <div>
                <img src="/assets/images/featurelovesign.webp" alt="" />
            </div>
            <div class="feature-lower-part">World-class <span class="fw-bold">30,000+ companies</span> are already work with crafto.</div>
        </div>
    </div>
  )
}

export default Company