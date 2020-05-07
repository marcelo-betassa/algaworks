const express = require("express");
const app = express();

app.use(express.static(__dirname + "/dist/algamoney-ui"));

<<<<<<< HEAD
app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/dist/algamoney-ui/index.html');
});

app.listen(4200);
=======
app.get("/*", function(req, resp){
  resp.sendFile(__dirname + "/dist/algamoney-ui/index.html");
});

app.listen(process.env.PORT || 3000);


>>>>>>> algaworks
