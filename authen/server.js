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

const authRoute = require('./routes/auth.route');
app.use('/api/authen/', authRoute);

// todo: seperate user to another microservice because auth is design for a slow response.
const userRoute = require('./routes/user.route');
app.use('/api/users/', userRoute);

// for loadbalancer health check
app.get('/health', (req, res) => {
    res.send('up');
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});