import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "10px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};
const slideImages = [
  {
    url: "https://welovebrands.com.ua/wp-content/uploads/2023/06/prada-baner.jpg",
    caption: "Slide 1",
  },
  {
    url: "https://www.artpartner.com/propeller/uploads/2019/11/AP0247296-2-1024x696.jpg",
    caption: "Slide 2",
  },
  {
    url: "https://collectibledry.com/wp-content/uploads/2019/11/Prada-Resort-SS20-Advertising-Campaign_04-800x544.jpg",
    caption: "Slide 3",
  },
  {
    url: "https://www.designscene.net/wp-content/uploads/2020/04/Freja-Beha-Erichsen-Prada-Pre-Fall-2020-01.jpg",
    caption: "Slide 4",
  },
];

const Collection5 = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.url})`,
                width: "1415px",
                height: "568px",
              }}
            >
              {/* <span style={spanStyle}>{slideImage.caption}</span> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Collection5;
