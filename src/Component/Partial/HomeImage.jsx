/** @format */

import { Link } from "react-router-dom";

export default function HomeImage() {
  return (
    <div style={{ position: "relative" }}>
      <Link to="/sign-in">
        <button className="home_page_SingIn"> SIGN IN</button>
      </Link>
      <video className="homeImage" src="/video.mp4" autoPlay loop muted></video>
      <div className="imageInfo">
        <h1>
          Find & Hire Experts <br /> for any Job
        </h1>
        <p>
          Find Jobs, Employment & Carrer Opportunities. Some of the companies
          we&#39;ve helped recruit excellent applicants over the years
        </p>
      </div>
      <div className="socialLinks">
        <a href="https://instagram.com" target="_blank">
          <img src="/Image/26.png" alt="insta" />
        </a>
        <a href="https://facebook.com" target="_blank">
          <img src="/Image/27.png" alt="facebook" />
        </a>
        <a href="https://twitter.com" target="_blank">
          <img src="/Image/28.png" alt="twitter" />
        </a>
        <a href="https://linkedin.com" target="_blank">
          <img src="/Image/29.png" alt="linkedin" />
        </a>
        <a href="https://whatsapp.com" target="_blank">
          <img src="/Image/30.png" alt="whatsapp" />
        </a>
      </div>
    </div>
  );
}
