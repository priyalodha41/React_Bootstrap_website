import Offcanvas from "react-bootstrap/Offcanvas";

const MobileOffcanvas = ({ show, onClose }) => {
  return (
    <Offcanvas
      show={show}
      onHide={onClose}
      placement="top"
      className="mobile-offcanvas"
    >
      <Offcanvas.Header closeButton />

      <Offcanvas.Body>
        <ul className="list-unstyled text-center mobile-menu text-white">
          {[
            "Home",
            "About",
            "What we do",
            "Cases",
            "Testimonials",
            "Pricing",
            "Contact",
          ].map((item, i) => (
            <li key={i} onClick={onClose}>
              {item}
            </li>
          ))}
        </ul>

            </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MobileOffcanvas;
