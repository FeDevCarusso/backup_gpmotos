export default function useSocket(io) {
    io.on('connect', function(socket) {
        return socket.emit('hello')
    })
}