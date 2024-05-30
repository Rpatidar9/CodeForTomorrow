const express = require("express");
const AuthRouter = require("./app/routes/auth.routes.js");
const CategoryRouter = require("./app/routes/category.routes.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./app/config/config.js");
const db = require("./app/models/index.js");


const app = express();

const corsOptions = {
  origin: "http://localhost:8000"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", AuthRouter);
app.use("/api/category", CategoryRouter);


const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// db.sequelize.sync().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// }).catch(err => {
//   console.error("Failed to sync database:", err);
// });
