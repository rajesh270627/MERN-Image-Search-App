import React, { useEffect, useState } from "react";
import "./topsearches.css";

function TopSearches({ refreshTrigger = 0 }) {
  const [top, setTop] = useState([]);

  const load = async () => {
    try {
      const res = await fetch(
       
        `http://localhost:5000/api/top-searches?ts=${Date.now()}`,
        {
          credentials: "include",
          cache: "no-store",
          headers: { "Cache-Control": "no-cache" },
        }
      );
      const data = await res.json();
      setTop(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error("❌ Top searches fetch failed:", e);
    }
  };

  useEffect(() => {
    load();
  }, [refreshTrigger]); 

  if (!top.length) return null;

  return (
    <div className="top-banner">
      <h3>🔥 Top Searches</h3>
      <div className="search-tags">
        {top.map((item) => (
          <span key={item._id} className="tag">
            {item._id} ({item.count})
          </span>
        ))}
      </div>
    </div>
  );
}

export default TopSearches;
