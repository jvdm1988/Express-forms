const express = require("express");
const expressLayouts = require("express-ejs-layouts");


const app = express();

app.set("views", "views");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(expressLayouts);

app.set("layout", "layout.ejs");

// ROUTES -------------------------------------------

app.get("/", (req, res, next) => {
  res.render("home-page-view.ejs");
});


// # STEP 1 of our search form submission
app.get("/search", (req, res, next) => {
  res.render("search-form-view.ejs");
});

app.get("/results", (req, res, next) => {
  // req.query refers to the data in the "query-string"
  const myTerm = req.query.searchTerm;
  const myCheckbox = req.query.interestThing;

    if (myCheckbox === "on") {
      res.render("pizza-results.ejs", {
        theSearch: myTerm
      });
    }
    else {
      res.render("results-view.ejs", {
        theSearch: myTerm
      });
    }
});


//---------------------------------------------------



app.listen(3000);
