// const { sample, x } = require("./index");
// const { cal } = require("./module");

// const data = require("./data.json");
// console.log("hii");
// console.log(sample());
// console.log(x);

// let a = 3;
// let b = 7;
// console.log(cal(a, b));
// console.log(data);

const http = require("http");

const server = http.createServer((req, res) => {
  res.write("hello nodejs");
  res.end("response provided");
});

server.listen("3101", () => {
  console.log("server is running");
});



