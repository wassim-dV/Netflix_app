# 📺 Netflix Clone

A full-stack web application inspired by Netflix, built with **React.js**, **Node.js**, **Express**, and **MongoDB**. This project offers a modern, responsive UI and dynamic content management for movies and TV shows, along with user authentication and favorites management.

## 🚀 Features

- 🔐 **JWT Authentication** (login/register)
- 🎞️ Dynamic movie display by category
- ❤️ Add/remove favorites
- 🔎 Search bar for quick movie lookup
- 🌙 Dark-themed modern UI
- 📱 Fully responsive design

## 🧰 Tech Stack

### Front-end:
- React.js
- React Router
- Axios
- Tailwind CSS

### Back-end:
- Node.js
- Express
- MongoDB
- JWT (JSON Web Token)
- Mongoose


> Add screenshots or GIFs of your UI for better visibility!

## 🛠️ Installation

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone

Front-end:

cd client
npm install

Back-end:

cd ../server
npm install

3. Set up environment variables
In the server/ directory, create a .env file and add:

env

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key

4. Run the app
Start server:


cd server
npm run dev

Start client:

cd client
npm start

Your app should now be running at http://localhost:3000 🎉

📂 Project Structure

netflix-clone/
├── client/         # React frontend
├── server/         # Express backend
├── README.md
└── ...
