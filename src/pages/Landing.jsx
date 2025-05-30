import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div
        style={{ height: "70vh" }}
        className="d-flex p-4 align-items-center justify-content-around flex-wrap gap-4"
      >
        {" "}
        <div className="col">
          <h3 className="text-center">Media Player</h3>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit et odio aspernatur. Saepe, non, iste molestiae
            temporibus ullam eveniet recusandae mollitia explicabo in,
            necessitatibus nobis illo labore esse tempora ipsum.
          </p>
          <div className="d-grid">
            <Link className="btn btn-secondary" to={"/log"}>
              Click for More...
            </Link>
          </div>
        </div>
        <div className="col justify-content-center">
          <img
            className="img-fluid"
            src="https://cdn.dribbble.com/userupload/31414633/file/original-496176df3e40206d32526309850c8d64.png?resize=400x0"
            alt=""
          />
        </div>
      </div>

      <div className="w-100 d-flex justify-content-around my-3">
        <Card style={{ width: "18rem", height: "20rem" }}>
          <Card.Img
            variant="top"
            src="https://i.pinimg.com/originals/4e/91/cd/4e91cd54e6b9b13c3ea3a0fd5ef35333.gif"
          />
          <Card.Body>
            <Card.Title>SAVE YT VIDEOS</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", height: "20rem" }}>
          <Card.Img
            variant="top"
            src="https://i.pinimg.com/originals/98/69/9f/98699f9fdb9518e4c2f13f1b00488e01.gif"
          />
          <Card.Body>
            <Card.Title>PLAY SAVED VIDEO</Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", height: "20rem" }}>
          <Card.Img
            variant="top"
            src="https://i.pinimg.com/originals/ab/13/3e/ab133edc576f013aaf7c3c8ebd3a91c0.gif"
          />
          <Card.Body>
            <Card.Title>SHOW VIDEO HISTORY</Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
          </Card.Body>
        </Card>
      </div>
      <div className="container border shadow border-2 my-2">
        <div className="row">
          <div className="col-4">
            <img
              src="https://img.freepik.com/free-photo/rendering-summer-digital-art-illustration_23-2151242797.jpg"
              className="w-100 "
              alt=""
            />
          </div>
          <div className="col-8 p-3 d-flex flex-column justify-content-center">
            <h3>Simple, Fast and secure</h3>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              magni tempora architecto voluptatibus, iusto nemo cupiditate
              officiis perspiciatis debitis, voluptates obcaecati deserunt
              aliquid! Optio natus ut, nam esse nisi exercitationem!
            </p>
          </div>
        </div>
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col">
            <h2>Watch your favorite videos and save to them!</h2>
            <p className="mt-3" style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              tenetur odit pariatur numquam esse, officia corrupti cupiditate
              magni molestiae cumque ipsum facilis asperiores accusamus sapiente
              earum eaque! Doloribus, minima nemo!
            </p>
          </div>
          <div className="col">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/FHVD9ft_ANw?si=FZFjYzbOXdeE2Ely"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
