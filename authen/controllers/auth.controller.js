const db = require('../models/index');
const { createToken, verifyExpiration } = db.AuthToken;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // check if email exists
        const userExists = await db.User.findOne({
            where: { email: email },
            attributes: ['id', 'name'],
        });

        if (userExists) {
            return res.status(400).send({
                "error": "invalid_request",
                "error_description": "email is taken"
            });
        }

        await db.User.create({
            name,
            email,
            password: await bcrypt.hash(password, 15)
        });

        return res.status(200).send({
            "message": "registration successful",
        });
    } catch (err) {
        console.log('err', err);
        return res.status(500).send({
            "error": "internal_error",
            "error_description": "internal server error"
        });
    }
}

const signInUser = async (req, res)  => {
    try {
        const { email, password } = req.body;
        const user = await db.User.findOne({
            where: { email: email },
        });

        if (!user) {
            return res.status(401).json({
                "error": "invalid_request",
                "error_description": "incorrect email and password combination"
            });
        }

        // verify password
        const passwordValid = await bcrypt.compare(password, user.password);
        if (!passwordValid) {
            return res.status(401).json({
                "error": "invalid_request",
                "error_description": "incorrect email and password combination"
            });
        }

        // authenticate user with jwt
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRATION
        });

        let refreshToken = await createToken(user);

        res.status(200).send({
            token_type: "bearer",
            accessToken: token,
            expires_in: process.env.JWT_EXPIRATION,
            refreshToken: refreshToken,
        });

    } catch (err) {
        console.log('err', err);
        return res.status(500).send({
            "error": "internal_error",
            "error_description": "internal server error"
        });
    }
}

const refreshToken = async (req, res) => {
    const { refreshToken: requestToken } = req.body;
    if (refreshToken == null) {
        return res.status(403).send({
            "error": "invalid_request",
            "error_description": "refresh token is required"
        });
    }

    try {
        let refreshToken = await db.AuthToken.findOne({ where: { token: requestToken } });
        if (!refreshToken) {
            res.status(403).send({
                "error": "invalid_request",
                "error_description": "invalid refresh token"
            });
        }
        if (verifyExpiration(refreshToken)) {
            db.AuthToken.destroy({ where: { id: refreshToken.id } });
            res.status(403).send({
                "error": "invalid_request",
                "error_description": "refresh token was expired. please sign in."
            });
        }

        const user = await db.User.findOne({
            where: { id: refreshToken.user },
            attributes: {
                exclude: ['password']
            }
        });
        let newAccessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_REFRESH_EXPIRATION
        });

        res.status(200).send({
            token_type: "bearer",
            accessToken: newAccessToken,
            expires_in: process.env.JWT_EXPIRATION,
            refreshToken: refreshToken.token
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
    registerUser,
    signInUser,
    refreshToken,
}
