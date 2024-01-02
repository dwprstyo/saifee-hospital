import React from "react";
import Calendar from "../../../assets/ctas/calendar.png";
import Book from "../../../assets/ctas/book.png";
import Contact from "../../../assets/ctas/contact.png";
import HealthPackage from "../../../assets/ctas/health-package.png";
import House from "../../../assets/ctas/house.png";
import Microscope from "../../../assets/ctas/microscop.png";
import Stetoscope from "../../../assets/ctas/stetoscope.png";
import CarouselWrapper from "./CarouselWrapper";

const BannerWrapper = () => {
  return (
    <div>
      <div className="bg-main-color" style={{ height: "20.8333vw" }}>
        <CarouselWrapper />
      </div>
      <div
        className="bg-alternate-1 d-flex flex-row align-items-end justify-content-center"
        style={{ height: "25.1389vw", paddingBottom: "2.0833vw" }}
      >
        <div
          className="d-flex flex-row gap-1"
          style={{
            width: "83.4028vw",
            height: "4.1667vw",
          }}
        >
          <div
            className="d-flex align-items-end"
            style={{
              position: "relative",
              width: "11.7361vw",
              height: "4.1667vw",
            }}
          >
            <div
              className="bg-alternate-5 d-flex justify-content-center align-items-center"
              style={{
                borderRadius: "50%",
                width: "2.6389vw",
                height: "2.6389vw",
                position: "absolute",
                top: "0vw",
              }}
            >
              <img
                src={Calendar}
                alt="calendar"
                style={{ width: "1.0417vw" }}
              />
            </div>
            <div
              className="bg-alternate-4 csat"
              style={{
                width: "11.7361vw",
                height: "3.4722vw",
                borderRadius: "1.7361vw",
                paddingLeft: "3.0556vw",
                paddingTop: "0.4167vw",
              }}
            >
              Book an Appointment
            </div>
          </div>
          <div
            className="d-flex align-items-end"
            style={{
              position: "relative",
              width: "11.7361vw",
              height: "4.1667vw",
            }}
          >
            <div
              className="bg-alternate-5 d-flex justify-content-center align-items-center"
              style={{
                borderRadius: "50%",
                width: "2.6389vw",
                height: "2.6389vw",
                position: "absolute",
                top: "0vw",
              }}
            >
              <img
                src={Stetoscope}
                alt="calendar"
                style={{ width: "1.0417vw" }}
              />
            </div>
            <div
              className="bg-alternate-4 csat"
              style={{
                width: "11.7361vw",
                height: "3.4722vw",
                borderRadius: "1.7361vw",
                paddingLeft: "3.0556vw",
                paddingTop: "0.4167vw",
              }}
            >
              Find A <br />
              Doctor
            </div>
          </div>
          <div
            className="d-flex align-items-end"
            style={{
              position: "relative",
              width: "11.7361vw",
              height: "4.1667vw",
            }}
          >
            <div
              className="bg-alternate-5 d-flex justify-content-center align-items-center"
              style={{
                borderRadius: "50%",
                width: "2.6389vw",
                height: "2.6389vw",
                position: "absolute",
                top: "0vw",
              }}
            >
              <img src={House} alt="calendar" style={{ width: "1.0417vw" }} />
            </div>
            <div
              className="bg-alternate-4 csat"
              style={{
                width: "11.7361vw",
                height: "3.4722vw",
                borderRadius: "1.7361vw",
                paddingLeft: "3.0556vw",
                paddingTop: "0.4167vw",
              }}
            >
              Book A <br />
              Home Test
            </div>
          </div>
          <div
            className="d-flex align-items-end"
            style={{
              position: "relative",
              width: "11.7361vw",
              height: "4.1667vw",
            }}
          >
            <div
              className="bg-alternate-5 d-flex justify-content-center align-items-center"
              style={{
                borderRadius: "50%",
                width: "2.6389vw",
                height: "2.6389vw",
                position: "absolute",
                top: "0vw",
              }}
            >
              <img
                src={Microscope}
                alt="calendar"
                style={{ width: "1.0417vw" }}
              />
            </div>
            <div
              className="bg-alternate-4 csat"
              style={{
                width: "11.7361vw",
                height: "3.4722vw",
                borderRadius: "1.7361vw",
                paddingLeft: "3.0556vw",
                paddingTop: "0.4167vw",
              }}
            >
              Book A<br /> Lab Test
            </div>
          </div>
          <div
            className="d-flex align-items-end"
            style={{
              position: "relative",
              width: "11.7361vw",
              height: "4.1667vw",
            }}
          >
            <div
              className="bg-alternate-5 d-flex justify-content-center align-items-center"
              style={{
                borderRadius: "50%",
                width: "2.6389vw",
                height: "2.6389vw",
                position: "absolute",
                top: "0vw",
              }}
            >
              <img
                src={HealthPackage}
                alt="calendar"
                style={{ width: "1.0417vw" }}
              />
            </div>
            <div
              className="bg-alternate-4 csat"
              style={{
                width: "11.7361vw",
                height: "3.4722vw",
                borderRadius: "1.7361vw",
                paddingLeft: "3.0556vw",
                paddingTop: "0.4167vw",
              }}
            >
              Book health Packages
            </div>
          </div>
          <div
            className="d-flex align-items-end"
            style={{
              position: "relative",
              width: "11.7361vw",
              height: "4.1667vw",
            }}
          >
            <div
              className="bg-alternate-5 d-flex justify-content-center align-items-center"
              style={{
                borderRadius: "50%",
                width: "2.6389vw",
                height: "2.6389vw",
                position: "absolute",
                top: "0vw",
              }}
            >
              <img src={Book} alt="calendar" style={{ width: "1.0417vw" }} />
            </div>
            <div
              className="bg-alternate-4 csat"
              style={{
                width: "11.7361vw",
                height: "3.4722vw",
                borderRadius: "1.7361vw",
                paddingLeft: "3.0556vw",
                paddingTop: "0.4167vw",
              }}
            >
              Get An <br />
              Estimate
            </div>
          </div>
          <div
            className="d-flex align-items-end"
            style={{
              position: "relative",
              width: "11.7361vw",
              height: "4.1667vw",
            }}
          >
            <div
              className="bg-alternate-5 d-flex justify-content-center align-items-center"
              style={{
                borderRadius: "50%",
                width: "2.6389vw",
                height: "2.6389vw",
                position: "absolute",
                top: "0vw",
              }}
            >
              <img src={Contact} alt="calendar" style={{ width: "1.0417vw" }} />
            </div>
            <div
              className="bg-alternate-4 csat"
              style={{
                width: "11.7361vw",
                height: "3.4722vw",
                borderRadius: "1.7361vw",
                paddingLeft: "3.0556vw",
                paddingTop: "0.4167vw",
              }}
            >
              Get Second Opinion
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerWrapper;
