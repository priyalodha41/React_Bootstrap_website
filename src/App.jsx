import Banner from "./Components/Banner"
import Benefits from "./Components/Benefits"
import Company from "./Components/Company"
import Customersupport from "./Components/Customersupport"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import ScrollToTopButton from "./Components/ScrollToTopButton"
import Services from "./Components/Services"
import Testimonials from "./Components/Testimonials"

const App = () => {
  return (
    <div>
      <div className="bg-color">
          <Header />
          <Banner />
      </div>
      <Company />
      <Benefits />
      <Services />
      <Testimonials />
      <Customersupport />
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default App