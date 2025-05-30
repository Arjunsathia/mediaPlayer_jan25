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
    // console.log(video);
    const { title, imageUrl, watchUrl } = video;
    if (!title || !imageUrl || !watchUrl) {
      alert("Enter valid inputs");
    } else {
      const videoChar = watchUrl.split("v=")[1];
      // console.log(videoChar);
      const embedUrl = `https://www.youtube.com/embed/${videoChar}?si=Ukqzx5VpEPI0sWcO`;
      // console.log(embedUrl);

      video.watchUrl = embedUrl;
      const result = await addVideoApi(video);
      console.log(result);
      if (result.status == 201) {
        alert("Video Added Successfully!!!");
        addres(result);

        setVideo({
          title: "",
          imageUrl: "",
          watchUrl: "",
        });
        handleClose();
      } else {
        alert("Video upload failed!!");
      }
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn btn-outline-light m-2" onClick={handleShow}>
        {" "}
        +
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="title" label="Video Title" className="mb-2">
            <Form.Control
              type="text"
              placeholder="title"
              onChange={(e) => setVideo({ ...video, title: e.target.value })}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="img"
            label="Video Thumbnail URL"
            className="mb-2"
          >
            <Form.Control
              type="text"
              placeholder="thumbnail"
              onChange={(e) => setVideo({ ...video, imageUrl: e.target.value })}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="video"
            label="Youtube Video URL"
            className="mb-2"
          >
            <Form.Control
              type="text"
              placeholder="Video"
              onChange={(e) => setVideo({ ...video, watchUrl: e.target.value })}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
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
