import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoute from './routes/auth.js'

const app = express();
dotenv.config();


// CONSTANTS 
const PORT = process.env.PORT || 5001;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;


// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/api/auth', authRoute)

app.get('/', (req, res) => {
  return res.json({message: 'Fall in love'})
})

async function start() {
  try {
    await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ddjlrtl.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)

    app.listen(PORT, () => console.log('server on'));
  } catch(error) {
    console.log(error);
  }
}

start()