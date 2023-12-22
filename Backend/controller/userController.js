import User from "../model/userModel.js";
import jwt from "jsonwebtoken";

const createUser = async (req, res) => {
    try {
        const user = await User(req.body)
        user.save();
        res.send(req.body);
        console.log("Create User");
    } catch (err) {
        console.log(err)
    }
}
const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users)
    } catch (err) {
        console.log("All Users");
    }
}
const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({ _id: id });
        res.json(user);
    } catch (err) {
        console.log(err);
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findOneAndUpdate({ _id: id }, { ...req.body });
        res.json(user);
    } catch (err) {
        console.log("Update User");
    }
}
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findOneAndDelete({ _id: id })
        res.json(user);
    } catch (err) {
        console.log("Delete User");
    }
}

export { getUsers, getUser, createUser, updateUser, deleteUser };
