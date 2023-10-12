/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FindworkOver = (props) => {
  const navigate = useNavigate();
  const [pageDesc, setPagedesc] = useState({});
  props.map((item) => {
    if (item.type == "FIND WORK") {
      setPagedesc(item)
    }
  })
  return (
    <div
      className="Ham_Menu"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: "#f5a302",
        height: "90%",
      }}
    >
      <div className="Desc">
        <div className="Close-Button">
          <p className="title"> {pageDesc?.title} </p>
          <i className="fa-solid fa-x" onClick={() => props.onHide()}></i>
        </div>
        <p className="desc">
         {pageDesc?.desc}
        </p>

        <div className="buttons last_buttons">
          <button
            onClick={() => {
              props.closeSidebar && props.closeSidebar();
              props.onHide();
              navigate("/find-work");
            }}
          >
            {" "}
            FIND WORK{" "}
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

export default FindworkOver;
