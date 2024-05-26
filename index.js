const comedyRouter = require("./Routers/home/comedy");
const actionRouter = require("./Routers/home/action");
const horrorRouter = require("./Routers/home/horror");
const romanceRouter = require("./Routers/home/romance");
const thrillerRouter = require("./Routers/home/thriller");
const adventureRouter = require("./Routers/home/adventure");
const scifiRouter = require("./Routers/home/scifi");
const dramaRouter = require("./Routers/home/drama");
const biographyRouter = require("./Routers/home/biography");
const mysteryRouter = require("./Routers/home/mystery");
const fantasyRouter = require("./Routers/home/fantasy");
const awardwinningRouter = require("./Routers/home/awardwinning");
const warRouter = require("./Routers/home/war");
const documentaryRouter = require("./Routers/home/documentary");
const streamingRouter = require("./Routers/streaming/streaming");
const search = require("./Routers/home/search");
const login = require("./Routers/authentication/login");
const logout = require("./Routers/authentication/logout");
const signup = require("./Routers/authentication/signup");
const account = require("./Routers/account");

const express = require("express");
const session = require("express-session");
const app = express();
const cors = require("cors");
const PORT = 3002;
const dotenv = require("dotenv");
const mysql = require("mysql2");


dotenv.config();


// -------------------------------------Middlewares-------------------------------------


app.use(require("express-status-monitor")());
app.use(cors());
app.use(session({
    secret: "your_secret_key", // Secret used to sign the session ID cookie
    resave: false,
    saveUninitialized: true,
    // cookie: { maxAge: 60000 }
  })
);
app.use("/protected-route", (req, res, next) => {
  if (!req.session.user) {
    //  console.log(req.session);
    //  console.log("session..." + req.session.user + "\n\n");
    return res.status(401).end("You must be logged in to access this resource");
  }
  //  console.log(req.session);
  //console.log("session..." + req.session.user.username + "\n\n");
  next();
});
app.use("/protected-route/moviedetails/comedy", comedyRouter);
app.use("/protected-route/moviedetails/romance", romanceRouter);
app.use("/protected-route/moviedetails/scifi", scifiRouter);
app.use("/protected-route/moviedetails/action", actionRouter);
app.use("/protected-route/moviedetails/adventure", adventureRouter);
app.use("/protected-route/moviedetails/biography", biographyRouter);
app.use("/protected-route/moviedetails/documentary", documentaryRouter);
app.use("/protected-route/moviedetails/drama", dramaRouter);
app.use("/protected-route/moviedetails/horror", horrorRouter);
app.use("/protected-route/moviedetails/mystery", mysteryRouter);
app.use("/protected-route/moviedetails/war", warRouter);
app.use("/protected-route/moviedetails/awardwinning", awardwinningRouter);
app.use("/protected-route/moviedetails/thriller", thrillerRouter);
app.use("/protected-route/moviedetails/fantasy", fantasyRouter);
app.use("/protected-route/moviedetails", streamingRouter);
app.use("/protected-route/moviedetails/search", search);

app.use("/clientlogin",login);
app.use("/clientsignup",signup);
app.use("/protected-route/clientlogout",logout);
app.use("/protected-route/clientaccount",account);


app.listen(PORT, () => {
  console.log(`node server is running on port : ${PORT}....`);
});


// ---------------------------------------------------------------------routes----------------------------------------------------





// app.get("/protected-route/clientdelete", (req, res) => {
//   req.session.user.username = "";

//   req.session.destroy((err) => {
//     if (err) {
//       console.log(err);
//       res.status(500).json({ message: `error logging-out`, status: 'error' });
//     } else {
//       console.log("logged out successfully");
//       res.status(200).json({ message: 'successfully logged out', status: 'success' });
//     }
//   });
// });

