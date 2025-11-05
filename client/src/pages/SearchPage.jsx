import React, { useState } from "react";
import "./searchpage.css";
import TopSearches from "../Components/TopSearches";
import HistorySidebar from "../Components/HistorySidebar";

function SearchPage() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState("");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);
  const [refresh, setRefresh] = useState(0); 
  const handleSearch = async () => {
    if (!term.trim()) return alert("Enter search term");

    setResults([]);
    setSelected([]);
    setPage(1);

    const res = await fetch("http://localhost:5000/api/search", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ term, page: 1 }),
    });

    const data = await res.json();

    if (data?.results) {
      setResults(data.results);
      setSearched(term);
      setRefresh((r) => r + 1); 

      
      window.dispatchEvent(new Event("refresh-history"));
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;

    const res = await fetch("http://localhost:5000/api/search", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ term: searched || term, page: nextPage }),
    });

    const data = await res.json();
    setResults((prev) => [...prev, ...(data.results || [])]);
    setPage(nextPage);
  };

  const toggleSelect = (img) => {
    setSelected((prev) =>
      prev.includes(img) ? prev.filter((x) => x !== img) : [...prev, img]
    );
  };

  return (
    <div className="page-wrapper">

      {}
      <HistorySidebar onSelect={(clickedTerm) => {
  setTerm(clickedTerm);
  setSearched(clickedTerm);
  setPage(1);
  setResults([]);

  fetch("http://localhost:5000/api/search", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ term: clickedTerm, page: 1 }),
  })
    .then((res) => res.json())
    .then((data) => setResults(data.results || []));
}} />

      
      {}
      <div className="main-search-section">

        {}
        <TopSearches refreshTrigger={refresh} />

        <h2 className="ham">Search Images</h2>

        <div className="search-bar">
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search flowers, cars, mountains..."
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {searched && (
          <p>
            You searched for <b>{searched}</b> — {results.length} results loaded.
          </p>
        )}

        <p className="selected-count">✅ Selected: {selected.length} images</p>

        <div className="grid">
          {results.map((img) => (
            <div key={img.id} className="img-card">
              <img src={img.urls.small} alt="img" />
              <input
                type="checkbox"
                className="checkbox"
                checked={selected.includes(img)}
                onChange={() => toggleSelect(img)}
              />
            </div>
          ))}
        </div>

        {results.length > 0 && (
          <button onClick={loadMore} className="load-more-btn">
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
