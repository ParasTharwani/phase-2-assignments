const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;


app.use(bodyParser.json());


let users = [
  { id: 1, name: 'paras', email: 'paras@gmail.com' },
  { id: 2, name: 'bushra', email: 'bushra@gmail.com' },
];


// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Get user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// Add a new user
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1, // Auto-increment ID
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update a user
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// Delete a user
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('User not found');
  }
});


app.listen(port, () => {
  console.log(`User management app running at http://localhost:${port}`);
});
