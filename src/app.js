require('dotenv');

const express = require('express');
const { errorHandler } = require('./Middlewares/error.middleware');
const LoginRouter = require('./Routes/login.routes');
const UsersRouter = require('./Routes/users.routes');

const app = express();

app.use(express.json());
app.use(errorHandler);

app.use('/login', LoginRouter);
app.use('/users', UsersRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
