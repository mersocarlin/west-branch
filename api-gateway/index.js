var restify = require('restify');
var axios = require('axios');


var server = restify.createServer({
  name: 'api-gateway',
  version: '1.0.0',
});

server.get('/api/squares', function (req, res, next) {
  executeRequest(res, process.env.SQUARE_SERVICE_URL, 'squares');
});

server.get('/api/triangles', function (req, res, next) {
  executeRequest(res, process.env.TRIANGLE_SERVICE_URL, 'triangles');
});

server.listen(process.env.HTTP_PORT, function() {
  console.log('%s listening at %s', server.name, server.url);
});

function executeRequest (res, url, param) {
  axios
    .get(url + '/' + param)
    .then(function (response) {
      res.send(200, response.data);
    })
    .catch(function (err) {
      res.send(201, { msg: 'error' });
    });
}
