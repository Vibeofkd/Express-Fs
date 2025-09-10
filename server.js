import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Path to file
const usersFile = path.join(process.cwd(), 'users.json');

// Read users from file
function readUsers() {
  if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, JSON.stringify([], null, 2));
  }
  const data = fs.readFileSync(usersFile,);
  return JSON.parse(data);
}

// Write users to file
function writeUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2), );
}

// Homepage
app.get('/', (req, res) => {
  res.json('Welcome Here!');
});

// Get all users
app.get('/users', (req, res) => {
  const users = readUsers();
  res.json(users);
});

// Get user by Id
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const users = readUsers();
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

// Register user
app.post('/users', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, password and email are required' });
  }

  const users = readUsers();
  const newUser = {
    id: users.length + 1,
    name,
    email
    
  };

  users.push(newUser);
  writeUsers(users);

  res.status(201).json(newUser);
});

// Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
