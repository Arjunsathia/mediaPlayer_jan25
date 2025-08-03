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
    if (result.status === 200) {
      setVideo(result.data);
    }
  };

  return (
    <div className="p-4 rounded shadow-sm">
      <h3 className="text-light mb-4 text-center">📺 Video Library</h3>
      {video.length > 0 ? (
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {video.map((item) => (
            <VideoCard key={item.id} vid={item} delres={setDeleteResponse} />
          ))}
        </div>
      ) : (
        <h5 className="text-center text-warning mt-4">No videos added yet.</h5>
      )}
    </div>
  );
}

export default VideoList;
