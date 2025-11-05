# MERN-Image-Search-App

# We Can Search Images.Images are fetched by using Unsplash API..

# 🌄 MERN Image Search App

A full-stack **MERN** application that allows users to log in using **Google, GitHub, and Facebook OAuth**, search images from **Unsplash**, view **top searches**, and track **personal search history**.

---

## ✅ Features

✅ Login with **Google / GitHub / Facebook**  
✅ Only logged-in users can search  
✅ Search images using **Unsplash API**  
✅ 4-column responsive image grid  
✅ Multi-select images with selection counter  
✅ **Top 5 most searched keywords**  
✅ **User search history** stored in MongoDB  
✅ User can click history item to re-search  
✅ Protected routes using Passport + cookie-session

---

## 📁 Folder Structure

MERN-Image-Search-App/
│
├── client/ # React Frontend
│ ├── public/ # Static assets + logo + index.html
│ └── src/
│ ├── Components/ # Navbar, TopSearches, HistorySidebar
│ ├── pages/ # SearchPage.jsx
│ └── App.js # Routing + Auth logic
│
├── server/ # Express Backend
│ ├── config/ # OAuth Strategies (Passport)
│ ├── models/ # User + Search Schema
│ ├── routes/ # Auth + Search API routes
│ └── index.js # App entrypoint, middleware, sessions
│
└── README.md



---

## ✅ Installation & Setup

### 1️⃣ Clone Repository

git clone https://github.com/rajesh270627/MERN-Image-Search-App.git
cd MERN-Image-Search-App
cd server
npm install

MONGO_URI=mongodb://127.0.0.1:27017/mernapp
SESSION_SECRET=your_secret_key
CLIENT_ORIGIN=http://localhost:3000

UNSPLASH_ACCESS_KEY=YOUR_UNSPLASH_API_KEY

GOOGLE_CLIENT_ID=xxxxxxxxxxx
GOOGLE_CLIENT_SECRET=xxxxxxxxxxx
GOOGLE_CALLBACK_URL=http://localhost:5000/auth/google/callback

GITHUB_CLIENT_ID=xxxxxxxxxxx
GITHUB_CLIENT_SECRET=xxxxxxxxxxx
GITHUB_CALLBACK_URL=http://localhost:5000/auth/github/callback

FACEBOOK_CLIENT_ID=xxxxxxxxxxx
FACEBOOK_CLIENT_SECRET=xxxxxxxxxxx
FACEBOOK_CALLBACK_URL=http://localhost:5000/auth/facebook/callback

Get Unsplash API Key: https://unsplash.com/developers/apps

YOUR UNSPLASH API KEY
Unsplash API key==xxxxxxxxxxx

✅ Server runs at: http://localhost:5000


🎨 Frontend Setup (Client)
cd client
npm install
npm start

✅ Runs at: http://localhost:3000

✅ API Endpoints (Postman or cURL)

🔹 ✅ Top Searches

GET

http://localhost:5000/api/top-searches


cURL

curl http://localhost:5000/api/top-searches

🔹 ✅ Search Images

POST

http://localhost:5000/api/search


Body → JSON

{ "term": "cars", "page": 1 }


cURL

curl -X POST http://localhost:5000/api/search \
-H "Content-Type: application/json" \
-d '{"term":"cars","page":1}'

🔹 ✅ User Search History

GET

http://localhost:5000/api/history


cURL

curl http://localhost:5000/api/history

✅ Visual Proof to Include in repo

✅ OAuth Login screenshots
✅ Search results page
✅ Multi-select active images
✅ Top Searches banner
✅ History sidebar
