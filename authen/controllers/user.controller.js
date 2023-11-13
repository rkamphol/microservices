const db = require('../models/index');

const getUsers = async (req, res) => {
    try {

        const users = await db.User.findAll({
            attributes: ['id', 'name', 'email'],
        });

        return res.status(200).send(users ? users : []);

    } catch (err) {
        console.log('err', err);
        return res.status(500).send({
            "error": "internal_error",
            "error_description": "internal server error"
        });
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;

        if (id) {
            const user = await db.User.findOne({
                where: { id: id },
                attributes: ['id', 'name', 'email'],
            });

            if (user) {
                return res.status(200).send(user);
            }
        }

        return res.status(404).send({
            "error": "internal_error",
            "error_description": "internal server error"
        });
    } catch (err) {
        console.log('err', err);
        return res.status(500).send({
            "error": "internal_error",
            "error_description": "internal server error"
        });
    }
}

const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.params;

        if (email) {
            const user = await db.User.findOne({
                where: { email: email },
                attributes: ['id', 'name', 'email'],
            });

            if (user) {
                return res.status(200).send(user);
            }
        }

        return res.status(404).send({
            "error": "internal_error",
            "error_description": "internal server error"
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
    getUsers,
    getUserById,
    getUserByEmail,
}
