import about1 from "../../img/gallery/about1.png";
import "./HeroSection.css";
function HeroSection() {
  return (
    <div className="herosection animate-fade-in-up">
      <div className="hero">
        <span>
          We Are On A Mission To Help The Helpless We Empower Communities Toward
          Self-Determination And Dignity
        </span>
        <div>
          <a href="/about">
            <button className="btn">Learn More</button>
          </a>
        </div>
      </div>
      <div className="hero-img">
        <img src={about1} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
