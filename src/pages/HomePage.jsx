import React from "react";
import Collection from "../components/sections/section1/Collection";
import Collection2 from "../components/sections/section2/Collection2";
import Collection3 from "../components/sections/section3/Collection3";
import Collection4 from "../components/sections/section4/Collection4";
import Collection5 from "../components/section5/Collection5";

const HomePage = () => {
  return (
    <>
      <div style={{ marginTop: "60px" }}>
        <Collection />
        <Collection2 />
        <Collection3 />
        <Collection4 />
        <Collection5 />
      </div>
    </>
  );
};

export default HomePage;

{
  /* {window.addEventListener("load", function () {
        let preloader = this.document.getElementById("preloader");
        preloader.style.display = "none";
      })} */
}

{
  /* <div id="preloader">
        <div className="spinner"></div>
      </div> */
}
