var express = require("express")
var app = express()

// ejs render searchs for the .ejs file under the views folder
// ejs = embedded java script

// by default, express serves the "views" directory
// but if we want other directory, we have to manually add it here:
app.use(express.static("public"))

// this will tell express to expect the render() files
// to be .ejs file
app.set("view engine", "ejs")

app.get("/", function(req, res) {
	res.render("home") // instead of home.ejs
})

app.get("/fallinlovewith/:thing", function(req, res) {
	var thing = req.params.thing

	// on love.ejs, everything inside <%= %>
	// will be treated as javascript code
	// so when we say <%= thingVar %>, it will substitute
	// thingVar with whatever we send on render()
	// the second param of render() takes a dictionary of
	// { keyName in the ejs file : value }
	res.render("love", { thingVar: thing })
})

app.get("/posts", function(req, res) {
	var posts = [
		{title: "post 1", author: "susy"},
		{title: "post 2", author: "asdf"},
		{title: "post 3", author: "me"},
	]

	res.render("posts", {posts: posts})
})

app.listen(3000, function() {
	console.log("server started")
})

// the diffferennt javascript tags:
/*
<%= %> everyting inside the bracket will be evaluated 
       and the value inserted as html
<% %>  everything inside the bracket will be run as logic only
       so the return value is not inserted as html
<%- %>

*/