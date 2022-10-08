const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const dotenvExpand = require("dotenv-expand");
const fileupload = require("express-fileupload");
const bodyparser=require("body-parser");

//storage 
const multer =require("multer")
const app = express();
dotenvExpand.expand(dotenv.config());

const upload =multer({
	dest:"./upload/images",
})

app.use(bodyparser.json())
app.use(express.json());
app.use(fileupload({ createParentPath: true }));
app.use(express.static(path.join(__dirname, "public/uploads")));

//require("./src/config/Connection");

const Routes = require("./src/routes/index");
const { PORT, SERVER } = require("./src/constants");

//homework
const postsRoutes=require('./src/routes/postsRoutes');

app.get("/", (req, res) => {
	return res.json("Welcome!");
});

app.use("/posts",postsRoutes);
app.get("/postsRoutes",(res,req)=>{
console.log("we are on posts");
})


app.post("/upload",upload.single('profile'),(req,res)=>{
	console.log('image');
})
app.use("/", Routes);

app.listen(PORT, () => {
	console.log(`Server is running on ${SERVER}`);
});
