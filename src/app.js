const express = require("express");
const { apiRouter } = require("./routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

if (process.env.NODE_ENV === "development") {
  app.listen(8000, () => {
    console.log("Server on port 8000");
  });
}

module.exports = app;
