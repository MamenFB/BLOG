import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; 
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
import contactRoutes from './routes/contact.route.js'; 
import path from 'path';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
  console.log('MongoDB is connected👍');
}).catch((err) => {
  console.log(err);
});

const __dirname = path.resolve();
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());


if (process.env.NODE_ENV !== 'test') {
  app.listen(3001, () => {
    console.log('Server is running on port 3001👌');
  });
}

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/contact', contactRoutes); 
app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

export default app;
