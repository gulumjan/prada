import React from "react";
import "./Collection3.scss";

const Collection3 = () => {
  return (
    <div id="collection3">
      <div className="container">
        <div className="section">
          <div className="text1">
            <h1>Shoes</h1>
            <div style={{ display: "flex" }} className="for">
              <div className="for1">
                <h2>
                  <a href="/women">FOR HER</a>
                </h2>
                <h4>_____________</h4>
              </div>
              <div className="for2">
                <h2>FOR HIM</h2>
                <h4>_______________</h4>
              </div>
            </div>
          </div>
          <img
            src="https://www.prada.com/content/dam/pradanux/home_page/2024/05/May_Issue_II/shoes/banner_DT.jpg/_jcr_content/renditions/cq5dam.web.1664.1664.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Collection3;
