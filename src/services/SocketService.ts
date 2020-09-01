import BaseModule from "../models/BaseModule";
import AuthModule from "../modules/AuthModule";
import UserModule from "../modules/UserModule";

export default class SocketService {
    private io: any;
    private modules: Array<BaseModule> = [
        new AuthModule(),
        new UserModule()
    ];

    /**
     * Socket service class constructor. Mounts all given modules to a new socket io instance
     */
    constructor() {
        console.info('Socket server starting');
        this.io = require('socket.io')(parseInt(process.env.SOCKET_PORT));
        this.io.on('connection', (socket: any) => this.modules.forEach(async (m: BaseModule) => {
            await m.Connection(this.io, socket);
            socket.on('disconnect', async () => {
                await m.Disconnection(this.io, socket);
            });
        }));
        console.info('Socket server successfully started');
    }
}