import React from "react";
import "./Collection2.scss";
const Collection2 = () => {
  return (
    <div id="collections">
      <div className="container">
        <div className="collection">
          <div className="bag1">
            <div className="text">
              <h1>Women's Bags</h1>
              <h4>Shop</h4>
              <h5>______________</h5>
            </div>

            <img
              src="https://www.prada.com/content/dam/pradanux/home_page/2024/05/May_Issue_II/mosaic_bags/Card_1_DT.jpg/_jcr_content/renditions/cq5dam.web.1664.1664.webp"
              alt=""
            />
          </div>
          <div className="bag2">
            <div className="text">
              <div className="text">
                <h1>Men's Bags</h1>
                <h4>Shop</h4>
                <h5>______________</h5>
              </div>
              <img
                src="https://www.prada.com/content/dam/pradanux/home_page/2024/05/May_Issue_II/mosaic_bags/Card_2_MB.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection2;
