import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="container-fluid py-3 px-5  bg-secondary">
        <div className="row">
          <div className="col">
            <h3 className="text-center text-dark">Media player 2025</h3>
            <p className="text-dark" style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur commodi veritatis aperiam amet voluptas alias
              doloribus animi sequi qui suscipit rem, necessitatibus dolorum
              odit tenetur nam molestiae cupiditate ullam nostrum?
            </p>
          </div>
          <div className="col-2">
            <h3 className="text-center text-dark">Links</h3>
            <div className="d-flex justify-content-around gap-2 flex-column text-center">
              <Link to={"/"} className="text-dark">
                Landing
              </Link>
              <Link to={"/log"} className="text-dark">
                Login
              </Link>
              <Link to={"/reg"} className="text-dark">
                Registration
              </Link>
            </div>
          </div>
          <div className="col">
            <h3 className="text-center text-dark">Feedback</h3>
            <textarea
              name=""
              placeholder="Enter your feedbacks"
              className="form-control my-3 bg-dark text-light"
              id=""
            ></textarea>
            <button className="btn btn-dark text-light">Send</button>
          </div>
        </div>
        <div>
          <p className="text-center text-dark my-3">
            Media player &copy; All copyrights reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
