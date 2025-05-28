import express from 'express';
import { Server } from 'socket.io';
import { config } from 'dotenv';

config();

const app = express();
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('chat message', (msg) => {
    const messageWithTime = {
      ...msg,
      time: new Date().toLocaleTimeString()
    };
    io.emit('chat message', messageWithTime);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
