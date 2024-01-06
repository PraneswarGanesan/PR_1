
// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs').promises;
// const app = express();
// const port = 3001;

// app.use(bodyParser.json());

// // Enable CORS
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*'); // Change '*' to your frontend's actual origin in production
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

// // File path for users.json
// const usersFilePath = 'users.json';

// // Helper function to read user data from the file
// const readUsersFromFile = async () => {
//   try {
//     const fileData = await fs.readFile(usersFilePath, 'utf-8');
//     return JSON.parse(fileData);
//   } catch (error) {
//     console.error('Error reading users file:', error.message);
//     return [];
//   }
// };

// // Helper function to write user data to the file
// const writeUsersToFile = async (users) => {
//   try {
//     await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), 'utf-8');
//   } catch (error) {
//     console.error('Error writing users file:', error.message);
//   }
// };

// // Login route
// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   const users = await readUsersFromFile();
//   const user = users.find((u) => u.username === username && u.password === password);

//   if (user) {
//     res.json(user);
//   } else {
//     res.status(401).json({ message: 'Invalid credentials' });
//   }
// });

// // Signup route
// app.post('/signup', async (req, res) => {
//   const newUser = req.body;
//   const users = await readUsersFromFile();

//   // Check if the username is already taken
//   if (users.some((u) => u.username === newUser.username)) {
//     res.status(400).json({ message: 'Username already taken' });
//   } else {
//     users.push(newUser);
//     await writeUsersToFile(users);
//     res.json(newUser);
//   }
// });

// // Update user route
// app.put('/updateUser', async (req, res) => {
//   const { id, username, password } = req.body;
//   let users = await readUsersFromFile();

//   const userIndex = users.findIndex((u) => u.id === id);

//   if (userIndex !== -1) {
//     users[userIndex] = { id, username, password };
//     await writeUsersToFile(users);
//     res.json(users[userIndex]);
//   } else {
//     res.status(404).json({ message: 'User not found' });
//   }
// });

// // Logout route
// app.post('/logout', (req, res) => {
//   // Perform any necessary cleanup or logging out logic
//   res.json({ message: 'Logout successful' });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });




const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises; 
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3001;  

app.use(bodyParser.json()); 
app.use(cors());

// Serve static files from the 'assets' folder inside 'src/backend'
app.use(express.static(path.join(__dirname, 'assets')));


// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Change '*' to your frontend's actual origin in production
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// File path for users.json
const usersFilePath = 'users.json';
const productsFilePath = 'product.json';

// Helper function to read user data from the file
const readUsersFromFile = async () => {
  try {
    const fileData = await fs.readFile(usersFilePath, 'utf-8');
    return JSON.parse(fileData);
  } catch (error) {
    console.error('Error reading users file:', error.message);
    return [];
  }
};

// Helper function to write user data to the file
const writeUsersToFile = async (users) => {
  try {
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing users file:', error.message);
  }
};

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const users = await readUsersFromFile();
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    res.json(user);
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Signup route
app.post('/signup', async (req, res) => {
  const newUser = req.body;
  const users = await readUsersFromFile();

  // Check if the username is already taken
  if (users.some((u) => u.username === newUser.username)) {
    res.status(400).json({ message: 'Username already taken' });
  } else {
    users.push(newUser);
    await writeUsersToFile(users);
    res.json(newUser);
  }
});

// Update user route
app.put('/updateUser', async (req, res) => {
  const { id, username, password } = req.body;
  let users = await readUsersFromFile();

  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex !== -1) {
    users[userIndex] = { id, username, password };
    await writeUsersToFile(users);
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Logout route
app.post('/logout', (req, res) => {
  // Perform any necessary cleanup or logging out logic
  res.json({ message: 'Logout successful' });
});

app.get('/products', async (req, res) => {
  try {
    const products = await readProductsFromFile();
    res.json(products);
  } catch (error) {
    console.error('Error reading products file:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

const readProductsFromFile = async () => {
  try {
    const fileData = await fs.readFile(productsFilePath, 'utf-8');
    return JSON.parse(fileData);
  } catch (error) {
    console.error('Error reading products file:', error.message);
    return [];
  }
};


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



