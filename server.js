const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//Uncommon bug:  Unexpected server shutdown due to unhandled promise rejection.

//This code is seemingly simple, but it can experience unexpected shutdowns if there's an unhandled promise rejection elsewhere in the application.
//For example, an asynchronous operation in another part of the code might throw an error, and if not caught, it will crash the server.