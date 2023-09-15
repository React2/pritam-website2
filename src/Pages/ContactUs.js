/** @format */

import React, { useEffect } from "react";
import Banner from "../Component/Partial/Contact Us Components/Banner";
import FAQ from "../Component/Partial/Contact Us Components/FAQ";
import OverflowingContent from "../Component/Partial/Contact Us Components/Overflowing-content";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner />
      <OverflowingContent />
      <FAQ />
      <div className="pt-5"></div>
    </>
  );
};

export default ContactUs;
