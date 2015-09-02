var config = require('../config');

module.exports = function(req, res, next) {
  var description, key;
  var invalid = false;
  var url = req.protocol + '://' + req.get('host') + req.originalUrl;

  var param0 = req.query.param0;
  var param1 = req.query.param1;
  var param2 = req.query.param2;
  var param3 = req.query.param3;

  for (key in req.query) {
    if (config.accepted_values.indexOf(req.query[key]) === -1) {
      invalid = true;
    }
  }

  if (invalid) {
    description = '';
  } else {
    description = config.description([param0, param1, param2, param3]);
  }

  res.render('index', {
    url: url,
    app_id: config.app_id,
    title: config.title,
    redirect_url: config.redirect_url,
    image_path: config.image_path,
    image_name: image_name,
    image_width: config.width,
    image_height: config.height,
    description: description
  });
}