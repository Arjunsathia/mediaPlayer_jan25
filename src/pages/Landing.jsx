import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="d-flex align-items-center justify-content-around flex-wrap p-5 gap-4  text-light"
        style={{ minHeight: "70vh" }}
      >
        <div className="col-md-5">
          <h1 className="mb-4 fw-bold text-center text-md-start">Media Player</h1>
          <p className="lead" style={{ textAlign: "justify" }}>
            Watch, save and track your favorite videos with a fast, simple, and elegant media player.
          </p>
          <div className="d-grid mt-4">
            <Link className="btn btn-outline-light btn-lg" to={"/log"}>
              Explore Features
            </Link>
          </div>
        </div>
        <div className="col-md-5 text-center">
          <img
            className="img-fluid rounded shadow"
            src="https://cdn.dribbble.com/userupload/31414633/file/original-496176df3e40206d32526309850c8d64.png?resize=400x0"
            alt="Hero"
          />
        </div>
      </section>

      {/* Features Cards */}
      <section className="container my-5">
        <div className="row g-4 justify-content-center">
          {[
            {
              title: "SAVE YT VIDEOS",
              img: "https://i.pinimg.com/originals/4e/91/cd/4e91cd54e6b9b13c3ea3a0fd5ef35333.gif",
            },
            {
              title: "PLAY SAVED VIDEO",
              img: "https://i.pinimg.com/originals/98/69/9f/98699f9fdb9518e4c2f13f1b00488e01.gif",
            },
            {
              title: "SHOW VIDEO HISTORY",
              img: "https://i.pinimg.com/originals/ab/13/3e/ab133edc576f013aaf7c3c8ebd3a91c0.gif",
            },
          ].map((card, idx) => (
            <div className="col-md-4" key={idx}>
              <Card
                className="h-100 shadow-sm border-0"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Card.Img variant="top" src={card.img} style={{ height: "180px", objectFit: "cover" }} />
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <Card.Title className="fw-bold text-center">{card.title}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="container my-5 p-4 rounded bg-light shadow-sm">
        <div className="row align-items-center">
          <div className="col-md-5 mb-3 mb-md-0">
            <img
              src="https://img.freepik.com/free-photo/rendering-summer-digital-art-illustration_23-2151242797.jpg"
              className="img-fluid rounded"
              alt=""
            />
          </div>
          <div className="col-md-7">
            <h3 className="fw-bold text-dark">Simple, Fast and Secure</h3>
            <p className="mt-3 text-dark" style={{ textAlign: "justify" }}>
              Save and play your media with confidence. Our platform provides seamless experience with speed and security.
            </p>
          </div>
        </div>
      </section>

      {/* Final Section with Video */}
      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold">Watch your favorite videos and save them!</h2>
            <p className="mt-3 text-muted" style={{ textAlign: "justify" }}>
              Organize your media, track your history, and revisit your favorites anytime, all in one clean dashboard.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/FHVD9ft_ANw?si=FZFjYzbOXdeE2Ely"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
