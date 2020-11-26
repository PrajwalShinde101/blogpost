const exp = require("express");
const mon = require("mongoose");


const body = require("body-parser");


const db = require("./database.js");
const ejs = require("ejs");

const app = exp();

mon.connect("mongodb://localhost:27017/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(body.urlencoded({
    extended: true
}));


app.set("view engine", "ejs");

app.use(exp.static("public"));

var schemausers = mon.Schema({
    username: String,
    password: String
});

var User = new mon.model("userofblog", schemausers);





app.get("/", (req, res) => {
    db.retrieve(res);
    // console.log(docs);


});


app.get("/top-blogs", (req, res) => {
    res.render("about.ejs");
});
app.get("/about-us", (req, res) => {
    res.render("about.ejs");
});
app.get("/register", (req, res) => {

  res.render("compose.ejs");
  
});




app.post("/compose", (req, res) => {

    db.createblog(req, res);


});
app.get("/sb/:p", (req, res) => {

    var ti = req.params.p + "";
    console.log(req.params.p + "");
    db.retriveblog(res, ti);

});
app.post("/likeincrement",(req,res)=>{
//   db.likeincrease(req.body.ti,res)
console.log(req.body);
})
app.listen(300, () => {
    console.log("server has been started on port 300");
})