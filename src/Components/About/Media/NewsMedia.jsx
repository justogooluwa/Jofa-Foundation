import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import "./NewsMedia.css";
import sec1 from "../../../img/Jofa Foundation/8.jpg";
import sec2 from "../../../img/Jofa Foundation/9.jpg";
import sec3 from "../../../img/Jofa Foundation/10.jpg";
import sec4 from "../../../img/Jofa Foundation/11.jpg";
import sec5 from "../../../img/Jofa Foundation/13.jpg";
import sec6 from "../../../img/Jofa Foundation/14.jpg";
import sec7 from "../../../img/Jofa Foundation/15.jpg";
import sec8 from "../../../img/Jofa Foundation/17.jpg";
import sec9 from "../../../img/Jofa Foundation/18.jpg";
import sec10 from "../../../img/Jofa Foundation/21.jpg";
import sec11 from "../../../img/Jofa Foundation/22.jpg";
import sec12 from "../../../img/Jofa Foundation/24.jpg";
import sec13 from "../../../img/Jofa Foundation/50.jpg";
import sec14 from "../../../img/Jofa Foundation/51.jpg";
import sec15 from "../../../img/Jofa Foundation/55.jpg";
import sec16 from "../../../img/Jofa Foundation/56.jpg";
import sec17 from "../../../img/Jofa Foundation/40.jpg";
import sec18 from "../../../img/Jofa Foundation/41.jpg";
function NewsMedia() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // `once: false` = animate every time
  }, []);
  return (
    <>
      <div className="moment">
        <span>Highlights From Our Outreach</span>
        <p>
          Explore moments from our recent initiatives—where JOFA reached out
          with compassion and purpose. Through these events, we provided
          financial assistance, food supplies, groceries, and other essentials
          to support individuals and families in need. These snapshots reflect
          our drive to inspire change, uplift communities, and empower the next
          generation.
        </p>
      </div>

      <div className="img-section1">
        <img src={sec1} alt="" data-aos="zoom-in" />
        <img src={sec2} alt="" data-aos="flip-left" />
        <img src={sec3} alt="" data-aos="fade-up" />
        <img src={sec4} alt="" data-aos="flip-right" />
        <img src={sec5} alt="" data-aos="fade-in" />
        <img src={sec6} alt="" data-aos="zoom-out" />
      </div>

      <div className="img-section2">
        <img src={sec7} alt="" data-aos="zoom-in" />
        <img src={sec8} alt="" data-aos="flip-left" />
        <img src={sec9} alt="" data-aos="fade-up" />
        <img src={sec10} alt="" data-aos="flip-right" />
        <img src={sec11} alt="" data-aos="fade-in" />
        <img src={sec12} alt="" data-aos="zoom-out" />
      </div>

      <div className="img-section3">
        <img src={sec13} alt="" data-aos="zoom-in" />
        <img src={sec14} alt="" data-aos="flip-left" />
        <img src={sec15} alt="" data-aos="fade-up" />
        <img src={sec16} alt="" data-aos="flip-right" />
        <img src={sec17} alt="" data-aos="fade-in" />
        <img src={sec18} alt="" data-aos="zoom-out" />
      </div>
    </>
  );
}

export default NewsMedia;
