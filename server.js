const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db')
const dotenv = require('dotenv');
const colors = require('colors');

dotenv.config({path:'./config/config.env'})

connectDB();

const transactions = require('./routes/transactions')

const app = express();
app.use(express.json());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use('/api/v1/transactions', transactions)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));