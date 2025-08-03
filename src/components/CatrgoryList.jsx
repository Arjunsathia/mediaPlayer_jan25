import React, { useState, useEffect } from "react";
import {
  addVideoToCategoryApi,
  deleteCategoryApi,
  getCategoryApi,
} from "../services/allApis";
import VideoCard from "./VideoCard";

function CatrgoryList({ addres }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  }, [addres]);

  const getData = async () => {
    const result = await getCategoryApi();
    if (result.status === 200) {
      setList(result.data);
    }
  };

  const handleDelete = async (id) => {
    const result = await deleteCategoryApi(id);
    if (result.status === 200) {
      getData();
    } else {
      alert("Category Deletion Failed");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = async (e, cat) => {
    e.preventDefault();
    const videoData = JSON.parse(e.dataTransfer.getData("video"));
    const existing = cat.videos.find((item) => item.id === videoData.id);
    if (existing) {
      alert("Video already added to category");
    } else {
      cat.videos.push(videoData);
      const result = await addVideoToCategoryApi(cat.id, cat);
      if (result.status === 200) {
        getData();
      } else {
        alert("Video add failed");
      }
    }
  };

  return (
    <div className="my-3">
      {list.length > 0 ? (
        list.map((item) => (
          <div
            key={item.id}
            className="border border-2 border-info rounded mb-3 shadow-sm"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, item)}
          >
            <div className="p-3 bg-info bg-opacity-25 d-flex justify-content-between align-items-center position-relative">
              <h5 className="m-0 fw-bold">{item.name}</h5>
              <button
                onClick={() => handleDelete(item.id)}
                className="btn btn-outline-danger btn-sm"
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
            <div className="p-3">
              {item.videos.length > 0 ? (
                item.videos.map((video) => (
                  <VideoCard key={video.id} vid={video} delStatus={true} />
                ))
              ) : (
                <p className="text-muted">No videos in this category</p>
              )}
            </div>
          </div>
        ))
      ) : (
        <h4 className="text-center text-warning mt-4">No Categories Added</h4>
      )}
    </div>
  );
}

export default CatrgoryList;
