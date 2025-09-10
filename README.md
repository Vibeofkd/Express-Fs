🚀 Express.js User Management API

A simple Express.js REST API for managing users, with file-based storage using users.json.
This project demonstrates the basics of Express routing, middleware, and persistent storage.

✨ Features

📌 Get all users

📌 Get a single user by ID

📌 Register (create) a new user

📁 Data persistence with users.json

⚡ JSON & URL-encoded body parsing

📂 Project Structure
.
├── server.js       # Main Express server
├── users.json      # User data (auto-updated when adding users)
├── package.json
├── .gitignore
└── node_modules/

🛠 Installation & Setup

Clone the repository:

git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>


Install dependencies:

npm install


Start the server:

node server.js


The server will run at:

http://localhost:8000

📌 API Endpoints
➤ Get all users
GET /users

➤ Get user by ID
GET /users/:id

➤ Register a new user
POST /users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "1234"
}

⚡ Notes

users.json is automatically created if missing.

password is currently stored in plain text (for demo purposes). In real apps, always hash passwords (e.g., with bcrypt).

You can use Postman
 or curl to test API endpoints.

.
