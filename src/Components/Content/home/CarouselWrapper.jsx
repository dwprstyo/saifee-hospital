import { React, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Shot1 from "../../../assets/home/shot1.png";
import NextBtn from "../../../assets/home/next.png";
import PrevBtn from "../../../assets/home/prev.png";

const CarouselWrapper = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  //data of carousel's image
  const dataCarousel = [
    {
      key: 1,
      image: Shot1,
      headerCaption: "Welcome to Saifee Hospital",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum vivamus augue cursus eget sagittis etiam.",
    },
    {
      key: 2,
      image: Shot1,
      headerCaption: "Second slide label",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      key: 3,
      image: Shot1,
      headerCaption: "Third slide label",
      caption:
        " Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
  ];

  return (
    <div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        prevIcon={
          <img src={PrevBtn} alt="prev" style={{ width: "2.7778vw" }} />
        }
        nextIcon={
          <img src={NextBtn} alt="next" style={{ width: "2.7778vw" }} />
        }
      >
        {dataCarousel.map((item) => (
          <Carousel.Item key={item.key}>
            <div style={{ position: "relative" }}>
              <div className="d-flex justify-content-center">
                <img
                  src={item.image}
                  alt="shot1"
                  style={{ width: "93.0556vw", height: "36.1111vw" }}
                />
              </div>
              <div
                className="d-flex flex-column gap-2"
                style={{
                  width: "21.8750vw",
                  position: "absolute",
                  top: "10.6944vw",
                  left: "9.7222vw",
                }}
              >
                <span className="header-caption-carousel">
                  {item.headerCaption}
                </span>
                <span className="caption-carousel">{item.caption}</span>
                <div className="bg-main-color d-flex justify-content-center align-items-center btn-more-carousel" style={{width: '9.7222vw', height: '2.9167vw', borderRadius: '1.7708vw' }}>
                  KNOW MORE
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselWrapper;
