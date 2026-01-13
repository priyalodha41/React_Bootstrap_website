const FeatureBox = ({img,title,para,color}) => {
  return (
    <div className="col-lg-6">
       <div className="d-flex feature-box mb-4 position-relative" style={{background:color}}>
            <div className="me-3">
                <img src={img} alt="" />
            </div>
            <div>
                <span className="fw-semibold">{title}</span>
                <p className="mt-2">{para}</p>

            {title === "Business intelligence" && (
                <div className="feature-unique">Popular</div>
            )}
            </div>
       </div>
    </div>
  )
}

export default FeatureBox