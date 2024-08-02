import User from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


// Login SignUp Logout

const createUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body

    try {

        // Check for already exits user

        const userExist = await User.findOne({ email });

        if (userExist) res.json({ message: "user already exits" });
        else {

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const newUser = new User({ name: name, email: email, password: hashedPassword })
            await newUser.save();
            res.status(201).json({ message: 'User registered successfully' });
        }

    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }

});

const signinUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    const existingUser = await User.findOne({ email: email });

    try {
        if (existingUser) {

            const isPasswordValid = await bcrypt.compare(password, existingUser.password);

            if (isPasswordValid) {
                // Token generation .
                const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
                res.status(201).json({ token });

            } else {

                res.json("loginfail");

            }
            return;
        } else res.send("nouser");
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' });
    }

})



const getUserProfile = asyncHandler(async (req, res) => {

    try {
        const user = await User.findById(req.user.userId).select('-password');
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching profile' });
    }

});


const updateUserProfile = asyncHandler(async (req, res) => {
    try {

        const { name, email, password } = req.body;
        const updateData = { name, email };

        if (password) {

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            updateData.password = hashedPassword;

        }
        const user = await User.findByIdAndUpdate(
            req.user.userId,
            updateData,
            { new: true }
        ).select('-password');

        res.json(user);

    } catch (error) {

        res.status(500).json({ error: 'Error updating profile' });
    }
})


const deleteUserProfile = asyncHandler(async (req, res) => {
    try {

        await User.findByIdAndDelete(req.user.userId);
        res.json({ message: 'User profile deleted successfully' });

    } catch (error) {
        res.status(500).json({ error: 'Error deleting profile' });
    }
})



export { createUser, signinUser, getUserProfile, updateUserProfile, deleteUserProfile };