import React from "react";

export default function Navbar() {
  return (
    <nav class="navbar ">
      <div className="container-fluid">
        <div class="navbar-brand fs-2 fw-bold text-light">
          <img
            src="src/images/573c9be3db981bdb01103856ac26490e.webp"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          LIQUAL CLUB
        </div>
        <div className="d-flex">
          <div class="nav-item fs-4 m-2 me-3 ">
            <a class="nav-link px-3 py-2 rounded-pill" href="#">
              Home
            </a>
          </div>
          <div class="nav-item fs-4 m-2  ">
            <a class="nav-link px-3 py-2 rounded-pill" href="#">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
