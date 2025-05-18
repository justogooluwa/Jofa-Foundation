import { useEffect } from "react";
import "./AboutSection.css";
import aboutImg from "../../img/gallery/case3.png";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false }); // `once: false` = animate every time
  }, []);
  return (
    <div className="divider">
      <div className="about-img">
        <img src={aboutImg} alt="" data-aos="fade-right" />
      </div>

      <div className="about-text" data-aos="fade-left">
        <span>About Jofa Foundation</span>
        <h1>We Are On A Mission To Help The Helpless</h1>
        <p>
          At Jofa Foundation, we counsel, mentor and defend young teenagers
          going through abuse and depression. With our mentorship program we
          re-orientate them on core values on becoming a better person in life
        </p>
        <p>
          At JOFA, we believe that every individual deserves a chance to thrive.
          Our mission is to uplift and empower the underprivileged by equipping
          them with the tools they need—through education, skill development,
          and innovative thinking. We’re not just meeting needs; we’re building
          people who can create lasting change in their communities and beyond.
        </p>

        <ul>
          <li>
            We Are Funded Through Lawful And Credible Individuals And Bodies.
          </li>
          <li>
            JOFA is supervised and executed by our dedicated team, with daily
            operations managed efficiently.
          </li>
          <li>
            We employ both short-term and long-term planning to ensure sustained
            growth and adaptability.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutSection;
