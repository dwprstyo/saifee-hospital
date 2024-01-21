import React from "react";
import Phone from "../../assets/footer/Group.png";
import Mail from "../../assets/footer/Group2.png";
import Clock from "../../assets/footer/Group3.png";

const FooterList = () => {
  return (
    <div
      className="bg-main-color"
      style={{ width: "100%", height: "55.4861vw", paddingTop: "4.1667vw"}}
    >
      <div
        className="d-flex flex-row justify-content-center"
        style={{ gap: "2vw", marginBottom: '3.6806vw' }}
      >
        <div
          className="contact-list-wrapper d-flex flex-row justify-content-center align-items-center"
          style={{ gap: "1vw" }}
        >
          <div
            className="bg-alternate-7 d-flex justify-content-center align-items-center"
            style={{ width: "3.4722vw", height: "3.4722vw" }}
          >
            <img
              src={Phone}
              alt="phone"
              style={{ width: "2.0833vw", height: "2.0833vw   " }}
            />
          </div>
          <div className="d-flex flex-column">
            <span className="contact-list-content">+91-022-67570111</span>
            <span className="contact-list-title">Call us Now</span>
          </div>
        </div>
        <div
          className="contact-list-wrapper d-flex flex-row justify-content-center align-items-center"
          style={{ gap: "1vw" }}
        >
          <div
            className="bg-alternate-7 d-flex justify-content-center align-items-center"
            style={{ width: "3.4722vw", height: "3.4722vw" }}
          >
            <img
              src={Clock}
              alt="phone"
              style={{ width: "2.0833vw", height: "2.0833vw   " }}
            />
          </div>
          <div className="d-flex flex-column">
            <span className="contact-list-content">+91-022-67570111</span>
            <span className="contact-list-title">Call us Now</span>
          </div>
        </div>
        <div
          className="contact-list-wrapper d-flex flex-row justify-content-center align-items-center"
          style={{ gap: "1vw" }}
        >
          <div
            className="bg-alternate-7 d-flex justify-content-center align-items-center"
            style={{ width: "3.4722vw", height: "3.4722vw" }}
          >
            <img
              src={Mail}
              alt="phone"
              style={{ width: "2.0833vw", height: "2.0833vw   " }}
            />
          </div>
          <div className="d-flex flex-column">
            <span className="contact-list-content">+91-022-67570111</span>
            <span className="contact-list-title">Call us Now</span>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-around">
        <div className="d-flex flex-column" style={{ width: "9.0972vw" }}>
          <span className="footer-list-title">Patient Care</span>
          <span className="footer-list-content">
            Find A Doctor Medical Services Patient Testimonials Value Added
            Services Pay Online Saifee Surgery
          </span>
        </div>
        <div className="d-flex flex-column" style={{ width: "11.8056vw" }}>
          <span className="footer-list-title">Centres Of Excellence</span>
          <span className="footer-list-content">
            Orthopaedics Nephrology & Urology Bariatric Surgery Cardiology
            Pulmonology Gastroenterology Spine Surgery Oncology Neurology &
            Neurosurgery Organ Transplantation Robotic Surgery Preventive Health
            Check Up Emergency Care Ear,Nose And Throat Vascular Surgery
            Pediatrics Dermatology Obstetrics And Gynaecology
          </span>
        </div>
        <div className="d-flex flex-column" style={{ width: "15.6944vw" }}>
          <span className="footer-list-title">Medical Procedures</span>
          <span className="footer-list-content">
            Proton Therapy For Cancer Treatment Cosmetic And Plastic Surgery
            Bone Marrow Transplant Oral & Maxillofacial Surgery Hand
            MicroSurgery G Scan – Open Standing MRI Scan Hip Arthroscopy
            Minimally Invasive Cardiac Surgery Knee Replacement Surgery Cochlear
            Implant Surgery
          </span>
        </div>
        <div className="d-flex flex-column" style={{ width: "9.0972vw" }}>
          <span className="footer-list-title">Corporate</span>
          <span className="footer-list-content">
            Company Overview Our Doctors Achieve The Saifee Story Management
            Investor Relations Investor Presentation Initiatives Awards &
            Accolades Careers
          </span>
        </div>
        <div className="d-flex flex-column" style={{ width: "9.0972vw" }}>
          <span className="footer-list-title">Hospitals</span>
          <span className="footer-list-content">
            Contact Us Courses Health Packages News blogs
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterList;
