import React from "react";
import './style.css';
import logo from '../src/images/logo.png'

export default function Sidebar() {
  return (
    <div className="bg-white sidebar p-2">
      <div className="m-2">
        <img src={logo} alt="" />
        <span className="brand-name fs-4">i-Context</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <a className="list-group-item py-2">
          <i className="bi bi-speedometer2 fs-4 me-3"></i>
          <span >Dashboard</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-table fs-4 me-3"></i>
          <span >Author</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-power fs-4 me-3"></i>
          <span >Report</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-house fs-4 me-3"></i>
          <span >Setting</span>
        </a>
      </div>
    </div>
  );
}
