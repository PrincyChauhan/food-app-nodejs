const express = require('express');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');

dotenv.config();
connectDB()
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/test', require('./routes/testRoute'));
app.use('/api/v1/auth', require('./routes/authRoute'));
app.use('/api/v1/user', require('./routes/userRoute'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`.white.bgMagenta)
})