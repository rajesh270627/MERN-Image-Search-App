import React, { useEffect, useState } from "react";
import "./HistorySidebar.css";

function HistorySidebar({ onSelect }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();

    
    window.addEventListener("refresh-history", fetchHistory);
    return () => window.removeEventListener("refresh-history", fetchHistory);
  }, []);

  const fetchHistory = async () => {
    const res = await fetch("http://localhost:5000/api/history", {
      credentials: "include",
    });
    const data = await res.json();
    setHistory(data);
  };

  return (
    <div className="history-sidebar">
      <h2 className="hh">Recent Search History</h2>

      {history.length === 0 ? (
        <p className="empty">No searches yet</p>
      ) : (
        history.map(item => (
          <div
            key={item._id}
            className="history-item"
            onClick={() => onSelect(item.term)}   
          >
             <b>{item.term}</b>
            <br />
            <small>{new Date(item.timestamp).toLocaleString()}</small>
          </div>
        ))
      )}
    </div>
  );
}

export default HistorySidebar;
