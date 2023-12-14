import React from "react";

const FilterAndSearch = ({darkMode}) => {
  console.log("filter",darkMode)
  return (
    <>
      <div className="col-md-12 d-flex justify-content-between mb-2">
        <div style={{fontSize:"14px",fontWeight:"600"}}>Transaction history</div>
        <div className="d-flex">
          <div className={`input-group rounded me-2 input-search-1 ${!darkMode}?"bg-dark":""`} style={{width:"190px"}}>
            <span
              className="input-group-text border-0"
              style={{ background: darkMode ? "white" : "#212529",color:darkMode ? "" : "white" }}

              id="search-addon"
            >
              <i className="fas fa-search"></i>
            </span>
            <input
              type="search"
              className={`form-control rounded border-0 ${darkMode ? "": "custom-placeholder"}`}
              placeholder="Search Transaction"
              aria-label="Search"
              aria-describedby="search-addon"
              style={{background: darkMode ? "" : "#212529",color: darkMode ? "" : "white"}}
            />
          </div>
          <div className="me-2">
            <select
                          style={{background: darkMode ? "" : "#212529",color: darkMode ? "" : "white",fontSize:"15px"}}
              className="form-select form-select-sm drop-down-1"
              aria-label=".form-select-sm example"
            >
              <option selected>Last 30 days</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="me-2">
            <button className="btn1 rounded" style={{width:"80px",height:"30px",background:darkMode? "white" : "#212529",color:darkMode ? "" : "white"}}>
              Filter <i className="fa-solid fa-filter"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default FilterAndSearch;
