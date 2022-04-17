const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true });
// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB database connection established suuccessfully");
// });

// const exercisesRouter = require("./routes/exercises");
// const usersRotuer = require("./routes/users");

// app.use("/exercises", exercisesRouter);
// app.use("/users", usersRotuer);
app.get('/', (req, res) => {
  console.log('get first requirest')
  res.send('success request to AWS EC2!')
})

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
