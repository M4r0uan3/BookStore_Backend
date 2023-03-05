const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const categoryRoutes = require("./routes/categoryRoute");
const bookRoutes = require("./routes/bookRoute");
const authRouter = require("./routes/authRoute");
const adminRouter = require("./routes/adminRoute");
const authMiddleware = require("./middleware/userAuth");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/books", bookRoutes);
app.use("/categories", categoryRoutes);
app.use("/admin", authMiddleware, adminRouter);


require("dotenv").config();
const connect = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  await app.listen(process.env.PORT);
  console.log("Server is Listening on Port " + process.env.PORT);
};

try {
  connect();
} catch (e) {
  console.log(e);
}
