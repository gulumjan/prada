import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", gap: "224px", marginTop: "65px" }}>
      <img
        src="https://artside.com.ua/tmp/cache/images/35/2ee/11811202042-591x630-r.jpg"
        alt=""
      />
      <div style={{ marginTop: "156px" }} className="notFound">
        <h1>
          OOPS!PAGE <br />
          NOT FOUND.{" "}
        </h1>
        <p style={{ padding: "36px 0" }}>
          You must have picked the wrong door because I <br /> haven't been able
          to lay my eye on the page <br /> you've been searching for
        </p>
        <Button onClick={() => navigate("/")} variant="contained">
          Back To Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
