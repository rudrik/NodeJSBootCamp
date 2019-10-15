const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

//1) Middle Ware.  This is middle ware that will apply to each and every request.
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// app.use((req, res, next) => {
//   console.log('Hello from the middleware');
//   next();
// });

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//3) ROUTER  By doung this we are  mounting the middleware for different route
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRoutes);

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl}`
  });
  next();
});

module.exports = app;
