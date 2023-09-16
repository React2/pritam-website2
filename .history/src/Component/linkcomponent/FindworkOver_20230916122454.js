/** @format */

import React from "react";
import {  useNavigate } from "react-router-dom";

const FindworkOver = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="Ham_Menu"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 200,
        background: "#f5a302",
        height: "95%",
      }}
    >
      <div className="close_button">
        <i className="fa-solid fa-x" onClick={() => props.onHide()}></i>
      </div>
      <div className="Desc">
      <div>
        
      </div>
        <p className="title"> FIND WORK </p>

        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>

        <div className="buttons">
          <button
            onClick={() => {
              navigate("/find-work");
              props.onHide();
            }}
          >
            {" "}
            FIND WORK{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindworkOver;
