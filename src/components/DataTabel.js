import * as React from "react";
import "../components/css/data.css";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import img1 from "./images/figma.png";
import img2 from "./images/card.png";
import img3 from "./images/dribble.png";
import img4 from "./images/youtube.png";
import FilterAndSearch from "./FilterAndSearch";
function DataTable({darkMode}) {
  return (
    <div className={`${darkMode ? "light-mode" : "dark-mode"}`}>
     <div className= "row">
     <FilterAndSearch darkMode={darkMode} />
      <div className="col-12">
        <table className={`table table-hover table-borderless ${darkMode ? "" : "table-dark"}`}
       style={{
    backgroundColor: darkMode ? "#333333 !important" : "#ffffff !important",
    color: darkMode ? "#ffffff !important" : "#000000 !important",
  }}
  >
          <thead className="thead-light table-active">
            <tr>
              <th scope="col"> 
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                    
                  />
                  <label className="custom-control-label ps-2" htmlFor="customCheck1">
                    Invoice
                  </label>
                </div>
              </th>
              <th scope="col">Transaction</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ fontSize: "14px" }}>
              <td>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                    
                  />
                  <label className="custom-control-label" htmlFor="customCheck1">
                    <TextSnippetIcon className="mx-2" style={{fontSize:"18px"}} />
                    inv_000922323
                  </label>
                </div>
              </td>
              <td style={{ display: "flex", textAlign: "center" }}>
                <div
                  style={{
                    height: "35px",
                    width: "35px",
                    padding: "5px",
                    borderRadius: "50%",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    marginRight: "10px",
                    textAlign:"center",
                    alignItems:"center"
                  }}
                >
                  <img
                    src={img1}
                    alt="Avatar"
                    style={{ height: "25px", width: "25px",textAlign:"center",alignItems:"center"}}
                  />
                </div>
                <div style={{color:"#555555",fontWeight:"650",textAlign:"start"}}>
                  {" "}
                  Figma Pro Plan
                  <br />
                  <span style={{color:"#999999"}}>Design Tools</span>
                </div>{" "}
              </td>
              <td style={{fontWeight:"600"}} className="pt-3">11 Nov, 2023</td>
              <td style={{ color: "red",fontWeight:600 }} className="pt-3">$6400</td>
              <td style={{ color: "#32e265" }} className="pt-3">
                <CheckCircleOutlineIcon className="me-1" />
                Completed
              </td>
            </tr>
            <tr style={{ fontSize: "14px" }}>
              <td>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                    
                  />
                  <label className="custom-control-label" htmlFor="customCheck1">
                    <TextSnippetIcon className="mx-2" style={{fontSize:"18px"}}/>
                    inv_000 922323
                  </label>
                </div>
              </td>
              <td style={{ display: "flex", textAlign: "center" }}>
                <div
                  style={{
                    height: "35px",
                    width: "35px",
                    padding: "5px",
                    borderRadius: "50%",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    marginRight: "10px",
                    textAlign:"center",
                    alignItems:"center"
                  }}
                >
                  <img
                    src={img2}
                    alt="Avatar"
                    style={{ height: "25px", width: "25px" }}
                  />
                </div>
                <div style={{color:"#555555",fontWeight:"650",textAlign:"start"}}>
                  {" "}
                  Internal Payment
                  <br />
                  <span style={{color:"#999999"}}>billing@gmail.com</span>
                </div>
              </td>
              <td style={{fontWeight:"600"}} className="pt-3">23 Nov, 2023</td>
              <td style={{fontWeight:"600"}} className="pt-3">$200,00</td>
              <td style={{ color: "#febf45" }} className="pt-3">
                <RotateRightIcon className="me-1"/>
                On Progress
              </td>
            </tr>
            <tr style={{ fontSize: "14px" }}>
              <td>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label className="custom-control-label" htmlFor="customCheck1">
                    <TextSnippetIcon className="mx-2" style={{fontSize:"18px"}}/>
                    inv_000 920987
                  </label>
                </div>
              </td>
              <td style={{ display: "flex", textAlign: "center" }}>
                <div
                  style={{
                    height: "35px",
                    width: "35px",
                    padding: "5px",
                    borderRadius: "50%",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                      marginRight: "10px",
                      textAlign:"center",
                      alignItems:"center"
                  }}
                >
                  <img
                    src={img3}
                    alt="Avatar"
                    style={{ height: "25px", width: "25px" }}
                  />
                </div>
                <div style={{color:"#555555",fontWeight:"650",textAlign:"start"}}>
                  {" "}
                  Dribble Premium
                  <br />
                  <span style={{color:"#999999"}}>Design Tool</span>
                </div>
              </td>
              <td style={{fontWeight:"600"}} className="pt-3">11 Nov, 2023</td>
              <td style={{ color: "red",fontWeight:"600" }} className="pt-3">64,00</td>
              <td style={{ color: "#32e265" }} className="pt-3">
                <CheckCircleOutlineIcon className="me-1"/>
                Completed
              </td>
            </tr>
            <tr style={{ fontSize: "14px" }}>
              <td>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck2"
                  />
                  <label className="custom-control-label" htmlFor="customCheck2">
                    <TextSnippetIcon className="mx-2" style={{fontSize:"18px"}}/>
                    inv_000 9221267
                  </label>
                </div>
              </td>
              <td style={{ display: "flex", textAlign: "center" }}>
                <div
                  style={{
                    height: "35px",
                    width: "35px",
                    padding: "5px",
                    borderRadius: "50%",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                      marginRight: "10px",
                      textAlign:"center",
                      alignItems:"center"
                  }}
                >
                  <img
                    src={img4}
                    alt="Avatar"
                    style={{ height: "25px", width: "25px" }}
                  />
                </div>
                <div style={{color:"#555555",fontWeight:"650",textAlign:"start"}}>
                  {" "}
                  YouTube Premium
                  <br />
                  <span style={{color:"#999999"}}>Design Tools</span>
                </div>
              </td>
              <td style={{fontWeight:"600"}} className="pt-3">11 Nov, 2023</td>
              <td style={{ color: "red",fontWeight:"600" }} className="pt-3">$64,00</td>
              <td style={{ color: "#32e265" }} className="pt-3">
                <CheckCircleOutlineIcon className="me-1" />
                Completed
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  
  );
}
export default DataTable;
