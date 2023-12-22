
import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    // console.log(token);
    if (token) {
        jwt.verify(token, process.env.secretKey, (err, decodedToken) => {
            if (err) {
                res.json({ message: err.message })
            } else {
                console.log(decodedToken);
                next();
            }
        })
    } else {
        res.json({ message: "Token not found" })
    }

}

export { auth };