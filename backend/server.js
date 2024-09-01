const express = require('express');
const app = express();
const http = require('http'); // Node.js built-in module for creating an HTTP server
const { Server }= require('socket.io') // A class that allows creating a WebSocket server

const server= http.createServer(app); // Creates an HTTP server using the Express app
const io= new Server(server); // Socket.IO server that listens for WebSocket connections on the HTTP server
const userSocketMap= {};

const getAllConnectedClients = (roomId) => { // getting the roomId
    return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
        (socketId) =>{
            return {
                socketId,
                username: userSocketMap[socketId],
            }
        }
    );
}

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`)
    // Sets up an event listener that triggers whenever a new client connects to the Socket.IO server.
    // socket: Represents the connected client with a unique id

    socket.on('join', ({ roomId, username }) => {
        userSocketMap[socket.id] = username;
        socket.join(roomId);
        const clients= getAllConnectedClients(roomId);
        clients.forEach(({socketId}) =>{
            // Notify other users that new user has joined
            io.to(socketId).emit('joined', {
                clients,
                username,
                socketId: socket.id,
            })
        })
    })

    socket.on('code-change', ({roomId, code}) => {
        socket.in(roomId).emit('code-change', {code})
    })

    // socket.on('sync-code', ({socketId, code}) => {
    //     io.to(socketId).emit('sync-code', {code})
    // })

    // leave room
    socket.on('disconnecting', () => {
        const rooms= [...socket.rooms];
        // leave all the room
        rooms.forEach((roomId) => {
            socket.in(roomId).emit('disconnected', {
                socketId: socket.id,
                username: userSocketMap[socket.id],
            })
        })
        delete userSocketMap[socket.id];
        socket.leave();
    })
})

const PORT= process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
});