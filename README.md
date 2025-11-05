# 🌄 MERN Image Search App

A full-stack **MERN application** that lets users **search images from Unsplash**, view **top search keywords**, maintain **personal search history**, and login using **Google / GitHub / Facebook OAuth**.

<div align="center">

✅ **MERN Stack** — MongoDB, Express, React, Node  
✅ **OAuth Login** — Google, GitHub, Facebook  
✅ **Protected Search** — Only logged-in users can search  
✅ **Real-time Search & History** stored in MongoDB  

</div>

---

## ✨ Features

| ✅ Feature | Description |
|----------|-------------|
| 🔐 OAuth Login | Google / GitHub / Facebook |
| 🔍 Image Search | Uses Unsplash API (High quality images) |
| 🌟 Top Searches | Displays 5 most-searched keywords |
| 🕒 History | Each user’s search history stored separately |
| ↩️ Click-to-Re-Search | Users can click history items |
| 📦 Multi-Select | Users can select multiple images |
| 🧱 Responsive Grid | Clean 4-column masonry layout |
| 🔒 Protected Routes | Passport + cookie-session |

---

## 📁 Folder Structure

```
MERN-Image-Search-App/
│
├── client/                  # React Frontend
│   ├── public/              # Static assets & HTML
│   └── src/
│       ├── Components/      # Navbar, TopSearches, HistorySidebar
│       ├── pages/           # SearchPage.jsx
│       └── App.js           # Routing + Auth logic
│
├── server/                  # Express Backend
│   ├── config/              # OAuth + Passport strategies
│   ├── models/              # User & Search schema
│   ├── routes/              # Auth + Search APIs
│   └── index.js             # Main server app / middleware
│
└── README.md
```

---

## 🚀 Installation & Setup

### ✅ 1️⃣ Clone the Repository

```bash
git clone https://github.com/rajesh270627/MERN-Image-Search-App.git
cd MERN-Image-Search-App
```

---

### ✅ 2️⃣ Backend Setup (Server)

```bash
cd server
npm install
```

Create `.env` inside `server/`:

```
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
```

✅ Get Unsplash API Key:  
👉 https://unsplash.com/developers/apps

Run backend:

```bash
npm start
```

✅ Server runs at → http://localhost:5000

---

### ✅ 3️⃣ Frontend Setup (Client)

```bash
cd client
npm install
npm start
```

✅ React App runs at → http://localhost:3000

---

## 🧪 Test APIs Using Postman / cURL

### 🔹 ✅ 1. Get Top Searches

**GET**
```
http://localhost:5000/api/top-searches
```

**cURL**
```bash
curl http://localhost:5000/api/top-searches
```

---

### 🔹 ✅ 2. Search Images

**POST**
```
http://localhost:5000/api/search
```

**Body (JSON)**
```json
{ "term": "cars", "page": 1 }
```

**cURL**
```bash
curl -X POST http://localhost:5000/api/search -H "Content-Type: application/json" -d '{"term":"cars","page":1}'
```

---

### 🔹 ✅ 3. User Search History

**GET**
```
http://localhost:5000/api/history
```

**cURL**
```bash
curl http://localhost:5000/api/history
```

---

## 📸 Suggested Screenshots to Include in Repo

✅ Google / GitHub / Facebook OAuth login page  
✅ Search results page with responsive grid  
✅ Multi-select active selection bar  
✅ Top Searches banner  
✅ Search history sidebar with clickable history  

---

## ⭐ Contribute & Support

If this project helped you, don’t forget to **star ⭐ the repository** and share it!
