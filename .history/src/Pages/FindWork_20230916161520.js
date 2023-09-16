/** @format */

import React , {useEffect, useState} from "react";
import AboutSection from "../Component/Partial/Find Work Component/AboutSection";
import Banner from "../Component/Partial/Find Work Component/Banner";
import ContactUsForm from "../Component/Partial/Find Work Component/contact-us-form";
import HeadingCont from "../Component/Partial/heading-cont";

const FindWork = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [nearestRegion, setNearestRegion] = useState(null);
  const [interest, setInterest] = useState(null);
  const [date, setDate] = useState(null);
  const [slot, setSlot] = useState(null);

  const payload = {
    firstName,
    lastName,
    email,
    phone,
    nearestRegion,
    interest,
    date,
    slot,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    eventEnquiry(payload);
  };


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner />
      <HeadingCont
        title={"Contact Us"}
        content={"Use the form below to get in touch."}
      />
      <ContactUsForm />
      <HeadingCont
        title={"Why Join us?"}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur id ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum bibendum quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam nec lectus ornare, id auctor nulla venenatis. Duis sit amet rhoncus lacus. Proin nisi dolor, posuere mattis viverra vel, dignissim et augue. Suspendisse convallis nec neque et tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ut lectus pellentesque purus fermentum gravida. Integer accumsan feugiat diam, quis elementum arcu ultricies non. In odio ex, ultricies at urna eu, iaculis sagittis risus. Nulla eget dignissim ipsum. Curabitur eget dignissim urna. Sed at purus quis dolor lacinia consectetur"
        }
      />
      <AboutSection />

      <div style={{ width: "90%", margin: "40px auto" }}>
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
      <div className="pt-5"></div>
    </>
  );
};

export default FindWork;
