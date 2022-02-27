const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
//if an unused route is used, display that it is "Wrong Route!"
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;