import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { getVideosApi } from "../services/allApis";

function VideoList({ add }) {
  const [video, setVideo] = useState([]);
  const [deleteResponse, setDeleteResponse] = useState("");

  useEffect(() => {
    getData();
  }, [add, deleteResponse]);

  const getData = async () => {
    const result = await getVideosApi();
    console.log(result.data);
    if (result.status == 200) {
      setVideo(result.data);
    }
  };
  return (
    <>
      <div className="border border-dark border-1 p-2 mb-4">
        {video.length > 0 ? (
          <div className="d-flex flex-wrap justify-content-around">
            {video.map((item) => (
              <VideoCard vid={item} delres={setDeleteResponse} />
            ))}
          </div>
        ) : (
          <h2 className="text-center text-warning">No video added yet</h2>
        )}
      </div>
    </>
  );
}

export default VideoList;
