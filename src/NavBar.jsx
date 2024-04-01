import React from "react";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import person from "../src/images/Users.png";

export default function NavBar({ Toggle }) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-white bg-white px-3">
        <i
          className="navbar-brand bi bi-justify-left fs-4"
          onClick={Toggle}
        ></i>
        <h1>Welcome </h1>

        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-justify"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="ms-auto">
            <img style={{ marginRight: "10px" }} src={person} alt="" />
            <button type="button" class="btn btn-danger">
              Log out
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
