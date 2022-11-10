import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Screenshot from "../images/screenshot.png.png";
function CarouselCardSlider() {
  return (
    <div>
      <Carousel>
        <div style={{ width: "30%", height: "30%" }}>
          <img src={Screenshot} alt="screenshot" />
          <p className="legend">img 1</p>
        </div>
        <div style={{ width: "30%", height: "30%" }}>
          <img src={Screenshot} alt="screenshot" />
          <p className="legend">img 2</p>
        </div>
        <div style={{ width: "30%", height: "30%" }}>
          <img src={Screenshot} alt="screenshot" />
          <p className="legend">img 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselCardSlider;
