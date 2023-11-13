const express = require('express');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());

const invoiceRoute = require('./routes/invoice.route');
app.use('/api', invoiceRoute);

const paymentRoute = require('./routes/payment.route');
app.use('/api/', paymentRoute);

// for loadbalancer health check
app.get('/health', (req, res) => {
    res.send('up');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});