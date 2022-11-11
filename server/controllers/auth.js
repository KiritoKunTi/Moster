import User from '../models/User.js'
import bcrypt from 'bcryptjs'

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
      message: error,
    })
  }
}
// Login 
export const login = async (req, res) => {
  try {

  } catch(error) {
    console.log(error);
  }
}

// Get me
export const getMe = async (req, res) => {
  try {

  } catch(error) {
    console.log(error);
  }
}