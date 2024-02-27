const express = require('express');

const connectDB = require('./db');

const port = 3001;

const app = express();

connectDB();

app.use(express.json());

app.use('/users', require("./routes/routeUser"));
app.use('/cards', require("./routes/routeCards"));
app.use('/boards', require("./routes/routeBoard"));


app.get("/", (req, res) => {
  res.json({ message: "hello ther !!!" })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});















/*
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed due to application termination');
    process.exit(0);
  });
});*/
