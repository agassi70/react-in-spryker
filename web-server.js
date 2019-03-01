const express = require('express');
const path = require('path');
const http = require('http');
const crypto = require('crypto');

const config = require('./server-config');

let webPath = config.WEB_PATH;

// This feature for Docker container
try {
  webPath = JSON.parse(webPath);
} catch (e) {

}

const webServer = express();
webServer.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const appRouter = express.Router();

// Point static path to dist
appRouter.use(express.static(path.join(__dirname, 'build/web')));

// Catch all other routes and return the client app
appRouter.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/web/index.html'));
});

webServer.use('/nodeServer/getUniqueUser', (req, res, next) => {
  const hash = crypto.createHmac('sha256', req.headers['x-forwarded-for'] || req.headers.host)
    .update(req.headers['user-agent'])
    .digest('hex');

  res.end(hash);
});

webServer.use(webPath, appRouter);


// Error Handler
webServer.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

webServer.set('port', config.WEB_PORT);

/**
 * Create HTTP server.
 */
const server = http.createServer(webServer);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(config.WEB_PORT, () => console.info(`Running Web Server at localhost:${config.WEB_PORT}`));

module.exports = server;
