import React, { useEffect, useState } from "react";
import { getHistoryApi, deleteHistoryApi } from "../services/allApis";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getData();
  },[]);

  const getData = async () => {
    const result = await getHistoryApi();
    console.log(result);
    if (result.status == 200) {
      setHistory(result.data);
    }
  };

  const handleDelete = async (id) => {
    const result = await deleteHistoryApi(id);
    // console.log(result);
    if (result.status == 200) {
      getData();
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className="container-fluid">
      <h2>Watch History</h2>
      {history.length > 0 ? (
        <table className="table table-secondary my-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Thumbnail</th>
              <th>URl</th>
              <th>Date and Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>
                  <img src={item.imageUrl} alt="" />
                </td>
                <td>{item.watchUrl}</td>
                <td>{item.currentDateTime}</td>
                <td>
                  <button className="btn" onClick={() => handleDelete(item.id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2 className="text-center text-warning my-5">No history available</h2>
      )}
    </div>
  );
}

export default History;
