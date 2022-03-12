const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");
const cors = require("cors")

dotenv.config();

app.use(express.json());
app.use(cors());

mongoose 
 .connect("mongodb+srv://ahmet:semra123@cluster0.qlo9i.mongodb.net/pin?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
 })   
 .then(() => console.log("MongoDB connected!"))
 .catch(err => console.log(err));

app.use("/api/users", cors(), userRoute);
app.use("/api/pins", cors(), pinRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
