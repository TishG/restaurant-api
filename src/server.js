const http = require("http");
const app = require("./app");
const debug = require('debug')('myapp')
const name = 'myapp'
debug('booting %s', name)
const server = http.createServer(app);
const normalizePort = (val) => {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  }
const port = normalizePort(process.env.PORT || 3000);
app.set("port", port);
server.listen(port);

server.on("listening", (err) => {
  if(err) {
    console.log(err);
  }
  else console.log(`server is listening for requests on port ${server.address().port}`);
  });
