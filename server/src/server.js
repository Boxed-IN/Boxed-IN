const express = require("express");
const userController = require("./user/user.controller");
const movieController = require("./movie/movie.controller");
const leaderboardController = require("./leaderboard/leaderboard.controller");
const app = express();
const cors = require("cors");
const path = require("path");
const knex = require("./knex");
const escapeHtml = require("escape-html");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);

const store = new KnexSessionStore({
  knex,
  tablename: "sessions",
});
require("dotenv").config({ path: "./.env.local" }); //Only for debugging

const port = process.env.PORT || 5100;
app.use(express.json());
app.use(cors());
app.use(express.static("../client/dist"));

app.use(
  session({
    secret: "keyboard dog",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 30000, // 30 seconds for testing
    },
    store,
  })
);

function isAuthenticated(req, res, next) {
  if (req.session.user) next();
  else next("route");
}

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});

//Endpoints

// //login user
app.post(
  "/login",
  express.urlencoded({ extended: false }),
  async function (req, res) {
    // login logic to validate req.body.user and req.body.pass
    const loggedIn = await userController.login(req.body);
    if (loggedIn === true) {
      // regenerate the session, which is good practice to help
      // guard against forms of session fixation
      req.session.regenerate(function (err) {
        if (err) next(err);

        // store user information in session, typically a user id
        req.session.user = req.body.user_name;
        // save the session before redirection to ensure page
        // load does not happen before session is saved
        req.session.save(function (err) {
          if (err) return next(err);
          res.sendStatus(200);
        });
      });
    } else {
      res.sendStatus(400);
    }
  }
);

app.get("/", isAuthenticated, function (req, res) {
  // this is only called when there is an authentication user due to isAuthenticated

  res.status(200).send("hello, " + escapeHtml(req.session.user));
});

// user by id
app.get("/login/:id", userController.getUser); // done returning user
// //create user
app.post("/create", userController.create); //done returning id and user_name

app.patch("/user", isAuthenticated, () => {

});

app.get("/movieInfo", isAuthenticated, async (req, res, next) => {
 let data = await movieController.getAllMovies();
 res.status(200).send(data);
}, (req, res, next) => {
  res.status(400).send("ERROR: Not logged in");
});

app.get("/leaderboard", isAuthenticated, async(req, res) => {
  let result = await leaderboardController.returnAll();
  res.status(200).send(result);
});

app.patch("/leaderboard", isAuthenticated, async(req, res) => {
  await leaderboardController.updateLeaderboard(req.body, req.session.user);
  res.sendStatus(200);
});

app.post("/leaderboard", isAuthenticated, async(req, res) => {
  await leaderboardController.addUser(req.body);
  res.sendStatus(200);
});

app.get("/currentUser", isAuthenticated, (req, res) => {
  res.status(200).send(req.session.user);
});

app.get("/tournaments", isAuthenticated, (req, res) => {

});

app.get("/tournaments/:name", isAuthenticated, (req, res) => {

});

app.post("/tournaments", isAuthenticated, (req, res) => {

});

app.patch("/tournaments:name", isAuthenticated, (req, res) => {

});

//serving static html for every path
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
});

