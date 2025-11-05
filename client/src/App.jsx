import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Components/Navbar";
import SearchPage from "./pages/SearchPage";
import History from "./Components/HistorySidebar";    

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/auth/current_user", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch(() => setUser(null));
  }, []);

  return (
    <Router>
      <Navbar user={user} />

      <div style={{ paddingTop: 90 }}>
        <Routes>
          {}
          <Route
            path="/"
            element={
              !user ? (
                <h2 style={{ textAlign: "center", marginTop: 100 }}>Please Login!</h2>
              ) : (
                <Navigate to="/search" replace />
              )
            }
          />

          {}
          <Route
            path="/search"
            element={user ? <SearchPage /> : <Navigate to="/" replace />}
          />

          {}
          <Route
            path="/history"
            element={user ? <History /> : <Navigate to="/" replace />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
