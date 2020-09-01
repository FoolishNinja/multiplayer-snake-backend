import ModuleTask from "./ModuleTask";

export default class BaseModule {
    private io: any;
    private socket: any;
    private tasks: Array<ModuleTask> = [];

    /**
     * Adds a new task to this module. If the frontend calls the listener the given task will be executed
     * @param {string} listener 
     * @param {Function} task 
     */
    protected AddTask(listener: string, task: Function) {
        this.tasks.push(new ModuleTask(listener, task));
    }

    /**
     * This function gets called by the socket server to initialize all tasks and mount the socket and io.
     */
    public async Connection(io: any, socket: any) {
        this.io = io;
        this.socket = socket;
        for (let i = 0; i < this.tasks.length; i++) socket.on(this.tasks[i].Listener, this.tasks[i].Task);
        await this.Connect(io, socket);
    }

    /**
     * This function gets called by the socket server to mount the disconnect function
     */
    public async Disconnection(io: any, socket: any) {
        await this.Disconnect(io, socket);
    }

    /**
     * This function gets called for every new client that connects. Socket is client specific and io is for all clients.
     */
    public async Connect(io: any, socket: any) {

    }

    /**
     * This function gets called for every client that disconnects
     */
    public async Disconnect(io: any, socket: any) {

    }

    protected get Socket(): any { return this.socket; }
    protected get Io(): any { return this.io; }
}