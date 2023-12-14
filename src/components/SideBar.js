import React from "react";
import "../components/css/sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaymentIcon from "@mui/icons-material/Payment";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DescriptionIcon from "@mui/icons-material/Description";
import ContrastIcon from "@mui/icons-material/Contrast";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HelpIcon from "@mui/icons-material/Help";
import RateReviewIcon from "@mui/icons-material/RateReview";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
function SideBar({ toggleTheme, darkMode }) {
  return (
    <>
      <div className={`sidebar ${darkMode ? "light-mode" : "dark-mode"}`}>
        <h3 className="ps-3 pt-2">FundWise</h3>
        <hr />
        <span className="ms-2 fw-bolder" style={{ color: "#999999" }}>
          General
        </span>
        <div style={{ padding: "5px 15px" }}>
          <div>
            <a
              href="#home"
              style={{
                padding: " 4px 0 4px 16px",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                borderRadius: "8px",
                color: "#777777",
                background: darkMode ? "white" : "#212529",
                fontSize: "15px",
              }}
            >
              <span className="me-1">
                <DashboardIcon />
              </span>{" "}
              Home
            </a>
          </div>
        </div>

        <a href="#home" style={{ color: "#777777", fontSize: "15px" }}>
          <span className="2">
            <PaymentIcon />
          </span>{" "}
          Payments
        </a>
        <a href="#home" style={{ color: "#777777", fontSize: "15px" }}>
          <span className="me-1">
            <CreditCardIcon />
          </span>{" "}
          Cards
        </a>
        <a href="#home" style={{ color: "#777777", fontSize: "15px" }}>
          <span className="me-1">
            <DescriptionIcon />
          </span>{" "}
          Invoices
        </a>
        <a href="#home" style={{ color: "#777777", fontSize: "15px" }}>
          <span className="me-1">
            <ContrastIcon />
          </span>{" "}
          Invoices
        </a>
        <a href="#home" style={{ color: "#777777", fontSize: "15px" }}>
          <span className="me-1">
            <EmojiEventsIcon />
          </span>{" "}
          Invoices
        </a>
        <hr />
        <span
          className="ms-2 fw-bolder"
          style={{ color: "#999999", fontSize: "15px" }}
        >
          Supports
        </span>
        <a href="#home" style={{ color: "#777777", fontSize: "15px" }}>
          <span className="me-1">
            <HelpIcon />
          </span>{" "}
          Help
        </a>
        <a href="#home" style={{ color: "#777777", fontSize: "15px" }}>
          <span className="me-1">
            <RateReviewIcon />
          </span>{" "}
          Feedback
        </a>
        <div style={{ position: "absolute", bottom: "14px" }}>
          <a href="#home" style={{ color: "#777777", fontSize: "15px" }}>
            <span className="me-1">
              <SettingsIcon />
            </span>{" "}
            Settings
          </a>
          <a href="#home" style={{ color: "#777777", fontSize: "15px" }}>
            <span className="me-">
              <ExitToAppIcon />
            </span>{" "}
            Logout
          </a>
          <div className="d-flex" style={{ paddingLeft: "30px" }}>
            <div
              style={{
                borderRadius: "10px",
                width: "100%",
                padding: "4px",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                background: darkMode ? "#d1e9ed" : "#3d4247",
              }}
            >
              <button
                onClick={toggleTheme}
                style={{
                  marginRight: "5px",
                  border: "none",
                  height: "25px",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  fontSize: "14px",
                  borderRadius: "10px",
                }}
              >
                <LightModeIcon style={{ fontSize: "14px" }} />
                Light
              </button>
              <button
                onClick={toggleTheme}
                style={{
                  border: "none",
                  height: "24px",
                  fontSize: "14px",
                  background: "#d1e9ed",
                  borderRadius: darkMode? "0px" :"10px",

                }}
              >
                <NightlightRoundIcon style={{ fontSize: "14px" }} />
                Dark
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SideBar;
