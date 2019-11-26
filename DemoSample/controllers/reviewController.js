const Review = require('./../models/reviewModel');
const factory = require('./handlerFactory');
// const catchAsync = require('./../utils/catchAsync');

exports.setTourUserIds = (req, res, next) => {
  // Allow nested Route
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id; // We get req.user from protect middle ware
  next();
};

exports.createReview = factory.createOne(Review);
exports.deleteReview = factory.deleteOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.getReview = factory.getOne(Review);
exports.getAllReviews = factory.getAll(Review);

// exports.deleteReview = catchAsync(async (req, res, next) => {
//   const review = await Review.findByIdAndDelete(req.params.id);

//   if (!review) {
//     return next(new AppError('No review found with that ID', 404));
//   }
//   res.status(204).json({
//     status: 'success',
//     data: null
//   });
// });

// exports.getAllReviews = catchAsync(async (req, res, next) => {
//   const features = new APIFeatures(Review.find(filter), req.query)
//     .filter()
//     .sort()
//     .limitFields()
//     .paginate();
//   const reviews = await features.query;

//   // SEND RESPONSE
//   res.status(200).json({
//     status: 'success',
//     results: reviews.length,
//     data: {
//       reviews
//     }
//   });
// });
