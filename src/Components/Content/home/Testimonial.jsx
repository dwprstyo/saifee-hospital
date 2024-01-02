import React from "react";
import User1 from "../../../assets/home/user1.png";

const Testimonial = () => {
  const user = [
    {
      profile: User1,
      name: "Urvi Rathod",
      jobTitle: "Entrepeneur",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at amet eu, non vel netus duis enim quis. Arcu nibh nam eget lectus lacus mauris. Tellus in ut aliquam neque mi enim. Accumsan eget adipiscing lacinia lacus viverra tortor, feugiat. In amet, morbi tincidunt bibendum.",
    },
    {
      profile: User1,
      name: "Evy Rahmadhani",
      jobTitle: "Entrepeneur",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at amet eu, non vel netus duis enim quis. Arcu nibh nam eget lectus lacus mauris. Tellus in ut aliquam neque mi enim. Accumsan eget adipiscing lacinia lacus viverra tortor, feugiat. In amet, morbi tincidunt bibendum.",
    },
    {
      profile: User1,
      name: "Firman Andi",
      jobTitle: "Entrepeneur",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at amet eu, non vel netus duis enim quis. Arcu nibh nam eget lectus lacus mauris. Tellus in ut aliquam neque mi enim. Accumsan eget adipiscing lacinia lacus viverra tortor, feugiat. In amet, morbi tincidunt bibendum.",
    },
  ];

  return (
    <div
      className="d-flex flex-column"
      style={{
        paddingTop: "3.75vw",
        paddingBottom: "3.75vw",
        paddingLeft: "9.0972vw",
        paddingRight: "9.0972vw",
      }}
    >
      <div className="excelent-header d-flex justify-content-center">
        TESTIMONIAL
      </div>
      <div
        className="d-flex overflow-x-scroll"
        style={{ marginTop: "2.2222vw", width: "81.9444vw" }}
      >
        {user.map((data) => (
          <div
            style={{
                flex: "0 0 auto",
              height: "15.4583vw",
              width: "40.2778vw",
              paddingLeft: "5.5556vw",
              paddingRight: "5.5556vw",
            }}
          >
            <div className="d-flex">
              <img
                src={data.profile}
                alt="user"
                style={{ width: "6.1806vw", height: "6.1806vw" }}
              />
              <div className="d-flex flex-column justify-content-center">
                <span className="testi-name">{data.name}</span>
                <span className="testi-titlejob">{data.jobTitle}</span>
              </div>
            </div>
            <div className="testi-content">
              {data.message}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
