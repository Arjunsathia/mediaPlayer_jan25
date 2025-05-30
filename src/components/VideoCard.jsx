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
    const result = await addHistoryApi(data);
    console.log(result);
  };

  const handleDelete = async () => {
    const result = await deleteVideo(vid?.id);
    console.log(result);
    if (result.status === 200) {
      alert("Video Deleted Successfully!!!");
      delres(result);
    } else {
      alert("Video Deletion failed!!");
    }
  };

  const handleDrag = (e) => {
    console.log("Dragging");
    console.log(vid);
    e.dataTransfer.setData("video", JSON.stringify(vid));
  };

  return (
    <>
      <Card
        style={{ maxWidth: "18rem" }}
        className="my-2"
        draggable
        onDragStart={(e) => handleDrag(e)}
      >
        <Card.Img
          variant="top"
          style={{ cursor: "pointer" }}
          onClick={handleShow}
          src={vid.imageUrl}
        />
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title className="text-center">{vid.title}</Card.Title>
            {!delStatus && (
              <button className="btn" onClick={handleDelete}>
                <i className="fa-solid fa-trash"></i>
              </button>
            )}
          </div>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{vid.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="315"
            src={`${vid.watchUrl}&autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoCard;
