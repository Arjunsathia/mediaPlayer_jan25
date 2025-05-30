import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Addvideo from "../components/Addvideo";
import VideoCard from "../components/VideoCard";
import Category from "../components/Category";
import { Link } from "react-router-dom";
import VideoList from "../components/VideoList";

function Dashboard() {
  const [addResponse, setAddResponse] = useState("");
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
          <h2>Dashboard</h2>
          <div>
            <Link to={"/his"}>Watch History</Link>
            <Link to={"/log"} className="btn btn-success ms-3">
              Logout
            </Link>
          </div>
        </div>
        <Row>
          <Col sm={6} md={2}>
            <Addvideo addres={setAddResponse} />
          </Col>
          <Col sm={6} md={7}>
            <VideoList add={addResponse} />
          </Col>
          <Col sm={12} md={3}>
            <Category />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
