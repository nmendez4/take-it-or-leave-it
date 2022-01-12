const router = require('express').Router();

const apiRoutes = require('./api');
// const uploadRoutes = require('./upload-routes');

router.use('/api', apiRoutes);
// router.use('/uploads', apiRoutes);



router.use((req, res) => {
    res.status(404).end();
  });
  
  module.exports = router;

  
