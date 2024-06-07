const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Ensure you have installed these packages
// npm install express cors body-parser

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Importing routes
const menuRouter = require('./routes/menu');
const orderRouter = require('./routes/order');

// Using routes
app.use('/api/menu', menuRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => {
    res.send('Welcome to Crater Canyon Coffee API');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
