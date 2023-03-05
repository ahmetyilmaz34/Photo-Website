import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createUser = async (req, res) => {
    try {

        const user = await User.create(req.body);
        res.status(201).json({
            succeded: true,
            user,
        })
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        });
    }
};
const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body; // ! body den kullanıcı adı ve şifreyi aldık.
        // console.log("req body", req.body);
        const user = await User.findOne({ username });
        let same = false;
        if (user) {
            same = await bcrypt.compare(password, user.password); //! true ya da false değer dönecek
            // console.log("same", same);
        } else {
            return res.status(401).json({
                succeded: false,
                error: "There is no such user",
            });
        }
        if (same) {
            // res.status(200).send("You are logged in")
            res.status(200)
                .json({
                    user,
                    token: createToken(user._id),
                });
        } else {
            res.status(401).json({
                succeded: false,
                error: "Passwords are not matched"
            });
        }
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        });
    }
};


const createToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
}


export { createUser, loginUser };