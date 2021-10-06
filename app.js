const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")
const app = express();

var items = ["Comprar comida", "Fazer comida", "Comer"];
var workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {

  let day = date.getDate();
  // var currentDay = today.getDay();
  // var day = "";

  // switch (currentDay) {
  //   case 0:
  //     day = "Domingo";
  //     break;
  //   case 1:
  //     day = "Segunda";
  //     break;
  //   case 2:
  //     day = "Terça";
  //     break;
  //   case 3:
  //     day = "Quarta";
  //     break;
  //   case 4:
  //     day = "Quinta";
  //     break;
  //   case 5:
  //     day = "Sexta";
  //     break;
  //   case 6:
  //     day = "Sábado";
  //     break;
  //   default:
  //   console.log("Error: Hoje é" + currentDay);
  // }

  res.render("list", {listTitle: day, newListItems: items});

});

app.post("/", function(req, res){
  let item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/")
  }

});

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work list", newListItems: workItems});
});

app.post("/work", function(req, res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work")
});

app.get("/about", function(req, res){
  res.render("about");
});










app.listen(3000, function() {
  console.log("Servidor iniciado em http://localhost:3000/")
})
