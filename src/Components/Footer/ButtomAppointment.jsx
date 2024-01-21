import React from "react";
import Doctors from "../../assets/home/2doctors.png";

const ButtomAppointment = () => {
  return (
    <div className="position-relative">
      <div
        className="bg-alternate-4"
        style={{ width: "100%", height: "12.9861vw" }}
      >
        <div className="buttom-appointment-rectangle"></div>
        <img className="buttom-appointment-img" src={Doctors} alt="doctor" />
      </div>
      <div
        className="bg-alternate-6 d-flex align-items-center"
        style={{ width: "100%", height: "18.7500vw", paddingLeft: "41.1111vw" }}
      >
        <div
          className="d-flex flex-column"
          style={{ width: "27.1528vw", gap: "0.8vw" }}
        >
          <span className="buttom-appointment-title">
            Looking for professinal & trusted medical healthcare?
          </span>
          <span className="buttom-appointment-content">
            Dont Hasitate To Contact Us.
          </span>
          <div className="buttom-appointment-botton">MAKE APPOINTMENT</div>
        </div>
      </div>
    </div>
  );
};

export default ButtomAppointment;
