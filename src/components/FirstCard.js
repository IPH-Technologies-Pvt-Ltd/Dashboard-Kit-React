import React from "react";
import { Grid, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import img1 from "../image/plus.png"

function FirstCard({ darkMode }) {
  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  const years = [
    { value: "2000", label: "2000" },
    { value: "2001", label: "2001" },
    { value: "2002", label: "2002" },
    { value: "2005", label: "2005" },
    { value: "2006", label: "2006" },
    { value: "2008", label: "2008" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
    { value: "2030", label: "2030" }, 
  ];
  return (
    <div className={`rounded  ${darkMode ? "light-mode" : "dark-mode"}`}>
      <div className="d-flex justify-content-between ">
        <p style={{ fontSize: "13px", fontWeight: "500" }}>My Cards</p>
        <span style={{ fontSize: "13px", fontWeight: "500",color:"#824bf6" }}>Add New {""}
        <img  src={img1} alt="Avatar_img" style={{height:"20px",width:"20px",fill: "#824bf6",
        filter: "brightness(0) saturate(100%) invert(31%) sepia(59%) saturate(2574%) hue-rotate(266deg) brightness(89%) contrast(86%)",

}}/></span>
      </div>
      <div className="" style={{ background: "#292e34",borderRadius:"10px" }}>
        <div className="d-flex justify-content-between p-2">
          <p style={{ color: "white", fontSize: "12px", fontWeight: "650" }}>
            FundWise
          </p>
          <span style={{ color: "white", fontWeight: "700",fontSize:"13x" }}>VISA</span>
        </div>
        <p
          style={{ color: "grey", fontSize: "13px", fontWeight: "650" }}
          className="ps-2"
        >
          Thomas Frank
        </p>
        <span style={{ color: "white", fontWeight: "700",fontSize:"13px" }} className="ps-2">
          1253 5432 3521 3090
        </span>
        <div
          className="d-flex justify-content-between px-2"
          style={{
            background: "#464952",
            color: "white",
            fontSize: "13px",
            fontWeight: "650",
            borderRadius:"10px"
          }}
        >
          <div>
            <p>Exp</p>
            <p>09/24</p>
          </div>
          <div>
            <p>CVV</p>
            <p>341</p>
          </div>
        </div>
      </div>
      <br />
      <p style={{ fontSize: "14px", fontWeight: "600" }}>Conversion Rate</p>
      <span style={{ fontSize: "14px", fontWeight: "600" }}>Amount</span>
      <div
        className="d-flex justify-content-between p-1 px-2 mb-2 rounded"
        style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
      >
        <span>238</span>
        <div>
          <select
            className={`form-select form-select-sm border-0 ${!darkMode?"bg-dark text-white":""}`}
            aria-label=".form-select-sm example"
          >
            <option selected>USD</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div
        className="d-flex justify-content-between p-1 px-2 mb-2 rounded"
        style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
      >
        <span>238</span>
        <div>
          <select
            className={`form-select form-select-sm border-0 ${!darkMode?"bg-dark text-white":""}`}
            aria-label=".form-select-sm example"
          >
            <option selected>EUR</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      
    </div>
  );
}
export default FirstCard;
