import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SensorsIcon from "@mui/icons-material/Sensors";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Footer.scss";
import { Skeleton } from "@mui/material";

const Footer = () => {
  return (
    <div style={{ marginTop: "207px" }} id="footer">
      <div className="container">
        <div className="footer">
          <div className="footerInp">
            <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
            <input placeholder="E-mail address" type="text" />
            <h4>______________________________________</h4>
            <p>
              By clicking on "Subscribe", you confirm that you have read and{" "}
              <br />
              understood our <a>Privacy Statement</a> and that you want to
              receive the <br />
              newsletter and other marketing communication as set out therein.
            </p>
            <div className="footerLogo">
              <button>
                <FacebookOutlinedIcon />
              </button>
              <button>
                <InstagramIcon />
              </button>
              <button>
                <EmailIcon />
              </button>
              <button>
                <YouTubeIcon />
              </button>
              <button>
                <WhatsAppIcon />
              </button>
              <button>
                <SensorsIcon />
              </button>
            </div>
          </div>
          <div className="footerCall">
            <h4>DO YOU NEED HELP</h4>
            <p>Call us 1-877-997-1267</p>
            <p>write us WhatsApp</p>
            <p>Contacts</p>
            <p>FAQ</p>
            <p>Sitemap</p>
          </div>
          <div className="footerService">
            <h4>EXCLUSIVE SERVICES</h4>
            <p>Prada Services</p>
            <p>Track to order</p>
            <p>Returns</p>
          </div>
          <div className="footerComp">
            <h4>COMPANY</h4>
            <p>Foundazione Prada</p>
            <p>Prada Group</p>
            <p>Luna Rossa</p>
            <p>Sustainability</p>
            <p>Work with us</p>
          </div>
          <div className="footerLeg">
            <h4>LEGAL TERMS AND CONDITIONS</h4>
            <p>Legal Notice</p>
            <p>Privacy Statement</p>
            <p>Cookie Policy</p>
            <p>Terms of Sale</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
