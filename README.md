# Nuclio WebSocket Chat

A simple real-time chat application built with React, Socket.IO, and Express. This project demonstrates basic WebSocket communication and is designed for educational purposes.

## Features

- Real-time messaging using WebSocket
- Message timestamps
- Custom sender names
- Clean and responsive UI
- Simple setup and configuration

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Project Structure

```
.
├── server/            # Backend server code
├── src/               # Frontend React code
├── public/            # Static files
├── .env.local         # Environment variables
└── package.json       # Project dependencies
```

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
npm install
```

3. Edit the `.env.local` file in the root directory to set your name:
```
VITE_SENDER_NAME=YourName
```

4. Start the server:
```bash
npm run dev:server
```

5. In a new terminal, start the client:
```bash
npm run dev:client
```

6. Open your browser and navigate to `http://localhost:5173`

## How It Works

1. The server runs on port 3000 and handles WebSocket connections
2. The client connects to the server using Socket.IO
3. Messages are sent with the following format:
   - Text content
   - Sender name (from environment variable)
   - Timestamp (added by server)

## Development

- Server runs on: `http://localhost:3000`
- Client runs on: `http://localhost:5173`

## Technologies Used

- Frontend:
  - React
  - Socket.IO Client
  - Vite

- Backend:
  - Express
  - Socket.IO
  - Node.js

## Environment Variables

- `VITE_SENDER_NAME`: Your display name in the chat
