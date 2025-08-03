import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CatrgoryList from "./CatrgoryList";
import { addCategoryApi } from "../services/allApis";

function Category() {
  const [show, setShow] = useState(false);
  const [addResponse, setAddResponse] = useState("");
  const [cat, setCat] = useState({
    name: "",
    videos: [],
  });

  // Open/close modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Submit category
  const handleSubmit = async () => {
    const { name } = cat;
    if (!name.trim()) {
      alert("Enter a valid category name");
      return;
    }

    const result = await addCategoryApi(cat);
    if (result?.status === 201) {
      alert("Category added successfully!");
      setCat({ name: "", videos: [] });
      setAddResponse(result);
      handleClose();
    } else {
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <>
      {/* Add Category Button */}
      <div className="d-grid mb-3">
        <button className="btn btn-outline-primary fw-semibold" onClick={handleShow}>
          ➕ Add Category
        </button>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label className="form-label fw-semibold">Category Name</label>
          <input
            type="text"
            value={cat.name}
            onChange={(e) => setCat({ ...cat, name: e.target.value })}
            placeholder="Enter category name"
            className="form-control shadow-sm"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add Category
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Category List Section */}
      <div className="mt-4">
        <CatrgoryList addres={addResponse} />
      </div>
    </>
  );
}

export default Category;
