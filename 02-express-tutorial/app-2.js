const http = require("node:http");
const fs = require("node:fs");

const html = fs.readFileSync("./navbar-app/index.html", "utf-8");
const style = fs.readFileSync("./navbar-app/styles.css", "utf-8");
const logo = fs.readFileSync("./navbar-app/logo.svg", "utf-8");
const logic = fs.readFileSync("./navbar-app/browser-app.js", "utf-8");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.write(html);
    res.end();
  } else if (req.url === "/styles.css") {
    res.writeHead(200, { "Content-Type": "text/css" });

    res.write(style);
    res.end();
  } else if (req.url === "/logo.svg") {
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    // res.write(logo);
    res.end(logo);
  } else if (req.url === "/browser-app.js") {
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    res.write(logic);
    res.end();
  }
});

server.listen(3000, () => {
  console.log("server running on port 3000");
});
