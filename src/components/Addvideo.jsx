import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { addVideoApi } from "../services/allApis";

function Addvideo({ addres }) {
  const [show, setShow] = useState(false);
  const [video, setVideo] = useState({
    title: "",
    imageUrl: "",
    watchUrl: "",
  });

  const handleSubmit = async () => {
    const { title, imageUrl, watchUrl } = video;
    if (!title || !imageUrl || !watchUrl) {
      alert("Enter valid inputs");
    } else {
      const videoChar = watchUrl.split("v=")[1];
      const embedUrl = `https://www.youtube.com/embed/${videoChar}?si=Ukqzx5VpEPI0sWcO`;

      video.watchUrl = embedUrl;
      const result = await addVideoApi(video);

      if (result.status === 201) {
        alert("Video Added Successfully!");
        addres(result);

        setVideo({
          title: "",
          imageUrl: "",
          watchUrl: "",
        });
        handleClose();
      } else {
        alert("Video upload failed!");
      }
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        className="btn btn-outline-light m-2 rounded-circle shadow d-flex align-items-center justify-content-center"
        onClick={handleShow}
        title="Add Video"
        style={{
          width: "45px",
          height: "45px",
          fontSize: "1.5rem",
          padding: 0,
        }}
      >
        +
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="text-white">
          <Modal.Title>Upload New Video</Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          <FloatingLabel controlId="title" label="Video Title" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={video.title}
              onChange={(e) => setVideo({ ...video, title: e.target.value })}
            />
          </FloatingLabel>
          <FloatingLabel controlId="img" label="Thumbnail URL" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter image URL"
              value={video.imageUrl}
              onChange={(e) => setVideo({ ...video, imageUrl: e.target.value })}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="video"
            label="YouTube Video URL"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Enter YouTube URL"
              value={video.watchUrl}
              onChange={(e) => setVideo({ ...video, watchUrl: e.target.value })}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer className="">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addvideo;
