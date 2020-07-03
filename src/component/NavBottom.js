import React from "react";
import "./NavBottom.css";

const NavBottom = () => {
  return (
    <nav id="second-nav" className="NavBottom d-flex flex-wrap justify-content-between second-nav text-light p-1">
      <div className="d-flex">
        <button className="btn btn-sm text-light m-1 font-weight-bold px-3 board-name">Trello</button>
        <button className="btn btn-sm text-light m-1 stretch-x"><i className="far fa-star"></i></button>
        <button className="btn btn-sm text-light m-1">FE <span className="badge badge-pill badge-info">&nbsp;Free&nbsp;</span></button>
        <button className="btn btn-sm text-light m-1"><i className="fa fa-users"></i>&nbsp;&nbsp;Team Visible</button>
        <button className="btn btn-sm text-light m-1">&nbsp;Invite&nbsp;</button>
      </div>
      <div className="d-flex justify-content-end" style={{flexGrow: "1"}}>
        <button className="btn btn-sm text-light m-1"><i className="fa fa-cogs"></i>&nbsp;&nbsp;Butler (11 Tips)</button>
        <button className="btn btn-sm text-light m-1"><i className="fa fa-ellipsis-h"></i>&nbsp;&nbsp;Show Menu</button>
      </div>
    </nav>
  );
};

export default NavBottom;