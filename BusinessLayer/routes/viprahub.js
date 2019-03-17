var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  fileUpload.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
