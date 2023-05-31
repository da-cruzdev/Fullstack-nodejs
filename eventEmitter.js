const { EventEmitter } = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("greeting", () => {
  console.log("Ton moukoueeeees!!!");
});

myEmitter.emit("greeting");
