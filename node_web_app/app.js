const express = require('express');
const app = express();
const port = 3000;

// Import routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// Middleware
app.use(express.json());

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
