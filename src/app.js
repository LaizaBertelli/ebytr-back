require('dotenv');

const express = require('express');
const { errorHandler } = require('./Middlewares/error.middleware');
const LoginRouter = require('./Routes/login.routes');
const UsersRouter = require('./Routes/users.routes');
const TasksRouter = require('./Routes/tasks.routes');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
  res.headers("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.use(express.json());
app.use(errorHandler);

app.get('/', (req, res) => {
  return res.status(200).json('Welcome to task manager api, these are the available endpoints: users, tasks, login');
})

app.use('/login', LoginRouter);
app.use('/users', UsersRouter);
app.use('/tasks', TasksRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
