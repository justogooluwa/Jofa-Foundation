import "./Staffs.css";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import { useEffect } from "react";
import team1 from "../../img/gallery/staff1.jpg";
import team2 from "../../img/gallery/team6.jpg";
import team3 from "../../img/gallery/staff3.jpg";
import team4 from "../../img/gallery/staff4.jpg";

const staffs = [
  {
    id: 1,
    image: team1,
    name: "Adebolu Femi",
    position: "Chief Executive Officer",
  },
  {
    id: 2,
    image: team2,
    name: "Akinyemi Akinleye Isaac",
    position: "Director Of Research",
  },
  {
    id: 3,
    image: team3,
    name: "Akinleye Ogooluwa Joshua",
    position: "Volunteer Jofa Foundation",
  },
  {
    id: 4,
    image: team4,
    name: "Fatunsin Adebisi Gideon",
    position: "Team Leader",
  },
];

function Staffs() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false }); // `once: false` = animate every time
  }, []);
  return (
    <>
      <div className="gaps">
        <div className="staff-txt">
          <span>HOW WE DO IT</span>
          <h1>Our Trustees</h1>
        </div>

        <div className="staff-img" data-aos="flip-left">
          {staffs.map((staff) => (
            <div className="staff-card" key={staff.id}>
              <img src={staff.image} alt={staff.name} />
              <h3>{staff.name}</h3>
              <p>{staff.position}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Staffs;
