/** @format */

import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { eventEnquiry } from "../../../Repo/Api";
import axios from "axios";

const Queryform = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [comment, setComment] = useState(null);
  const [date, setDate] = useState(null);
  const [slot, setSlot] = useState(null);
  const [response, setResponse] = useState();
  const fetchData = async () => {
    try {
        const { data } = await axios.get(
          `https://pritam-backend.vercel.app/api/v1/admin/Bartending/getFormData/contactus`
      );
      console.log("datacontact",data)
        setResponse(data.data);
        
    } catch (error) {
      
    }
  }
  useEffect(() => {
  fetchData()
  }, [])
  console.log("contactusFormData", response);
  const payload = {
    firstName,
    lastName,
    email,
    phone,
    comment,
    date,
    slot,
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
  return (
    <div className="contact-query-form">
      <h5 className="head">{response?.contactUsformTitle}</h5>
      <p className="desc">{response?.contactUsformDesc}</p>

      <form onSubmit={handleSubmit}>
        <div className="two-inputs">
          <div>
            <label>
              <span>*</span> First Name
            </label>
            <input
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required
            />
          </div>
          <div>
            <label>
              <span>*</span> Last Name
            </label>
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              required
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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
        </div>
        <div className="two-inputs mt-4">
          <div style={{ width: "100%" }}>
            <label>
              <span>*</span>Mobile Phone Number
            </label>
            <input
              type="tel"
              minLength={10}
              maxLength={12}
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
            />
          </div>
        </div>
        <div className="two-inputs mt-4">
          <div style={{ width: "100%" }}>
            <label>Any Comments</label>
            <textarea
              placeholder="Type here........."
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <p>
            <span>*</span>Availibility to Call Back
          </p>
          <p className="desc">{response?.contactUsformAvaili}</p>
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
          {response?.contactUsformTerms}
          <span>{response?.contactUsformPrivacy}</span> .
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
  );
};

export default Queryform;
