import "./Staffs.css";
import team1 from "../../img/gallery/team1.png";
import team2 from "../../img/gallery/team2.png";
import team3 from "../../img/gallery/team3.png";
import team4 from "../../img/gallery/team4.png";

const staffs = [
  {
    id: 1,
    image: team1,
    name: "Adebolu Bisi Fatunsin",
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
    name: "Akinleye Toluwani Akindeji",
    position: "Team Leader",
  },
];

function Staffs() {
  return (
    <>
      <div className="gaps">
        <div className="staff-txt">
          <span>HOW WE DO IT</span>
          <h1>Our Trusties</h1>
        </div>

        <div className="staff-img">
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
