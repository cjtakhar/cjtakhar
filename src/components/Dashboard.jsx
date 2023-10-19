import "../styles/dashboard.css";
import Image from "../images/cjtakhar.jpeg";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dash-header">
      <div className="title-container">
        <h1 className="title">CJ Takhar</h1>
        <h2 className="subtitle">Software Engineer</h2>
        <Link to="/about">
          <button className="about-btn">My Story</button>
        </Link>
      </div>
      <div className="img-container">
        <img className="cjtakhar-img" src={Image} alt="CJ Takhar"></img>
      </div>
      </div>
      <div className="social-container">
          <li className="social-icon">
            <Link className="icon" to="https://github.com/cjtakhar">
              <BsGithub />
            </Link>
          </li>
          <li className="social-icon">
            <Link className="icon" to="https://www.linkedin.com/in/cjtakhar/">
              <AiOutlineLinkedin />
            </Link>
          </li>
          <li className="social-icon">
            <Link className="icon" to="https://www.instagram.com/cj.takhar/">
              <FaInstagram />
            </Link>
          </li>
        </div>
    </div>

  );
};

export default Dashboard;
