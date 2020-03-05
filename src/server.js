const next = require("next");
const routes = require("./routes");
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);

const express = require("express");
app.prepare().then(() => {
  express()
    .use(handler)
    .listen(3000);
});

/*
require("dotenv").config();
const express = require("express");
const http = require("http");
const next = require("next");
const thoughtsAPI = require("./thoughts-api");

const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
  dir: "./src"
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(thoughtsAPI);

  // handling everything else with Next.js
  server.get("*", handle);

  http.createServer(server).listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
  });
});
*/