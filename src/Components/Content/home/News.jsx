import React from "react";

const News = () => {
  return (
    <div
      className="bg-alternate-1 d-flex align-items-center"
      style={{ height: "35.1389vw", width: "100%", paddingLeft: "9.1667vw", gap: '1.3889vw' }}
    >
      <div
        className="d-flex flex-column"
        style={{ width: "25vw", gap: "1.1111vw" }}
      >
        <span className="excelent-header">
          SAIFEE <span className="excelent-header2">NEWS</span>
        </span>
        <span
          className="excelent-content"
          style={{ color: "#606060", textAlign: "left" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus in
          mauris facilisis semper sapien. Risus aliquam egestas non duis lacus
          at. Eu sapien consectetur mattis aliquet ipsum etiam scelerisque a.
          Sed elementum pulvinar porta eleifend elit diam mattis iaculis. Ac
          vitae pellentesque aliquam augue.{" "}
        </span>
        <div
          className="bg-main-color d-flex justify-content-center align-items-center btn-more-carousel"
          style={{
            width: "10vw",
            height: "2.9167vw",
            borderRadius: "1.7708vw",
            marginTop: "1vw",
          }}
        >
          <span
            className="excelent-content"
            style={{ color: "white", textTransform: "uppercase" }}
          >
            READ ALL NEWS
          </span>
        </div>
      </div>
      <div className="d-flex" style={{gap: '1.3889vw'}}>
        <div
          className="bg-alternate-4 d-flex flex-column"
          style={{
            width: "19.4444vw",
            height: "19.4444vw",
            borderRadius: "1.3889vw",
            paddingTop: "2.2917vw",
            paddingLeft: "2.0833vw",
            paddingRight: "4.2vw",
            gap: "1.0417vw",
          }}
        >
          <span className="news-title">Helping Seniors Learn New Hobbies</span>
          <span className="news-date">05 September 2022</span>
          <span className="news-body">
            Lorem ipsum dolor sit amet, vel te doming repudiare, eum nihil
            voluptatum ne, tollit.
          </span>
          <div className="news-botton">READ MORE</div>
        </div>
        <div
          className="bg-main-color d-flex flex-column"
          style={{
            width: "19.4444vw",
            height: "19.4444vw",
            borderRadius: "1.3889vw",
            paddingTop: "2.2917vw",
            paddingLeft: "2.0833vw",
            paddingRight: "4.2vw",
            gap: "1.0417vw",
          }}
        >
          <span className="news-title" style={{color: 'white'}}>Helping Seniors Learn New Hobbies</span>
          <span className="news-date">05 September 2022</span>
          <span className="news-body" style={{color: 'white'}}>
            Lorem ipsum dolor sit amet, vel te doming repudiare, eum nihil
            voluptatum ne, tollit.
          </span>
          <div className="news-botton"  style={{color: 'white', border:  "0.0694vw solid white"}}>READ MORE</div>
        </div>
        <div
          className="bg-alternate-4 d-flex flex-column"
          style={{
            width: "19.4444vw",
            height: "19.4444vw",
            borderRadius: "1.3889vw",
            paddingTop: "2.2917vw",
            paddingLeft: "2.0833vw",
            paddingRight: "4.2vw",
            gap: "1.0417vw",
          }}
        >
          <span className="news-title">Helping Seniors Learn New Hobbies</span>
          <span className="news-date">05 September 2022</span>
          <span className="news-body">
            Lorem ipsum dolor sit amet, vel te doming repudiare, eum nihil
            voluptatum ne, tollit.
          </span>
          <div className="news-botton">READ MORE</div>
        </div>
      </div>
    </div>
  );
};

export default News;
