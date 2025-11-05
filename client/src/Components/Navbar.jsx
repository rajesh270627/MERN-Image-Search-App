import React from "react";
import "./navbar.css";

function Navbar({ user }) {

  const goHome = () => {
    window.location.href = "/";  
  };

  return (
    <div className="navbar">

      {}
      <div className="nav-logo" onClick={goHome}>
      <img src="/logo.png" className="logo-img" alt="logo" />
     </div>

      {!user ? (
        <div className="login-buttons">
          <a href="http://localhost:5000/auth/google">
            <button>Google</button>
          </a>
          <a href="http://localhost:5000/auth/github">
            <button>GitHub</button>
          </a>
          <a href="http://localhost:5000/auth/facebook">
            <button>Facebook</button>
          </a>
        </div>
      ) : (
        <div className="user-section">
          <img src={user.avatar} alt="DP" className="avatar" />
          <span className="spam">{user.name}</span>
          <a href="http://localhost:5000/auth/logout">
            <button className="logout-btn">Logout</button>
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
