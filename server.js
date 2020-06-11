const express = require("express");
const app = express();
let server = require('http').Server(app);

app.use(express.static(__dirname + "/dist/algamoney-ui"));

app.get("/*", function(req, resp){
  resp.sendFile(__dirname + "/dist/algamoney-ui/index.html");
});

const port = process.env.PORT || 4200;
server.listen(port, () => {
  console.log("App is running on port " + port);
});



