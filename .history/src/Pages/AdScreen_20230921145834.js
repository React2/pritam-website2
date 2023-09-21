/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AdScreen = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        `https://pritam-backend.vercel.app/api/v1/admin/getAdsById/${id}`
      );
      setData(data.data);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <>
      <div className="Banner AboutUs addd">
        <div className="content" style={{ width: "80%", margin: "auto" }}>
          <h2
            className="permanent-job-heading"
            style={{ lineHeight: "normal" }}
          >
            {data?.title}
          </h2>

          <p>
            {data?.description}
          </p>
        </div>
      </div>

      <h1 className="bold-heading">OUR NEW APP</h1>

      <div className="Staff_Desc">
      {data?.desc?.map((i ,index) => (
        <p key={index}> {i} </p>
      ))}
      </div>

      <div className="About_Us-two_Sec">
        <div className="left">
          <img src="./Image/Group 1000000932.png" alt="" />
        </div>
        <div className="right">
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
            eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis
            pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur
            id ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum
            bibendum quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam
            nec lectus ornare, id auctor nulla venenatis. Duis sit amet rhoncus.{" "}
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
            eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis
            pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur
            id ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum
            bibendum quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam
            nec lectus ornare, id auctor nulla venenatis. Duis sit amet rhoncus.
          </p>
        </div>
      </div>

      <div style={{ width: "90%", margin: "40px auto" }}>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/JxZ9iqWVlSE?si=InTXwsXs3JbTwAMf&amp;start=3"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="mb-5"></div>
    </>
  );
};

export default AdScreen;
