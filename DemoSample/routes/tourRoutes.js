const express = require('express');
const tourController = require('./../controllers/tourController')

const router = express.Router();

router
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.createTour);

router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);


module.exports = router;

// Here we are exporting the router so the the importer of the tourRoute can use this route
// 'module.exports' or just 'exports' is the way to export the function or variable.