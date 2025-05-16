import "./AboutSection.css";
import aboutImg from "../../img/gallery/case3.png";
import { FaBeer } from "react-icons/fa";
function AboutSection() {
  return (
    <div className="divider">
      <div className="about-img">
        <img src={aboutImg} alt="" />
      </div>

      <div className="about-text">
        <span>About Jofa Foundation</span>
        <h1>We Are On A Mission To Help The Helpless</h1>
        <p>
          In Jofa Foundation, we counsel, mentor and defend young teenagers
          going through abuseand depression. With our mentorship program we
          re-orientate them on core values on becoming a better person in life
        </p>
        <p>
          Jofa Foundation, is an NGO reaching out to the less priviledge and the
          teens on issues bordering on Sex, Cultism and Abuse
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
