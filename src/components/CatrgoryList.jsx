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
    if (result.status == 200) {
      setList(result.data);
      console.log(result.data);
    }
  };
  const handleDelete = async (id) => {
    const result = await deleteCategoryApi(id);
    if (result.status == 200) {
      getData();
    } else {
      alert("Category Deletion Failed");
    }
  };

  const handleDragOver = (e) => {
    console.log("Drag over");
    e.preventDefault();
  };

  const handleDrop = async (e, cat) => {
    console.log("Dropping");
    e.preventDefault();
    const videoData = JSON.parse(e.dataTransfer.getData("video"));
    // console.log(videoData);
    // console.log(cat);
    const existing = cat.videos.find((item) => item.id == videoData.id);
    if (existing) {
      alert("Video already added to category");
    } else {
      cat.videos.push(videoData);
      console.log(cat);
      const result = await addVideoToCategoryApi(cat.id, cat);
      console.log(result);
      if (result.status == 200) {
        getData();
      } else {
        alert("Video added failed");
      }
    }
  };

  return (
    <>
      <div className="border border-2 my-2">
        {list.length > 0 ? (
          <>
            {list.map((item) => (
              <div className="m-2 border-info border ">
                <div
                  className="p-2 position-relative d-flex justify-content-between align-items-center"
                  onDragOver={(e) => handleDragOver(e)}
                  onDrop={(e) => handleDrop(e, item)}
                >
                  <h3 className="m-0">{item.name}</h3>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="btn position-absolute end-0 me-3"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
                <div>
                  {item.videos.length > 0 && (
                    <>
                      {item.videos?.map((video) => (
                        <VideoCard vid={video} delStatus={true}/>
                      ))}
                    </>
                  )}
                </div>
              </div>
            ))}
          </>
        ) : (
          <h2 className="text-center text-warning">No Category added </h2>
        )}
      </div>
    </>
  );
}

export default CatrgoryList;
