import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import "./OurCases.css";
import caseImg from "../../img/Jofa Foundation/1.jpg";

function OurCases() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false }); // `once: false` = animate every time
  }, []);
  return (
    <div className="divide" data-aos="zoom-in">
      <div className="case-text">
        <span>Our Cases You can See</span>
        <h1>Our Journey With The Community</h1>
        <p>
          Since our inception, JOFA has taken meaningful steps to make a
          difference. From empowering individuals through skill trainings to
          supporting students with scholarships, our impact is growing steadily.
          These milestones are just the beginning of our journey to build a more
          empowered and connected society.
        </p>
        <div>
          <a href="/Causes">
            <button className="btn">Learn More</button>
          </a>
        </div>
      </div>

      <div className="about-img">
        <img src={caseImg} alt="" />
      </div>
    </div>
  );
}

export default OurCases;
