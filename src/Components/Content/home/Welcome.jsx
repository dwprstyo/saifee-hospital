import React from "react";
import Calendar from "../../../assets/header/calendar.png";
import Doctor from "../../../assets/home/doctorandwrap.png";
import Vector from "../../../assets/home/vector-welcome.png";
import Polygon from "../../../assets/home/polygon.png";

const Welcome = () => {
  return (
    <div
      className="bg-alternate-1 d-flex align-items-center"
      style={{
        width: "100%",
        height: "50.4167vw",
        paddingLeft: "9.7222vw",
        paddingRight: "9.7222vw",
        position: "relative",
      }}
    >
      <img
        src={Vector}
        alt="vector"
        style={{
          position: "absolute",
          width: "35.4861vw",
          height: "53.8194vw",
          left:'0px'
        }}
      />
      <img src={Polygon} alt="polygon" style={{position: 'absolute', top:'-0.5vw', left:'47%', width: '6.8056vw', height: '4.0972vw'}} />
      <div className="contaiter" style={{zIndex: '1'}}>
        <div className="row">
          <div className="col-6">
            <div className="d-flex flex-column" style={{ paddingTop: "5vw" }}>
              <span className="excelent-header">Welcome to</span>
              <span className="excelent-header2">Saifee Hospital</span>
              <span
                className="excelent-content"
                style={{ textAlign: "start", marginTop: "1vw" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                lacus, mauris sagittis et sem. Magna cursus orci id. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Ut lacus, mauris
                sagittis et sem.
              </span>
              <span
                className="excelent-content"
                style={{ textAlign: "start", marginTop: "1vw" }}
              >
                Magna cursus orci id. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Ut lacus, mauris sagittis et sem. Magna cursus
                orci id. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut lacus, mauris sagittis et sem. Magna cursus orci id. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus,
                mauris sagittis et sem. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </span>
              <div
                className="d-flex flex-row gap-2"
                style={{ marginTop: "1vw" }}
              >
                <div className="d-flex align-items-center gap-1">
                  <img
                    src={Calendar}
                    alt="calendar"
                    style={{ width: "1.0417vw" }}
                  />
                  <span className="csat">Online Appointment</span>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <img
                    src={Calendar}
                    alt="calendar"
                    style={{ width: "1.0417vw" }}
                  />
                  <span className="csat">Our Specialities</span>
                </div>
              </div>
              <div
                className="bg-main-color d-flex justify-content-center align-items-center btn-more-carousel"
                style={{
                  width: "9.7222vw",
                  height: "2.9167vw",
                  borderRadius: "1.7708vw",
                  marginTop: "1vw",
                }}
              >
                KNOW MORE
              </div>
            </div>
          </div>
          <div
            className="col-6 d-flex align-items-center"
            style={{ position: "relative" }}
          >
            <img
              src={Doctor}
              alt="doctor"
              style={{ width: "40.2778vw", height: "38.2639vw", zIndex: "1" }}
            />
            <div
              className="bg-alternate-5"
              style={{
                position: "absolute",
                bottom: "-1.3889vw",
                right: "-1.8vw",
                width: "24.6528vw",
                height: "24.6528vw",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
