const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const taskRoutes = require("./routes/tasks");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));