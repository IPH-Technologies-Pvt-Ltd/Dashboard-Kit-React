import React from 'react'

const SecondCardRow = ({darkMode}) => {
  return (
    <>
        <div className='row'>
            <div className='col-md-12 d-flex justify-content-between'>
               <div className='px-2 pt-2'>
               <p style={{fontSize:"13px",fontWeight:"600"}} className='pb-0'>Total Spent </p>
               <div className='d-flex justify-content-center align-items-center'>
               <h5 className='pb-0' style={{marginTop:"-10px"}}>$17,254</h5>
                <span style={{marginTop:"-10px",fontSize:"13px",paddingLeft:"5px"}}>23%</span>
               </div>
               </div>
               <div
          style={{
            position: 'absolute',
            top: '0px',
            right: '10px',
            marginBottom:"",
            background:darkMode? '#ffffff' : "#212529",
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          className='pt-2'
        >
          <select className={`form-select form-select-sm ${!darkMode ? "bg-dark text-white" : ""}`} aria-label=".form-select-sm example">
  <option selected>Last 30 days</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
        </div>
            </div>
        </div>
    </>
  )
}
export  default SecondCardRow;
