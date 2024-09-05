const jsonServer = require('json-server');
const auth = require('json-server-auth');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Bind the router db to the server
server.db = router.db;

// Setup default middlewares (logger, static, cors, etc.)
server.use(middlewares);

// Enable json-server-auth
server.use(auth);
server.use(router);

// Start the server
server.listen(8080, () => {
    console.log('JSON Server is running on http://localhost:8080');
});


