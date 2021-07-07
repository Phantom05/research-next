const router = require("express").Router();

module.exports = app => {
  router.get("/u/:id", (req, res) => {
    const actualPage = "/user";
    const queryParams = { id: req.params.id };
    console.log('왕?');
    console.log(queryParams,'queryParams');
    app.render(req, res, actualPage, queryParams);
  });

  return router;
};
