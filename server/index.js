const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const PORT= process.env.PORT || 5000

const dbConnect = require("./Configuration/DataBase");
dbConnect();

app.use(express.json());
app.use(
    cors({
        origin:"*",
        credentials:true,
    })
)

const contactRoute = require('./Routes/contact');
app.use("/api/v1",contactRoute);

app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Welcome To Harsh Portfolio",
	});
});

app.listen(PORT , ()=>{
    console.log(`Server Running on port ${PORT}`);
});