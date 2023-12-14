import React from "react";
import { TextField, Button, IconButton, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Header({darkMode}) {
  return (
    <div className="row">
      <div className="col-md-3">
        <div className="input-group rounded">
        <span
            className="input-group-text border-0"
            id="search-addon"
            style={{ background: darkMode ? "white" : "#212529",color:darkMode ? "" : "white" }}
          >
            <i className="fas fa-search"></i>
          </span>
          <input
            type="search"
            className={`form-control rounded border-0 ${darkMode ? "": "custom-placeholder"}`}
            placeholder= "Search Anything"
            aria-label="Search"
            aria-describedby="search-addon"
            style={{background: darkMode ? "" : "#212529",color: darkMode ? "" : "white"}}
          />
         
        </div>
      </div>
      <div className="col-md-9 d-flex justify-content-end">
        <button
          className="btn-sm btn me-3 fw-bolder "
          style={{
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            borderRadius: "12px",
            height: "27px",
            fontSize:"13px",
            textAlign:"center",
            backgroundColor: darkMode ? "" : "#7830fa",
            color: darkMode ? "" : "white"
          }}
        >
          Create New
        </button>
        <button
          className="btn-sm btn me-3 fw-bolder"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            borderRadius: "10px",
            height: "27px",
            fontSize:"13px",
            textAlign:"center",
            backgroundColor: darkMode ? "" : "#7830fa",
            color: darkMode ? "" : "white"
          }}
        >
          Add Funds
        </button>
        <button
          className="btn-sm btn fw-bolder me-3"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            borderRadius: "10px",
            background: "#7830fa",
            color: "white",
            height: "30px",
            fontSize:"13px"
          }}
        >
          Move Money
        </button>
        <IconButton variant="outlined" size="medium" style={{
          backgroundColor:darkMode ? "" : "#000",
          color: darkMode ? "" : "green",
          marginRight:"12px"}}>
          <NotificationsIcon/>
        </IconButton>
        <Avatar
          alt="avatar"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{ height: "35px", width: "35px",marginTop:"3px",marginRight:"12px" }}
        />
        <ArrowDropDownIcon />
      
      </div>
    </div>
  );
}
export default Header;
