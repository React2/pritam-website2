/** @format */

import React , { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { getBannerType } from "../../../Repo/Api";

const Banner = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getBannerType("Find Talented Staff	", setData);
  }, []);


  return (
    <div className="Event_Booking-Banner">
      <div className="upper" style={{ paddingTop: "20px" }}>
        <h5> {data?.bannerTitle} </h5>
        <p style={{ fontFamily: "Plus Jakarta Sans" }}>
          Find Jobs, Employment & Career Opportunities. Some of the companies we
          have helped recruit excellent applicants over the years.
        </p>
      </div>
      <div className="down">
        <div className="main">
          <div className="content">
            <img src="./Image/40.png" alt="" />
            <h5>Casual Staff</h5>
            <Link to="/casual-staff">
              <button>
                <p>CLICK HERE</p> <i className="fa-solid fa-caret-right"></i>
              </button>
            </Link>
          </div>
          <div className="content">
            <img src="./Image/41.png" alt="" />
            <h5>Permanent Staff</h5>
            <Link to="/permanent-staff">
              <button>
                <p>CLICK HERE</p> <i className="fa-solid fa-caret-right"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
