import "./App.css";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import PricingCard from "./components/Pricing/PricingCard";
import Testimonials from "./components/Testimonials/Testimonials";
import Video from "./components/Video/Video";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection/>
        <Video/>
        <Testimonials/>
        <PricingCard/>
        <Faq/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
