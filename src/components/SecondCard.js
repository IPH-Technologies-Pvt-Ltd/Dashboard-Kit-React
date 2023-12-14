import React from "react";
import HubIcon from '@mui/icons-material/Hub';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "../components/css/myCard.css"
function SecondCard({darkMode}) {
  return (
    <>
      <div className={`p-2 ${darkMode ? 'light-mode' : 'dark-mode'}`}>
        <div className="d-flex justify-content-between pt-2">
          <p style={{fontSize:"15px",fontWeight:"660"}}>Workflow</p>
          <span> <DataSaverOffIcon /> </span>
        </div>
        <div className="my-card1" style={{background:"#292d31"}}>
        <div className="d-flex justify-content-around" style={{color:"white"}}>
            <div className="pt-3"> 
            <HubIcon />
            </div>
            <div>
            <p style={{fontSize:"14px",fontWeight:"660"}} className="pt-2">Transactions <br/><span style={{color:"#39d563"}}>Auto block</span></p>
            </div>
            <div className="pt-3">
                <KeyboardArrowRightIcon />
            </div>
          </div> 
        </div>
        <div className="my-card2">
        <div className="d-flex justify-content-around" >
            <div className="pt-3"> 
            <HubIcon />
            </div>
            <div>
            <p style={{fontSize:"14px",fontWeight:"660"}}>Transactions <br/> <span style={{color:"#7830fa"}}>Looks ok</span></p>
            </div>
            
          </div> 
        </div>
        <p className="ms-auto pt-2 fw-bold d-flex justify-content-end">
            Upcoming <ArrowRightAltIcon />
        </p>
      </div>
    </>
  );
}
export default SecondCard;
