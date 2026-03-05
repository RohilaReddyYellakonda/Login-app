# Full-Stack Login Application (React + Node.js)

## 📌 Overview

This project is a simple **Full-Stack Login Application** built using **React (Frontend)** and **Node.js with Express (Backend)**.

The application allows users to log in using a username and password. If the credentials are correct (`admin/admin`), the user is redirected to a welcome page. Otherwise, an error message is displayed.

The application also **remembers the username after a successful login** using `localStorage`.

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* React Hooks
* Axios
* React Router

### Backend

* Node.js
* Express.js
* CORS Middleware

---

## 📂 Project Structure

```
Login-app
│
├── backend
│   ├── server.js
│   └── package.json
│
└── frontend
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── src
        ├── App.jsx
        ├── main.jsx
        ├── Login.jsx
        ├── Welcome.jsx
        ├── api.js
        └── App.css
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/YOUR_USERNAME/login-app.git
cd login-app
```

---

### 2️⃣ Start Backend Server

```
cd backend
npm install
npm run dev
```

Backend will run on:

```
http://localhost:5000
```

---

### 3️⃣ Start Frontend

Open another terminal:

```
cd frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🔑 Login Credentials

Use the following credentials to log in:

```
Username: admin
Password: admin
```

---

## 📡 API Endpoint

### POST /login

**Request Body**

```
{
  "username": "admin",
  "password": "admin"
}
```

**Success Response (200)**

```
{
  "message": "Login successful",
  "username": "admin"
}
```

**Error Response (401)**

```
{
  "message": "Invalid username or password"
}
```

---

## ✨ Features

* Simple login form
* Backend credential validation
* Proper HTTP status codes
* Error handling for invalid credentials
* Navigation to welcome page after login
* Username remembered using `localStorage`
* Clean project structure

---

## 🚀 Future Improvements

* Add authentication tokens (JWT)
* Add logout functionality
* Password hashing with bcrypt
* Database integration (MongoDB)

---

## 👨‍💻 Author

Developed as part of a **Full-Stack Developer Technical Test**.
