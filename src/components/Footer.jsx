import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-light pt-5 pb-3 mt-5">
      <hr />

      <div className="container">
        <div className="row g-4">
          {/* About */}
          <div className="col-md-5">
            <h4 className="fw-bold mb-3">🎵 Media Player 2025</h4>
            <p className="text-light-50" style={{ textAlign: "justify" }}>
              A modern, sleek platform to watch, save, and manage your favorite
              videos. Enjoy seamless experience with a fast, responsive and
              user-friendly interface.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <Link
                  to="/"
                  className="text-light text-decoration-none hover-link"
                >
                  🏠 Landing
                </Link>
              </li>
              <li>
                <Link
                  to="/log"
                  className="text-light text-decoration-none hover-link"
                >
                  🔐 Login
                </Link>
              </li>
              <li>
                <Link
                  to="/reg"
                  className="text-light text-decoration-none hover-link"
                >
                  📝 Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Feedback */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Feedback</h5>
            <textarea
              placeholder="Enter your feedback"
              className="form-control bg-secondary border-0 mb-3"
              rows={3}
            ></textarea>
            <button className="btn btn-outline-light w-100">Send</button>
          </div>
        </div>

        <hr className="border-top border-light mt-4" />

        <div className="text-center mt-3">
          <p className="mb-0 text-muted">
            &copy; 2025 Media Player. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
