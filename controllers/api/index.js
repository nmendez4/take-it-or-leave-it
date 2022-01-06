const router = require('express').Router();
const userRoutes = require('./user-routes');

// require Leahs test route for uploading photos
const uploadRoutes = require('./upload-routes');

router.use('/users', userRoutes);

// turn on route
router.use('/uploads', uploadRoutes);

module.exports = router;
