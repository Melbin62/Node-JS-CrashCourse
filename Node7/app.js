require('dotenv').config()
const express = require('express');
const connectDB = require('./config/dbConnection');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT


connectDB();
app.use(express.json());

app.use('/api/auth', authRoutes);





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})