import express from 'express';
import cors from 'cors';
import router from './routes/index.js';

const app = express();

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
