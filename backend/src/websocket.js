const socketio = require('socket.io');

exports.setupWebSocket = (server) => {
    //console.log('ok')
    const io = socketio(server);

    io.on('connection', socket =>{
        console.log(socket.id);
    });
};