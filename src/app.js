require('dotenv');

const express = require('express');
const cors = require('cors');
const { errorHandler } = require('./Middlewares/error.middleware');
const LoginRouter = require('./Routes/login.routes');
const UsersRouter = require('./Routes/users.routes');
const TasksRouter = require('./Routes/tasks.routes');

const app = express();

app.use(cors())
app.use(express.json());
app.use(errorHandler);

app.get('/', (req, res) => {
  return res.status(200).json('Welcome to task manager api, these are the available endpoints: users, tasks, login');
})

app.use('/login', LoginRouter);
app.use('/users', UsersRouter);
app.use('/tasks', TasksRouter);

const PORT = process.env.PORT || 3001;
app.listen(3040, () => {
  console.log(`App listening on port ${PORT}`);
});
