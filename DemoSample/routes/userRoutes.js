const express = require('express');

const userController = require('./../controllers/userController');

const router = express.Router();

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;

// Here we are exporting the router so the the importer of the userRoute can use this route
// 'module.exports' or just 'exports' is the way to export the function or variable.
