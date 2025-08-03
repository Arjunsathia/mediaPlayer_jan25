import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Addvideo from "../components/Addvideo";
import VideoList from "../components/VideoList";
import Category from "../components/Category";

function Dashboard() {
  const [addResponse, setAddResponse] = useState("");

  return (
    <div className="dashboard-page text-white min-vh-100 py-4">
      <Container fluid>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center flex-wrap mb-4 px-2">
          {/* Left: Watch History */}
          <div className="d-flex align-items-center gap-3">
            <Link to="/his" className="btn btn-outline-warning btn-sm">
              ⏱️ Watch History
            </Link>

            {/* + Add Button */}
            <Addvideo addres={setAddResponse} isInline={true} />
          </div>

          {/* Right: Title & Logout */}
          <div className="d-flex align-items-center gap-3">
            <Link to="/log" className="btn btn-success btn-sm">
              Logout
            </Link>
          </div>
        </div>

        {/* Main Grid */}
        <Row className="g-3 px-2">
          {/* Video Library on Left */}
          <Col xs={12} md={8}>
            <VideoList add={addResponse} />
          </Col>

          {/* Categories on Right */}
          <Col xs={12} md={4}>
            <Category />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
