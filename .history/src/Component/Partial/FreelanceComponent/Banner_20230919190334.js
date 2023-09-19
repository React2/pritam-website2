/** @format */

import React, { useState  , useEffect } from "react";
import { StaffLoginModal } from "../../Modals/staff-login-modal";
import { Link } from "react-router-dom";
import { getBannerType } from "../../../Repo/Api";

const Banner = () => {
  const [modalShow, setModalShow] = useState(false);
  const [ data ,setData ] = useState({})

  useEffect(() => {
    getBannerType("Freelancing" , setData)
  },[])

  return (
    <>
      <StaffLoginModal show={modalShow} onHide={() => setModalShow(false)} />

      <div className="BannerFree AboutUs">
        <div className="content2">
          <h2 style={{ fontFamily: "Plus Jakarta Sans" }}>Freelancing</h2>
          <h4>
            {data?.bannerTitle}
          </h4>
          <p style={{ fontFamily: "Plus Jakarta Sans" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
            eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis
            pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur
            id ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum
            bibendum quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam
            nec lectus ornare, id auctor nulla venenatis. Duis sit amet rhoncus
            lacus. Proin nisi dolor, posuere mattis viverra vel, dignissim et
            augue. Suspendisse convallis nec neque et tincidunt. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Duis ut lectus pellentesque purus fermentum gravida. Integer
            accumsan feugiat diam, quis elementum arcu ultricies non. In odio
            ex, ultricies at urna eu, iaculis sagittis risus. Nulla eget
            dignissim ipsum. Curabitur eget dignissim urna. Sed at purus quis
            dolor lacinia consectetur
          </p>
          <button onClick={() => setModalShow(true)}> SIGN UP NOW</button>
          <p style={{ fontFamily: "Plus Jakarta Sans" }}>
            <small>
              <Link
                to="/staff-logIn"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Already have Account? <u>Sign In</u>
              </Link>
            </small>
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
