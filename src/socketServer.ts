import { Server, Socket } from 'socket.io';

export let io: Server; 


export function initializeSocketServer(httpServer:any) {
    io = new Server(httpServer, {
        cors: { origin: "*" }
    });

    io.on('connection', (socket: Socket) => {
        console.log('A user connected', socket.id);

        socket.on('disconnect', () => {
            console.log('Client disconnected:', socket.id);
        });
    });
}

export function sendVoteUpdate(carId: string| undefined, newVoteCount: number) {
    if (io) {
        io.emit('updateVoteCount', {
            carId,
            newVoteCount,
        });
    }
}
