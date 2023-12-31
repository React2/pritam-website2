/** @format */

import React, { useEffect, useState } from "react";
import Banner from "../Component/Partial/FreelanceComponent/Banner";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import FAQ from "../Component/Partial/Contact Us Components/FAQ";
import { eventEnquiry, get_freelance } from "../Repo/Api";
import axios from "axios";

const Freelance = () => {
  const [freelance, setFreelance] = useState([]);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [comment, setComment] = useState(null);
  const [date, setDate] = useState(null);
  const [slot, setSlot] = useState(null);
  const [formdata, setData] = useState([]);
const Baseurl = "https://pritam-backend.vercel.app/";
  const payload = {
    firstName,
    lastName,
    email,
    phone,
    comment,
    date,
    slot,
  };
   const getFreeLancingFormData = async () => {
     try {
       const { data } = await axios.get(
         `${Baseurl}api/v1/admin/Bartending/getFormfreelancing`
       );
       setData(data.data);
       console.log(data.data);
   
     } catch (e) {
       console.log(e);
     }
   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await eventEnquiry(payload);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setComment("");
    setDate("");
    setSlot("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    get_freelance(setFreelance);
    getFreeLancingFormData();
  }, []);

  return (
    <>
      <div className="Freelance">
        <Banner />
      </div>

      <div className="Find_work_contact_form">
        <div className="left_container" style={{ backgroundImage: "url()" }}>
          <div className="Freelance_Perks_Section">
            {freelance?.map((i, index) => (
              <div className="Main" key={index}>
                <p className="title"> {i?.title} </p>
                <img src={i?.image} alt="" />
                <p className="desc"> {i?.desc} </p>
              </div>
            ))}
          </div>
        </div>

        <div className="right_container">
          {formdata && (
            <div className="contact-query-form">
              <h5 className="head">{formdata?.contactUsformTitle} </h5>
              <p style={{ fontFamily: "Plus Jakarta Sans" }} className="desc">
                {formdata?.contactUsformDesc}
              </p>
              <form onSubmit={handleSubmit}>
                <div className="two-inputs">
                  <div>
                    <label>
                      <span>*</span> First Name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label>
                      <span>*</span> Last Name
                    </label>
                    <input
                      type="text"
                      value={lastName}
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
                      value={email}
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
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="two-inputs mt-4">
                  <div style={{ width: "100%" }}>
                    <label>Any Comments</label>
                    <textarea
                      placeholder="Type here........."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <p>
                    <span>*</span>Availibility to Call Back
                  </p>
                  {formdata && (
                    <p className="desc">{formdata?.contactUsformAvaili}</p>
                  )}
                </div>

                <Calendar onChange={(e) => setDate(e)} value={date} />

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
                  {formdata && (
                    <p className="desc">{formdata?.contactUsformAvaili}</p>
                  )}
                </p>

                <button className="submit-btn" type="submit">
                  SUBMIT
                </button>

                <p className="assistance">Need Assistance?</p>
                {formdata && (
                  <button className="Whatsapp_Button">
                    <i className="fa-brands fa-whatsapp"></i>{" "}
                    {formdata?.contactUsformWhatApp}
                  </button>
                )}

                <div className="contact_Detail">
                  <p>Or Call us at </p>
                  <i className="fa-solid fa-phone"></i>
                  <p> {formdata?.contactUsformCall}</p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      <div style={{ height: "100px" }}></div>
      <div className="Community_Page" style={{ marginBottom: "60px" }}>
        <FAQ />
      </div>
    </>
  );
};

export default Freelance;
