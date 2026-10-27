// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
import "./AboutUs.css";
import mahad from "../pictures/mahad.png";
import Sabrin from "../pictures/Sabrin.png";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <section className="about-page">
      <div className="about-container">
        <div className="about-header">
          <span className="about-badge">ABOUT US</span>

          <h1>
            Meet the People <span>Behind Local Heroes</span>
          </h1>

          <p>
            Local Heroes is a community where we discover, celebrate, and share
            the stories of amazing people making a difference in their
            communities.
          </p>
        </div>

        <div className="people">
          <div className="person-card">
            <div className="person-image">
              <img src={Sabrin} alt="Sabrin" />
            </div>

            <h3>Person One</h3>
            <span>Founder</span>
            <a
                href="https://github.com/Sabrin-Omar5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Click Here</p>
              </a>

      

            <p>{/* ------------------------------------- */}</p>
          </div>

          <div className="person-card">
            <div className="person-image">
              <img src={mahad} alt="mahad" />
              
            </div>

            <h3>Person Two</h3>
            <span>Community Manager</span>
            <a
                href="https://github.com/MahadH5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Click Here</p>
              </a>

            <p>{/* ------------------------------------ */}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
