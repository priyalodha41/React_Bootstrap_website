import Headingelement from "./Headingelement"
import TextBox from "./TextBox"
import Accordion from 'react-bootstrap/Accordion'

const Customersupport = () => {
  return (
    <section className="customer">
        <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="position-relative d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start">
                    <TextBox  text="CUSTOMER SUPPORT" color="#30bd9b" textc="#ffff"/>
                    <div className="mt-2 customer-heading">
                          <Headingelement element="Have you question?"
                        highlight="question"color="#30bd9b" size="55px"  bottom="2px"/>
                    </div>
                    <div className="d-flex align-items-center">
                        <img src="assets/images/customer.webp" alt="" />
                        <span>
                            <span className="support-text">Support executive</span>
                            <span className="d-block satisfied-text">1000+ satisfied</span>
                        </span>
                    </div>
                   <div className="customer-phone position-absolute d-none d-lg-flex">
                         <img src="assets/images/customer-phone.webp" alt="" />
                   </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What are some examples of AI technologies?</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                            </Accordion.Body>
                        </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What is potential for AI in customer service?</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Do you charge by the job or by the hour?</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Customersupport