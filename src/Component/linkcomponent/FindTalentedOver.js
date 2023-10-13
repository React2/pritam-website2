/** @format */

import React, { useState } from "react";
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
        height: "93%",
      }}
    >
      <div className="Desc">
        <div className="Close-Button">
          <p className="title"> {props?.pagedesc?.title}</p>
          <i className="fa-solid fa-x" onClick={() => props.onHide()}></i>
        </div>

        <p className="desc">{props?.pagedesc?.desc.substring(0,130)}</p>

        <div className="buttons last_buttons">
          <button
            onClick={() => {
              props.closeSidebar && props.closeSidebar();
              props.onHide();
              navigate("/staff");
            }}
          >
            FIND TALENT NOW{" "}
          </button>

          <button
            onClick={() => {
              props.closeSidebar && props.closeSidebar();
              props.onHide();
              navigate("/client-login");
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
