const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const socketIO=require("socket.io");
const http=require("http");
const { isObject } = require("util");
require("./services/cache");
require("./models/Todo");

const app = express();
const PORT = process.env.PORT || 8083;
const server=http.createServer(app);
let io = socketIO(server);
io.on('connection', (socket)=>{
  console.log('connected');
});

server.listen(PORT,()=>console.log("listening to "+PORT));

app.use(bodyParser.json());

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

require("./routes/TodoRoutes")(app);



