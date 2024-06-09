import React from "react";
import { v1 } from "../../../videos";
import "./Collection.scss";

const Collection = () => {
  return (
    <div id="section">
      <div className="container">
        <div className="section">
          <img
            src="https://media.sunglasshut.com/cms/resource/image/1061768/landscape_ratio960x626/1536/1002/7155fb20f2e6a3bea259c0654b3d75eb/99EAEC7B689EA3D4ABC9DBC9CC126398/sgh-plp-1.jpg"
            alt=""
          />
          <div className="text">
            <h1>Men Summer's Collection</h1>
            <h4>Shop</h4>
            <h5>_________</h5>
          </div>
          <img
            className="seconImg"
            src="https://www.prada.com/content/dam/pradanux/home_page/2024/05/May_Issue/3_maggio/summer_collection/man/banner_DT.jpg/_jcr_content/renditions/cq5dam.web.1664.1664.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Collection;
