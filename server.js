const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const connectDb = require("./dbconnect");
connectDb()
app.use(express.json());
app.use("/api/contacts", require("./Route/createContact"));
app.use("/api/user", require("./Route/createuser"));
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// app.get("/api/hello",(req,res) => {
//     res.send("GET Request Called")
// })

