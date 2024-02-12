import "./herosection.css";
import hero from "../../assets/hero.png"

const HeroSection = () => {
  return (
    <>
    <section className="hero">
        <div className="container">
            <div className="hero-content">
                <h1 className="hero-heading">
                    A powerful solution to grow your startup . Fast!
                </h1>
                <p className="hero-text">
                Organize, collaborate, and track progress seamlessly with our
            one-stop-shop startup growth tool.
                </p>
                <div className="hero-btns">
                 <button className="hero-btn-1">Get Started</button>
                 <button className="hero-btn-2">Book a Demo</button>
                </div>
                <img src={hero} alt="" className="hero-img"/>                
            </div>
        </div>
            
           
    </section>
    </>
  )
}

export default HeroSection