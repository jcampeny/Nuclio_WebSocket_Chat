import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import './App.css';

const socket = io(import.meta.env.VITE_SERVER_URL || 'http://localhost:3000');
const SENDER_NAME = import.meta.env.VITE_SENDER_NAME || 'Anonymous';

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('chat message', {
        text: message,
        sender: SENDER_NAME
      });
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <h1>Nuclio - WebSocket Chat</h1>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <span className="message-time">{msg.time}</span>
            <span className="message-sender">{msg.sender}:</span>
            <span className="message-text">{msg.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;