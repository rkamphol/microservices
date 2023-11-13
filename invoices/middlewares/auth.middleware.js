const jwt = require('jsonwebtoken');
const jwtDataOptions = {
    secret: process.env.JWT_SECRET,
    jwtExpiration: process.env.JWT_EXPIRATION,
    jwtRefreshExpiration: process.env.JWT_REFRESH_EXPIRATION,
}
const { TokenExpiredError } = jwt;
const catchError = (err, res) => {
    if (err instanceof TokenExpiredError) {
        return res.status(401).send({
            "error": "access_token_expired",
            "error_description": "access token expired"
        });
    }
    return res.status(403).send({
        "error": "unauthorized_error",
        "error_description": "unauthorized access"
    });
}

const verifyToken = (req, res, next) => {
    authorizationHeader = req.headers["authorization"];
    if (!authorizationHeader) {
        return res.status(403).send({
            "error": "unauthorized_error",
            "error_description": "no token provided"
        })
    }

    const [bearer, token] = authorizationHeader.split(' ');
    if (!token) {
        return res.status(403).send({
            "error": "unauthorized_error",
            "error_description": "no token provided"
        })
    }

    jwt.verify(token, jwtDataOptions.secret, (err, decoded) => {
        if (err) {
            return catchError(err, res);
        }
        req.user = decoded;
        next();
    });
}

module.exports = {
    verifyToken,
}