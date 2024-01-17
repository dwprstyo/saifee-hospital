import React from "react";
import PackagePhoto from "../../../assets/home/package.png";
import PackagePhoto1 from "../../../assets/home/package1.png";
import PackagePhoto2 from "../../../assets/home/package2.png";
import PackagePhoto3 from "../../../assets/home/package3.png";
import PackagePhoto4 from "../../../assets/home/package4.png";

const Package = () => {
  const PackageList = [
    { key: 1, packageName: "Health Check-up", photo: PackagePhoto },
    { key: 2, packageName: "Senior Citizen - Male", photo: PackagePhoto1 },
    { key: 3, packageName: "Senior Citizen - Female", photo: PackagePhoto2 },
    { key: 4, packageName: "Special Offer for Women", photo: PackagePhoto3 },
    { key: 5, packageName: "Special Offer for Men", photo: PackagePhoto4 },
  ];
  return (
    <div className="d-flex justify-content-center" style={{ marginTop: "5.4167vw",marginBottom: '1.3194vw' , gap: '1vw' }}>
      {PackageList.map((data) => (
        <div key={data.key}>
          <img
            src={data.photo}
            alt="package-photo"
            style={{ width: "18.9583vw", height: "26.9444vw" }}
          />
          <div
            className="bg-main-color d-flex flex-column justify-content-center"
            style={{
              width: "18.9583vw",
              height: "4.5833vw",
              paddingLeft: "1.3194vw",
            }}
          >
            <span className="testi-titlejob" style={{ color: "white", fontWeight: '400' }}>
              PACKAGE:
            </span>
            <span
              className="testi-titlejob"
              style={{ color: "white", textTransform: "capitalize", fontWeight: '400' }}
            >
              {data.packageName}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Package;
