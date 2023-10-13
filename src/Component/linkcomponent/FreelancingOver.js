/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        height: "90%",
      }}
    >
      <div className="Desc">
        <div className="Close-Button">
          <p className="title"> {props?.pagedesc?.title} </p>
          <i className="fa-solid fa-x" onClick={() => props.onHide()}></i>
        </div>
        <p className="desc">{props?.pagedesc?.desc}</p>

        <div className="buttons last_buttons">
          <button
            onClick={() => {
              props.closeSidebar && props.closeSidebar();
              props.onHide();
              navigate("/freelance");
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
