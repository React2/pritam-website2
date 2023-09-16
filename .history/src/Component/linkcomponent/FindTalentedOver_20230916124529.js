/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const FindTalentedOver = (props) => {
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
        <div className="Close-Button">
          <p className="title"> FIND TALENT </p>
          <i className="fa-solid fa-x" onClick={() => props.onHide()}></i>
        </div>

        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>

        <div className="buttons last_buttons">
          <button
            onClick={() => {
              navigate("/staff");
              props.onHide();
            }}
          >
            FIND TALENT NOW{" "}
          </button>

          <button
            onClick={() => {
              navigate("/client-login");
              props.onHide();
            }}
          >
            REGISTER NOW
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default FindTalentedOver;
