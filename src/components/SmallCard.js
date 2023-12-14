import React from "react";
import "../components/css/small-card.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Avatar } from "@mui/material";
import img1 from "../image/plus.png"
function SmallCard({darkMode}) {
  return (
    <div className="row mb-2">
      <div className="col-md-10">
        <div className="row">
          <div className="col-md-2">
            <div className="card custom-card border-0" style={{background: darkMode ? "#f9fafc" : "#484c4f",height:"90px"}}>
            <img src={img1} alt="Avatar_Img" style={{height:"30px",width:"30px",marginTop:"5px",color:"#824bf6",        filter: "brightness(0) saturate(100%) invert(31%) sepia(59%) saturate(2574%) hue-rotate(266deg) brightness(89%) contrast(86%)",
}}/>
              <div>
                <p style={{fontSize:"13px",fontWeight:"700",color: darkMode ? "" :"white"}}>
                  Ram <br />
                  <span style={{color:"grey",fontWeight:"500",fontSize:"12px"}}>12345</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card custom-card border-0" style={{background:darkMode ? "#f9fafc" : "#484c4f",height:"90px"}}>
              <Avatar alt="Engineer" src="https://images.unsplash.com/photo-1570470836811-78ef04bb23d3?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{marginTop:"5px",height: "30px", width: "30px"}} />
              <div>
                <p style={{fontSize:"13px",fontWeight:700,color:darkMode? "": "white"}}>
                  Test1 <br />
                  <span style={{color:"grey",fontWeight:"500",fontSize:"12px"}}>78909</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card custom-card border-0" style={{background:darkMode ? "#f9fafc" : "#484c4f",height:"90px"}}>
            <Avatar alt="Actor" src="https://images.unsplash.com/photo-1580518337843-f959e992563b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{marginTop:"5px",height: "30px", width: "30px"}} />
              <div>
                <p style={{fontSize:"13px",fontWeight:700,color:darkMode ? "" : "white"}}>
                  Test2 <br />
                  <span style={{color:"grey",fontWeight:"500",fontSize:"12px"}}>87654</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card custom-card border-0" style={{background:darkMode ? "#f9fafc": "#484c4f",height:"90px"}}>
              <Avatar alt="Engineer" src="https://images.unsplash.com/photo-1580983222866-a16bc7f1cdc3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{marginTop:"5px",height: "30px", width: "30px"}}/>
              <div>
                <p style={{fontSize:"13px",fontWeight:700,color:darkMode ? "" : "white"}}>
                  Test3 <br />
                  <span style={{color:"grey",fontWeight:"500",fontSize:"12px"}}>22345</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card custom-card border-0" style={{background:darkMode ? "#f9fafc" : "#484c4f",height:"90px"}}>
              <Avatar 
              alt="Engineer" 
              src="https://images.unsplash.com/photo-1581092916357-5896ebc48073?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{marginTop:"5px",height: "30px", width: "30px"}}/>
              <div>
                <p style={{fontSize:"13px",fontWeight:700,color: darkMode ? "" : "white"}}>
                  Test4 <br />
                  <span style={{color:"grey",fontWeight:"500",fontSize:"12px"}}>89090</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card custom-card border-0" style={{height:"90px",background:darkMode ? "" : "#484c4f"}}>
              <Avatar alt="Engineer" src="https://images.unsplash.com/photo-1581091224003-01e7c2e69f6f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{marginTop:"5px",height: "30px", width: "30px" }}/>
              <div>
                <p style={{fontSize:"13px",fontWeight:700,color:darkMode ? "" : "white"}}>
                  Test5 <br />
                  <span style={{color:"grey",fontWeight:"500",fontSize:"12px"}}>24563</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-2">
      <div
        style={{height:"30px",
        width:"30px",borderRadius:"50%",
        textAlign:"center",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        marginTop:"25px"
        }}
      >
        <KeyboardArrowRightIcon />
      </div>
      </div>
    </div>
  );
}
export default SmallCard;
