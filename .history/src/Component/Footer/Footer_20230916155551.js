/** @format */

import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { useEffect, useState } from "react";
import { get_contact_detail } from "../../Repo/Api";

export default function Footer() {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    get_contact_detail(setDetail);
  }, []);

  return (
    <footer className="app-footer">
      <div className="app-footer-content">
        <div className="footer-container">
          <div className="footer-logo-container">
            <img src="/Image/9.png" alt="" />
            <p>{detail?.[0]?.description?.slice(0, 150)}</p>
          </div>

          <div className="footer-contact-info-div">
            <p>
              <BsTelephoneFill /> {detail?.[0]?.mobileNumber}
            </p>
            <p>
              <IoMdMail /> {detail?.[0]?.email}
            </p>
            <p>
              <MdLocationOn /> {detail?.[0]?.address}
            </p>
          </div>

          <div className="footer-links-div">
            <p>Home</p>
            <Link to="/">Home </Link>
            <Link to="/event-booking">Event Booking</Link>
            <Link to="/bartending">Courses</Link>
          </div>
          <div className="footer-links-div">
            <p>About</p>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="">FAQ&#39;s</Link>
            <Link to="">Event FAQ&#39;s</Link>
          </div>
          <div className="footer-links-div">
            <p>Follow Us</p>
            <div className="footer-social-links-div">
              <FaFacebookF />
              <BsTwitter />
              <BsInstagram />
            </div>
          </div>
        </div>
        <p className="footer-copyright">
          Copyright © 2023, Company name, All Right Reserved
        </p>
      </div>
    </footer>
  );
}
