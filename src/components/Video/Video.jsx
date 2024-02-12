import "./video.css";
import vidimg from "../../assets/video-preview.png"
const Video = () => {
    return (
        <>
            <section className="video-container">
                <div className="container-sm">
                        <h2 className="video-text">See how it works and get started
                            in less than 2 minutes</h2>
                    <div className="video-content">
                    
                    <img className="vid-img" src={vidimg} alt="" />
                    <button className="vid-btn">Get Started</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Video