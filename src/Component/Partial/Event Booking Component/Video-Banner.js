import React, { useEffect, useState } from "react";
import { getBannerType } from "../../../Repo/Api";

const VideoBanner = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    getBannerType("Event Booking", setData);
  }, []);

  console.log(data, "inner");

  return (
    data?.bannerImage && (
      <div className="Event_Booking-Video">
        <img src={data?.bannerImage} alt="this is" />
      </div>
    )
  );
};

export default VideoBanner;
