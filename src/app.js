// Main application entry point
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/index.js';

dotenv.config();

const app = express();

// Database connection for serverless
// Database connection helper
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

// Middleware to ensure DB connection
// Database connection middleware
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

// Parsers
app.use(express.json());
app.use(cors());

// Application routes
app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.send('Welcome to the Task Management API');
});

// Route not found
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'API Route Not Found',
  });
});

// Global error handler (basic)
// Global error handling middleware
app.use((err, req, res, next) => {
  console.error('Error occurred:', err);
  const statusCode = 500;
  const message = err.message || 'Something went wrong!';
  return res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
});

export default app;
