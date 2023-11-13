const db = require('../models/index');
const { Sequelize } = require('sequelize');

const getPaymentsByInvoice = async (req, res) => {
    try {
        const { id } = req.params;

        if (id) {
            const payments = await db.Payment.findAll({
                where: { invoice: id }
            });

            return res.status(200).send(payments ? payments : []);
        }


    } catch (err) {
        console.log('err', err);
        return res.status(500).send({
            "error": "internal_error",
            "error_description": "internal server error"
        });
    }
}

// todo: current i implent when create payment mean, invoice is paid. (1 invoice per 1 payment)
// todo: need to handle mutiple payments like installment
const createPaymentOfInvoice = async (req, res) => {
    try {
        const { id } = req.params;

        const { paymentMethod } = req.body;

        const invoice = await db.Invoice.findOne({
            where: { id: id }
        })

        if (!invoice) {
            return res.status(400).send({
                "error": "bad request",
                "error_description": "bad request"
            });
        }

        await db.Payment.create({
            payee: invoice.payee,
            payer: invoice.payer,
            invoice: id,
            paymentDate: Sequelize.literal('NOW()'),
            paymentAmount: invoice.totalAmount,
            currency: invoice.currency,
            paymentMethod: paymentMethod,
        });

        await db.Invoice.update(
            { status: 'paid' },
            { where: { id: invoice.id } }
        );

        return res.status(200).send({
            "message": "create payment successful",
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
    getPaymentsByInvoice,
    createPaymentOfInvoice,
}