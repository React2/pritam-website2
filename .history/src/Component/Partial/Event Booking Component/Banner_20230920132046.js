/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBannerType, get_event } from "../../../Repo/Api";

const Banner = () => {
  const [event, setEvent] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    getBannerType("Event Booking", setData);
  }, []);



  useEffect(() => {
    window.scrollTo(0, 0);
    get_event(setEvent);
  }, []);

  return (
    <div className="Event_Booking-Banner Event-Booking-Banner">
      <div className="upper" style={{ paddingTop: "20px" }}>
        <h5> {data?.bannerTitle} </h5>
        <p style={{ fontFamily: "Plus Jakarta Sans" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
            eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis
            pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur id
            ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum bibendum
            quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam nec lectus
            ornare, id auctor nulla venenatis
        </p>
      </div>
      <div className="down">
        <div className="main">
          {event?.map((ele, i) => (
            <div className="content" key={i}>
              <img className="eventImg" src={ele?.image} alt="" />
              <h5>{ele?.title}</h5>
              <Link to={`/book-an-event/${ele?._id}`}>
                <button>
                  <p>CLICK HERE</p> <i className="fa-solid fa-caret-right"></i>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
