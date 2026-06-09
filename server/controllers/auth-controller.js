// import bcrypt from "bcrypt";
import User from "../models/user-model.js";

// Home Page Logic
const homePage = async (req, res) => {
  try {
    res.send("Welcome to the Home Page");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
}

// Registration Page Logic
const registrationPage = async (req, res, next) => {
  try {
    console.log("Register request body:", req.body);
    const { username, phone, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      phone,
      email,
      password
    });
    res.status(201).json({
      message: "User registered successfully",
      token: await newUser.generateToken(),
      userId: newUser._id.toString()
    });
  } catch (error) {
    next(error);
  }
}

// Login Page Logic
const loginPage = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const isMatch = await user.comparePassword(password);

    if (isMatch) {
      res.status(200).json({
        message: "Login successful",
        token: await user.generateToken(),
        userId: user._id.toString()
      });
    } else {
      return res.status(400).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    next(error);
  }
}

// User Data get Logic
const user = async (req, res, next) => {
  try {
    const userData = req.user;
    console.log(userData);

    res.status(200).json({
      userData
    });
  } catch (error) {
    next(`Error fetching user data: ${error.message}`);
  }
}

export { homePage, loginPage, registrationPage, user };

