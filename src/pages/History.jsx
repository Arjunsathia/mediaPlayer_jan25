import React, { useEffect, useState } from "react";
import { getHistoryApi, deleteHistoryApi } from "../services/allApis";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await getHistoryApi();
    if (result.status === 200) {
      setHistory(result.data);
    }
  };

  const handleDelete = async (id) => {
    const result = await deleteHistoryApi(id);
    if (result.status === 200) {
      getData();
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className="container py-4">
      <h2 className="text-white text-center mb-4">📜 Watch History</h2>
      {history.length > 0 ? (
        <div className="table-responsive shadow rounded">
          <table className="table text-center align-middle">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Thumbnail</th>
                <th>Video URL</th>
                <th>Date & Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td className="text-start">{item.title}</td>
                  <td>
                    <img
                      src={item.imageUrl}
                      alt="thumb"
                      width={100}
                      height={60}
                      className="rounded"
                    />
                  </td>
                  <td>
                    <a href={item.watchUrl} target="_blank" rel="noreferrer">
                      Watch
                    </a>
                  </td>
                  <td>{item.currentDateTime}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDelete(item.id)}
                      title="Delete"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h4 className="text-center text-warning my-5">
          No watch history available.
        </h4>
      )}
    </div>
  );
}

export default History;
