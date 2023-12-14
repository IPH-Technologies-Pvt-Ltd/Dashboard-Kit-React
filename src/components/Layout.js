import React, {useState} from "react";
import SideBar from "./SideBar";
import { Button} from '@mui/material';
import SecondLineGraph from "./SecondLineGraph";
import Header from "./Header";
import SmallCard from "./SmallCard";
import FirstLineGraph from "./FirstLineGraph";
import DataTable from "./DataTabel";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AddIcon from '@mui/icons-material/Add';
import "../components/css/light-dark.css"
function Layout() {
  const [isLightMode, setIsLightMode] = useState(true);
  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };
  return (
    <div className={`container-fluid vh-100 app ${isLightMode ? "light-mode" : "dark-mode"}`}>
      <div className="row">
        <div className="col-md-2 col-sm-3 p-0">
          <SideBar toggleTheme={toggleTheme} darkMode={isLightMode} />
        </div>
        <div className="col-md-10 col-sm-9 mb-1">
          <div className="row py-2">
            <Header darkMode={isLightMode} />
          </div>
          <div className="row">
            <div className="col-md-9">
              <div className="row mb-4">
                <div className="col-md-3">
                  <p className="fw-semibold">Total Balance in USD </p>
                  <h1 className="fw-bold">$32,352</h1>
                  <button style={{height:"20px",fontSize:"10px",border:"none",background:"#efebfd",color:"#5b36bb",borderRadius:"10px",marginRight:"8px"}}>
                    <ArrowUpwardIcon style={{fontSize:"10px",color:"#5b36bb"}}/> Send
                  </button>
                  <button style={{height:"20px",fontSize:"10px",width:"75px",border:"none",borderRadius:"10px",marginRight:"8px",color:"#4f515d",background:"#f6f6f7",fontWeight:"600"}}>
                    <ArrowDownwardIcon style={{fontSize:"10px",color:"#4f515d"}}/> Request
                  </button>
                  <button style={{height:"20px",fontSize:"10px",border:"none",borderRadius:"10px",background:"#f8f9fc",fontWeight:"500"}}>
                    <AddIcon style={{fontSize:"10px"}}/> TopUp
                  </button>
                </div>
                <div className="col-md-9">
                    <p className="fw-semibold">Quick Transaction</p>
                    <SmallCard darkMode={isLightMode} />
                </div>
              </div>
              <div className="row mb-4">
              <div className="col-md-6">
                <div className= {`card border-0 ${!isLightMode? "bg-dark text-white":""}`} style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 4px"}}>
                    <FirstLineGraph darkMode={isLightMode}/>
                </div>
              </div>
              <div className="col-md-6">
                <div className={`card border-0 ${!isLightMode? "bg-dark text-white":""}`} style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 4px"}}>
                    <SecondLineGraph darkMode={isLightMode}/>
                </div>
              </div>
              </div>
              <div className="row">
              <div className="col-md-12 col-sm-12" >
              <DataTable darkMode={isLightMode} />
              </div>
              </div>
            </div>
            <div className="col-md-3">
                <div className="row mb-4" >
                  <div className="col-12">
                    <div className={`card border-0 px-2 py-2 ${isLightMode ? "light-mode" : "dark-mode dummy"}`} style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
                    <FirstCard darkMode={isLightMode}/>
                    </div>
                  </div>
                </div>
                <div className="row">
                <div className="col-12">
                  <div className={`card border-0 px-2 py-2 ${isLightMode ? "light-mode" : "dark-mode dummy"}`} style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",}}>
                  <SecondCard darkMode={isLightMode}/>
                  </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Layout;
