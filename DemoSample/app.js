const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

//1) Middle Ware.  This is middle ware that will apply to each and every request.
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
    console.log('Hello from the middleware');
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

//3) ROUTER  By doung this we are  mounting the middleware for different route
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRoutes);

module.exports = app;
//4) START SERVER
