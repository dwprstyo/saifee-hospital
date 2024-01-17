import React from "react";
import ContactImg from "../../../assets/home/conctact-image.png";

const Contact = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="d-flex  flex-row"
        style={{ width: "81.9444vw", height: "31.2500vw" }}
      >
        <div
          className="overflow-hidden"
          style={{ width: "48.7500vw", height: "31.2500vw" }}
        >
          <img src={ContactImg} alt="contact" style={{width: "48.7500vw", height: "31.2500vw", objectFit:'cover'}} />
        </div>
        <div
          className="bg-main-color d-flex flex-col align-items-center"
          style={{ width: "33.1944vw", height: "31.2500vw", paddingLeft: '4vw', objectFit:"none" }}
        >
          <div>
            <div className="d-flex flex-column">
              <span className="excelent-header2">Contact</span>
              <span className="excelent-header2" style={{ color: "white" }}>
                Information
              </span>
              <span className="excelent-content" style={{ color: "white", textTransform: 'none', textAlign: 'left' }}>
                Address: 15/17,Maharshi Karve Marg, Mumbai 400004, Maharashtra,
                India. <br />
                Phone: +91-022-67570111 <br />
                Fax : +91-022-67570777 <br />
                Email : write@saifeehospital.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
