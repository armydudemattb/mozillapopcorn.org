var express = require("express"),
    app = express(),
    oneDay = 86400000;

if (process.env.NODE_ENV === "development") {
  app.use(express.logger());
}
app.use(express.compress());
app.use(express.static(__dirname + "/public"));
app.use(app.router);

// Catch-all redirect
app.use(function(req, res) {
  res.redirect(301, "https://popcorn.webmaker.org");
});

app.all("/blog*", function(req, res) {
  res.redirect(301, "https://blog.mozilla.org/popcorn/");
});

app.all("/popcornjs*", function(req, res) {
  res.redirect(301, "http://popcornjs.org");
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on port " + port);
});
