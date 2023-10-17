/** @format */

import React, { useEffect, useState } from "react";
import AboutSection from "../Component/Partial/Find Work Component/AboutSection";
import Banner from "../Component/Partial/Find Work Component/Banner";
import HeadingCont from "../Component/Partial/heading-cont";
import { eventEnquiry } from "../Repo/Api";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";

const FindWork = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [nearestRegion, setNearestRegion] = useState(null);
  const [interest, setInterest] = useState(null);
  const [date, setDate] = useState(null);
  const [slot, setSlot] = useState(null);
  const [response, setResponse] = useState();

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
 const fetchData = async () => {
   try {
     const { data } = await axios.get(
       `https://pritam-backend.vercel.app/api/v1/admin/Bartending/getFormData/findWork`
     );
     console.log("datacontact", data);
     setResponse(data.data);
      const youtubeVideoLink = data.data.youtubeLink;
      console.log("youtubeLink", youtubeVideoLink);
      const videoId = getVideoIdFromUrl(youtubeVideoLink);
      if (videoId) {
        console.log("Video ID:", videoId);
        const videourl = `https://www.youtube.com/embed/${videoId}?si=InTXwsXs3JbTwAMf&amp;start=3`;
       setResponse((prev) => {
         return { ...prev, updateyoutubelink: videourl };
       });
      } else {
        console.log("Invalid YouTube URL");
      }
      
   } catch (error) {}
  };
  
   function getVideoIdFromUrl(url) {
     const regExp = /v=([a-zA-Z0-9_-]+)/;
     const match = url.match(regExp);

     if (match && match[1]) {
       return match[1];
     }

     return null;
   }
 useEffect(() => {
   fetchData();
 }, []);
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

      <div
        className="Find_work_contact_form contsc_work_form_2"
        style={{ justifyContent: "space-evenly" }}
      >
        <div
          className="left_container"
          style={{ backgroundImage: `url(${response?.image})` }}
        >
          <div
            className="content"
            style={{ marginLeft: "10px", color: "white" }}
          ></div>
        </div>

        <div className="right_container">
          <div className="contact-query-form ">
            <h5 className="head">{response?.contactUsformTitle}</h5>
            <p className="desc">{response?.contactUsformDesc}</p>
            <form onSubmit={submitHandler}>
              <div className="two-inputs">
                <div>
                  <label>
                    <span>*</span> First Name
                  </label>
                  <input
                    type="text"
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <label>
                    <span>*</span> Last Name
                  </label>
                  <input
                    type="text"
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="two-inputs mt-4">
                <div style={{ width: "100%" }}>
                  <label>
                    <span>*</span> Email Address
                  </label>
                  <input
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="two-inputs mt-4">
                <div style={{ width: "100%" }}>
                  <label>
                    <span>*</span> Phone Number
                  </label>
                  <input
                    type="tel"
                    minLength={10}
                    maxLength={12}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="two-inputs mt-4">
                <div>
                  <label>
                    <span>*</span> Nearest Region
                  </label>
                  <input
                    type="text"
                    required
                    onChange={(e) => setNearestRegion(e.target.value)}
                  />
                </div>
                <div>
                  <label>
                    <span>*</span> I’m interested in
                  </label>{" "}
                  <input
                    type="text"
                    required
                    onChange={(e) => setInterest(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-4">
                <p>
                  <span>*</span>Availibility to Call Back
                </p>
                <p style={{ fontFamily: "Plus Jakarta Sans" }} className="desc">
                  {response?.contactUsformAvaili}
                </p>
              </div>

              <Calendar onChange={(e) => setDate(e)} />

              <div className="mt-4">
                <p>
                  <span>*</span> Select your Slot & Timings
                </p>
                <select
                  className="Full-width-select"
                  onChange={(e) => setSlot(e.target.value)}
                  value={slot}
                >
                  <option></option>
                  <option value="1 PM">1 PM</option>
                  <option value="2 PM">2 PM</option>
                  <option value="3 PM">3 PM</option>
                  <option value="4 PM">4 PM</option>
                  <option value="5 PM">5 PM</option>
                  <option value="6 PM">6 PM</option>
                  <option value="7 PM">7 PM</option>
                  <option value="8 PM">8 PM</option>
                  <option value="9 PM">9 PM</option>
                  <option value="10 PM">10 PM</option>
                  <option value="11 PM">11 PM</option>
                  <option value="12 PM">12 PM</option>
                </select>
              </div>

              <p className="Privacy">
                {response?.contactUsformTerms}
                <span> {response?.contactUsformPrivacy}</span> .
              </p>

              <button className="submit-btn" type="submit">
                SUBMIT
              </button>

              <p className="assistance">Need Assistance?</p>
              <button className="Whatsapp_Button">
                <i className="fa-brands fa-whatsapp"></i>{" "}
                {response?.contactUsformWhatApp}
              </button>

              <div className="contact_Detail">
                <p>Or Call us at </p>
                <i className="fa-solid fa-phone"></i>
                <p>{response?.contactUsformCall}</p>
              </div>
            </form>
          </div>
        </div>
      </div>

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
          src={response?.updateyoutubelink}
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
