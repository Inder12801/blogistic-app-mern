
// import dotenv here
import dotenv from 'dotenv'

import User from "../model/userModel.js"
import jwt from 'jsonwebtoken'

dotenv.config();


// const secretKey = "";
const resisterUser = async (req, res) => {
    try {
        console.log(req.body)
        const token = jwt.sign({ email: req.body.email }, process.env.secretKey)
        const user = await User({ ...req.body, token: token });
        await user.save();
        res.json(token);
    } catch (err) {
        res.json({ message: err.message })
    }
}
export { resisterUser };