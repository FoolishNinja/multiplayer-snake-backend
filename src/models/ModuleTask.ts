export default class ModuleTask {
    private listener: string;
    private task: Function;

    /**
     * Module task class constructor. Event listener string, on which activation the task gets called.
     * @param {string} listener 
     * @param {Function} task 
     */
    constructor(listener: string, task: Function) {
        this.listener = listener;
        this.task = task;
    }

    public get Listener(): string { return this.listener; };
    public get Task(): Function { return this.task; };
}