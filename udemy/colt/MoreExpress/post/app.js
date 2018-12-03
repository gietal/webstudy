var express = require("express")
var app = express()
var bodyParser = require("body-parser")


// express by default cannot parse the body of the request
// so here we ask it to use body-parser
app.use(bodyParser.urlencoded({extended: true}))

app.set("view engine", "ejs")

var friends = ["Tony", "Miranda", "Justin"]


app.get("/", function(req, res) {
	res.render("home")
})

app.get("/friends", function(req, res) {
	res.render("friends", {friends: friends})
})

app.post("/addfriend", function(req, res) {
	var newFriend = req.body.newfriend
	friends.push(newFriend)

	// redirect back to the /friends page
	// after we updated the friends array
	res.redirect("/friends")
})

app.listen(3000, function() {
	console.log("server started")
})