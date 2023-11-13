const db = require('../models/index');

const INVOICE_STATUS = {
    'pending': 'pending',
    'paid': 'paid'
}

const getInvoicesByPayee = async (req, res) => {
    const invoices = await db.Invoice.findAll({
        where: { payee: req.user.id }
    });
    res.send(invoices);
}

const getInvoicesByPayer = async (req, res) => {
    const invoices = await db.Invoice.findAll({
        where: { payer: req.user.id }
    });
    res.send(invoices);
}

const createInvoice = async (req, res) => {
    try {
        const { payer, invoiceNumber, invoiceDate, totalAmount, currency } = req.body;
        // TODO: implement a validate data
        const status = INVOICE_STATUS.pending;

        // TODO: call user api to validate payerId from user services
        // (as current it embeded in microservices-authen).

        await db.Invoice.create({
            payee: req.user.id,
            payer: payer,
            invoiceNumber,
            invoiceDate,
            totalAmount,
            currency,
            status
        });

        return res.status(200).send({
            "message": "create invoice successful",
        });
    } catch (err) {
        console.log('err', err);
        return res.status(500).send({
            "error": "internal_error",
            "error_description": "internal server error"
        });
    }
}

const deleteInvoiceById = async (req, res) => {
    try {
        const { id } = req.params;

        if (id) {
            await db.Invoice.destroy({
                where: { id: id },
              });
        }
        
        return res.status(204).send({
            "message": "delete successfull",
        });
    } catch (err) {
        console.log('err', err);
        return res.status(500).send({
            "error": "internal_error",
            "error_description": "internal server error"
        });
    }
}

module.exports = {
    getInvoicesByPayee,
    getInvoicesByPayer,
    createInvoice,
    deleteInvoiceById,
}