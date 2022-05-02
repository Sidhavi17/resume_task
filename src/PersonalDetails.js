import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { ImPhone } from 'react-icons/im';


// import { AiOutlineMail } from "react-icons/ai";
// import pic from "./pic.jpeg";

const PersonalDetails = ({ phoneno, address, emailid, linkedinid }) => {
  return (
    <>
      <div className="personal-details">
        <div className="para-margin">
          <ImPhone className="icon"/><p className="blue-para align-right">{phoneno}</p>
        </div>
        <div className="para-margin">
          <MdLocationOn className="icon"/><p className="blue-para align-right">{address}</p>
        </div>
        <div className="para-margin">
          <FaEnvelope className="icon"/>
          <p className="blue-para align-right">{emailid}</p>
        </div>
        <div className="para-margin">
          <FaLinkedin className="icon"/><p className="blue-para align-right">{linkedinid}</p>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
