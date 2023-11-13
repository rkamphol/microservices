const express = require('express');
const { getPaymentsByInvoice, createPaymentOfInvoice } = require('../controllers/payment.controller');
const router = express.Router();

// route: retrieve invoice's payment
router.get('/invoices/:id/payments', getPaymentsByInvoice);

// route: create invoice payment
router.post('/invoices/:id/payments', createPaymentOfInvoice);

module.exports = router;