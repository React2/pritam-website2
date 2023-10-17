/** @format */

import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { getBannerType } from "../../../Repo/Api";
import axios from "axios";

const Banner = () => {
  const [data, setData] = useState({});
    const [response, setResponse] = useState();
 const fetchData = async () => {
   try {
     const { data } = await axios.get(
       `https://pritam-backend.vercel.app/api/v1/admin/Bartending/getFormData/findWork`
     );
     console.log("datacontact", data);
     setResponse(data.data);
   } catch (error) {}
 };
 useEffect(() => {
   fetchData();
 }, []);
  useEffect(() => {
    getBannerType("Find Work", setData);
  }, []);
  console.log("data", data?.bannerImage);
  return (
    <div className="Event_Booking-Banner Find-Work-Banner">
      <div className="upper">
        <h5> {data?.bannerTitle} </h5>
        <p style={{ fontFamily: "Plus Jakarta Sans" }}>
          {data?.bannerDescription}
        </p>
      </div>
      <div className="down">
        <div className="main">
          <div
            className="content"
            style={{ backgroundImage: `url(${data?.bannerImage})` }}
          >
            <p className="desc">{response?.title}</p>
            <h5>{response?.desc}</h5>
            <Link to="/permanent-job">
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
