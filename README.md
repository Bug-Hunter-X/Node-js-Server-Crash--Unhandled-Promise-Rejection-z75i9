# Node.js Server Crash: Unhandled Promise Rejection

This repository demonstrates a subtle bug in a Node.js server where an unhandled promise rejection in a seemingly unrelated part of the application causes the server to unexpectedly crash.

## The Bug

The `server.js` file contains a simple HTTP server.  While this server functions correctly on its own, if an unhandled promise rejection occurs elsewhere in your application, it will bring down this server.

## The Solution

The `serverSolution.js` file shows how to use `process.on('unhandledRejection', ...)` to gracefully handle these unexpected rejections and prevent the server from crashing.