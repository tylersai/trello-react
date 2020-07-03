import React from "react";
import "./NavTop.css";

const NavTop = ({isLoading}) => {
  return (
    <nav id="NavTop first-nav" className="d-flex justify-content-between first-nav text-light">
      <div className="d-flex">
        <button className="btn btn-sm text-light m-1"><i className="fa fa-th-large"></i></button>
        <button className="btn btn-sm text-light m-1"><i className="fa fa-home"></i></button>
        <button className="btn btn-sm text-light m-1 font-weight-bold"><i className="fa fa-th-list"></i>&nbsp;&nbsp;&nbsp;Boards</button>
      </div>

      <div className="d-flex justify-content-center align-items-center first-nav text-light" id="centerhold">
        {isLoading ? "Loading....":"Trello"}
      </div>
      
      <div className="d-flex">
        <button className="btn btn-sm text-light m-1"><i className="fa fa-plus"></i></button>
        <button className="btn btn-sm text-light m-1"><i className="fa fa-info-circle"></i></button>
        <button className="btn btn-sm text-light m-1"><i className="fa fa-bell"></i></button>
        <button className="btn btn-sm text-light m-1 avatar profile p-0"></button>
      </div>
    </nav>
  );
};

export default NavTop;