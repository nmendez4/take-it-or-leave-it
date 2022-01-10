const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
  });
  
  module.exports = router;

  
// index
// const router = require('express').Router();
// const homeRoutes = require('./home-routes.js');
// const dashboardRoutes = require('./dashboard-routes.js');
// // const homeController = require("./home");
// // const uploadController = require("./upload");
// const apiRoutes = require('./api');

// router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes);
// router.use('/api', apiRoutes);
// router.use(' /home', homeController);
// router.use('/upload', uploadController);

// let routes = (app) => {
//   router.get("/", homeController.getHome);

//   router.post("/upload", upload.single("file"), uploadController.uploadFiles);

//   return app.use("/", router);
// };

// router.use((req, res) => {
//   res.status(404).end();
// });

// module.exports = router;
