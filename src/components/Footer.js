import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-dark text-light">
        <div className="col-md-4 d-flex align-items-center">
          <Link to="/" className="mb-3 me-2 mb-md-0 text-muted
            text-decoration-none lh-1">
          </Link>
          <p className="mb-3 mb-md-0 ">© 2023 Seth Kitchen, Inc</p>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex"></ul>
      </footer>
    </div>
  );
}