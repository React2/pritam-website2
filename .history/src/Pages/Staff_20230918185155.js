/** @format */

import React, { useEffect } from "react";
import Newsletter from "../Component/Partial/About Us Component/Newsletter";
import HeadingCont from "../Component/Partial/heading-cont";
import Banner from "../Component/Partial/StaffComponent/Banner";
import TrainingCourse from "../Component/Partial/StaffComponent/TrainingCourse";

const Staff = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner />
      <TrainingCourse />
      <HeadingCont title={"Consultancy"} content={""} />
     

      <div className="Staff_Desc">
        <h5>Lorem Ipsum</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
          eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis
          pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur id
          ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum bibendum
          quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam nec lectus
          ornare, id auctor nulla venenatis. Duis sit amet rhoncus lacus. Proin
          nisi dolor, posuere mattis viverra vel, dignissim et augue.
          Suspendisse convallis nec neque et tincidunt. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;{" "}
        </p>
      </div>

      <div className="Staff_Desc">
        <h5>Lorem Ipsum</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
          eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis
          pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur id
          ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum bibendum
          quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam nec lectus
          ornare, id auctor nulla venenatis. Duis sit amet rhoncus lacus. Proin
          nisi dolor, posuere mattis viverra vel, dignissim et augue.
          Suspendisse convallis nec neque et tincidunt. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;{" "}
        </p>
      </div>

      <div style={{ width: "90%", margin: "80px auto" }}>
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

      <Newsletter />
      <div style={{ paddingTop: "5rem" }}></div>
    </>
  );
};

export default Staff;
