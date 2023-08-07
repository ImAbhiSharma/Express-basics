import  express  from "express";
const app = express();


app.get("/", (req, res) => {
    res.send("<h1>This is homepage</h1>");

});

app.post("/register", (req, res) => {
    res.sendStatus(201);

});

app.put("/user/dharam", (req, res) => {
    res.sendStatus(200);

});

app.patch("/user/dharam", (req, res) => {
    res.sendStatus(200);

});

app.delete("/user/dharam", (req, res) => {
    res.sendStatus(200);

});


app.get("/about", (req, res) => {
    res.send("<h1>This is about page</h1> <p>I am Abhi</p>");

});


app.get("/contact", (req, res) => {
    res.send("<h1>this is contact page</h1> <p> Contact me at abhi55555as25@gmail.com</p>");

});


app.listen(3002, () => {
    console.log("Server running on port 3002");
})