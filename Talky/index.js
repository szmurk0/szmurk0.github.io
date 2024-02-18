const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/talky.html');
});

io.on('connection', (socket) => {
  console.log('User connected');

  // Obsługa wiadomości głosowych
  socket.on('voice', (data) => {
    // Rozsyłaj wiadomość do wszystkich podłączonych użytkowników
    io.emit('voice', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
