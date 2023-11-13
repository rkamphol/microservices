const express = require('express');
const { getInvoicesByPayee, getInvoicesByPayer, createInvoice, deleteInvoiceById } = require('../controllers/invoice.controller');
const { verifyToken } = require('../middlewares/auth.middleware');
const router = express.Router();

// route: retrieve invoices by payee
router.get('/invoices/payee', verifyToken, getInvoicesByPayee);

// route: retrieve invoices by payer
router.get('/invoices/payer', verifyToken, getInvoicesByPayer);

// route: create invoice
router.post('/invoices', verifyToken, createInvoice);

// route: delete invoice
router.delete('/invoices/:id', verifyToken, deleteInvoiceById);

module.exports = router;