var restify = require('restify');


var server = restify.createServer({
  name: 'triangle-service',
  version: '1.0.0',
});

server.get('/triangles/:name', function (req, res, next) {
  var result = {
    name: req.params.name,
  };

  res.send(200, result);
});

server.listen(process.env.HTTP_PORT, function() {
  console.log('%s listening at %s', server.name, server.url);
});
