import express from "express"

const app = express();
const port = 80; // default port to listen

// define a route handler for the default home page
app.use("/", express.static("public"))
app.use(express.json())

app.post("/login", (req, res) => {
    console.log(req.body)
    res.send("hi")
})

// start the Express server
app.listen( port, "192.168.1.21", () => {
    console.log( `server started` );
} );