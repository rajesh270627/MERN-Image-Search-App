// LoginPage.jsx
import React from 'react';

export default function LoginPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: 100 }}>
      <h2>Login with your account</h2>
      <div style={{ marginTop: 40 }}>
        <a href="http://localhost:5000/auth/google">
          <button style={{ padding: '10px 20px', margin: '10px' }}>
            Continue with Google
          </button>
        </a>
        <a href="http://localhost:5000/auth/github">
          <button style={{ padding: '10px 20px', margin: '10px' }}>
            Continue with GitHub
          </button>
        </a>
        <a href="http://localhost:5000/auth/facebook">
          <button style={{ padding: '10px 20px', margin: '10px' }}>
            Continue with Facebook
          </button>
        </a>
      </div>
    </div>
  );
}
