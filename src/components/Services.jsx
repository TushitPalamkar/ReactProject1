import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"
export default function Services(){
    return(
        <>
        <div className="services">Services</div>
        <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false}>
        <div>
            <img src={img1}alt="Image1" />
            <p className="legend">Full Stack</p>
            
        </div>
        <div>
            <img src={img2} alt="Image2" />
            <p className="legend">Technical Support</p> 
        </div>
        </Carousel>
        </>
    );
}