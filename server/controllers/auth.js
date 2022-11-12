import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

// Register
export const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const isUsed = await User.findOne({ username })

    if(isUsed) {
      return res.json({
        message: 'This user already exists'
      })
    } 

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username, 
      password: hash,
    })

    await newUser.save();

    return res.json({
      newUser, 
      message: 'New user created'
    })

  } catch(error) {
    return res.json({
      message: error.message, 
    })
  }
}
// Login 
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({username})

    if(!user) {
      return res.json({
        message: `There is no user ${username}`
      })
    }

    const isPassword = await bcrypt.compare(password, user.password);

    if(!isPassword) {
      return res.json({
        message: 'Incorrect password'
      })
    }

    const token = jwt.sign({
      id: user._id,
      username,
    }, process.env.JWT_SECRET,
    { expiresIn: '30d' })

    return res.json({
      token,
      user, 
      message: 'You logged in'
    })


  } catch(error) {
    res.json({
      message: error.message,
    })
  }
}

// Get me
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if(!user) {
      return res.json({
        message: `There is no user ${req.body.username}`
      })
    }

    const token = jwt.sign({
      id: user._id,
      username,
    }, process.env.JWT_SECRET,
    { expiresIn: '30d' })

    return res.json({
      token,
      user, 
    })

  } catch(error) {
    return res.json({
      message: error.message
    })
  }
}