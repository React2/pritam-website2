/** @format */

import React, { useEffect } from "react";
import FAQ from "../Component/Partial/Contact Us Components/FAQ";
import OverflowingContent from "../Component/Partial/Contact Us Components/Overflowing-content";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  

  return (
    <>

<div className="Contact-Us_Banner">
      <div className="content">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
          eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis
          pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur id
          ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum bibendum
          quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam nec lectus
          ornare, id auctor nulla venenatis. Duis sit amet rhoncus lacus. Proin
          nisi dolor, posuere mattis viverra vel, dignissim et augue.
          Suspendisse convallis nec neque et tincidunt. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis
          ut lectus pellentesque purus fermentum gravida. Integer accumsan
          feugiat diam, quis elementum arcu ultricies non. In odio ex, ultricies
          at urna eu, iaculis sagittis risus. Nulla eget dignissim ipsum.
          Curabitur eget dignissim urna. Sed at purus quis dolor lacinia
          consectetur
        </p>
      </div>
    </div>

      <OverflowingContent />
      <FAQ />
      <div className="pt-5"></div>
    </>
  );
};

export default ContactUs;
