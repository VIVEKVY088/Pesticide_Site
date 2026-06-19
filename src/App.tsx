import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ServiceSectors from "./components/ServiceSectors";
import Pricing from "./components/Pricing";
import WhyChooseUs from "./components/WhyChooseUs";
import WorkProcess from "./components/WorkProcess";
import Testimonials from "./components/Testimonials";
import Brands from "./components/Brands";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import SEO from "./components/SEO";

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ServiceSectors />
        <Pricing />
        <WhyChooseUs />
        <WorkProcess />
        <Testimonials />
        <Brands />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </HelmetProvider>
  );
}

export default App;