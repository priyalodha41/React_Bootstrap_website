const Customer = ({title}) => {
  return (
    <div className="customer-slider d-flex">
        <div className="slide-name d-flex justiy-content-center">
            <div class="title">{title}</div>
        </div>
        <div className="slider-content">
            <p>I chose crafto because of the interface and the robust features to handle our volumes of data quickly and efficiently.</p>

            <ul className="d-flex align-items-center">
                <li><i class="ri-star-fill"></i></li>
                <li><i class="ri-star-fill"></i></li>
                <li><i class="ri-star-fill"></i></li>
                <li><i class="ri-star-fill"></i></li>
                <li><i class="ri-star-fill"></i></li>
            </ul>
        </div>
    </div>
  )
}

export default Customer