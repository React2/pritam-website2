/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";

const TwoSection = ({ title }) => {
  const [data, setData] = useState();
  const Baseurl = "https://pritam-backend.vercel.app/";

  const fetchData = async() => { 
         const data  = await axios.get(`${Baseurl}api/v1/static/getAboutUs`);
         setData(data.data.data);
  }
  useEffect(() => {
    fetchData()
  },[])
console.log("dataoftwoline",data)

  return (
    <div className="About_Us-two_Sec">
      <div className="left">
      <img src={data?.image} alt="" />
      </div>
  <div className="right">
        {data?.desc && data?.desc?.map((item, i) => {
             if (i > 2) {
               return (
                 <>
                   <h5 style={{ textAlign: "right" }}>{item?.title}</h5>
                   <p style={{ textAlign: "justify" }}>{item?.desc}</p>
                 </>
               );
             }
        }
       
         
        )}
  </div>
    </div>
  );
};

export default TwoSection;
