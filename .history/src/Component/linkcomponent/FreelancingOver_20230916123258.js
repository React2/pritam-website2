/** @format */

import React from "react";
import {  useNavigate } from "react-router-dom";

const FreelancingOver = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="Ham_Menu over_One"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 200,
        background: "#f5a302",
        height: "95%",
      }}
    >
  

      <div className="Desc">
        <p className="title">Freelancing</p>

        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>

        <div className="buttons">
            <button
              onClick={() => {
                navigate("/freelance");
                props.onHide();
              }}
            >
              JOIN NOW{" "}
            </button>
        </div>
      </div>
    </div>
  );
};

export default FreelancingOver;
