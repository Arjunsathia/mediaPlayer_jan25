import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { addHistoryApi, deleteVideo } from "../services/allApis";

function VideoCard({ vid, delres, delStatus }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const { id, title, imageUrl, watchUrl } = vid;
    const now = new Date();
    const currentDataTime = now.toLocaleString();
    const data = { videoId: id, title, watchUrl, imageUrl, currentDataTime };
    await addHistoryApi(data);
  };

  const handleDelete = async () => {
    const result = await deleteVideo(vid?.id);
    if (result.status === 200) {
      alert("✅ Video deleted successfully.");
      delres(result);
    } else {
      alert("❌ Failed to delete video.");
    }
  };

  const handleDrag = (e) => {
    e.dataTransfer.setData("video", JSON.stringify(vid));
  };

  return (
    <>
      <Card
        style={{ width: "280px", color: "#f8f9fa" }}
        className="border-0 rounded-3 shadow-sm"
        draggable
        onDragStart={handleDrag}
      >
        <Card.Img
          variant="top"
          onClick={handleShow}
          src={vid.imageUrl}
          alt={vid.title}
          style={{
            cursor: "pointer",
            borderTopLeftRadius: "0.75rem",
            borderTopRightRadius: "0.75rem",
            height: "160px",
            objectFit: "cover",
          }}
        />
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Title className="fs-6 text-light">{vid.title}</Card.Title>
            {!delStatus && (
              <Button
                variant="outline-danger"
                size="sm"
                onClick={handleDelete}
              >
                <i className="fa-solid fa-trash"></i>
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
      >
        <Modal.Header closeButton className=" text-light">
          <Modal.Title>{vid.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <iframe
            width="100%"
            height="400"
            src={`${vid.watchUrl}&autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoCard;
