const express = require('express');
const app = express();
const connectDB = require('./config/db');
require('dotenv').config();

connectDB();
app.use(express.json());

const postRoutes = require('./routes/posts');
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});